require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.json())
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))
app.use(cors())
app.use(express.static('dist'))

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  Person.find().then(persons => {
    res.json(persons)
  })
})

app.get('/api/info', (req, res) => {
  Person.find().then(persons => {
    res.send(`
      <p>Phonebook has info for ${persons.length} people<p/>
      <p>${new Date()}<p/>
    `)
  })
})

app.get('/api/persons/:id', (req, res, next) => {
  const { id } = req.params

  Person.findById(id).then(person => {
    if (!person) {
      res.status(404).json({
        error: 'Person not found'
      })
      return
    }

    res.json(person)
  }).catch(next)
})

app.delete('/api/persons/:id', (req, res, next) => {
  const { id } = req.params

  Person.findByIdAndDelete(id).then(deletedPerson => {
    if (!deletedPerson) {
      res.status(404).json({
        error: 'Person not found'
      })
      return
    }

    res.status(204).json(deletedPerson)
  }).catch(next)
})

app.post('/api/persons', (req, res, next) => {
  const { name, number } = req.body

  if (!name) {
    res.status(400).json({
      error: 'name missing'
    })
    return
  }

  if (!number) {
    res.status(400).json({
      error: 'number missing'
    })
    return
  }

  const newPerson = new Person({
    name,
    number
  })

  Person.findOne({ name }).then(p => {
    if (p) {
      res.status(400).json({
        error: 'name must be unique'
      })
      return
    }

    newPerson.save().then(person => {
      res.json(person)
    }).catch(next)
  }).catch(() => {
    newPerson.save().then(person => {
      res.json(person)
    }).catch(next)
  })
})

app.put('/api/persons/:id', (req, res, next) => {
  const { id } = req.params
  const { name, number } = req.body

  if (!name && !number) {
    res.status(400).json({
      error: 'no property has been provided to edit'
    })
    return
  }

  Person.findByIdAndUpdate(id, {
    name,
    number
  }, { new: true, runValidators: true, context: 'query' }).then(updatedPerson => {
    if (!updatedPerson) {
      res.status(404).json({
        error: 'Person not found'
      })
      return
    }

    res.json(updatedPerson)
  }).catch(next)
})

app.use((_, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
})

app.use((error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
})

const PORT = process.env.PORT ?? 321
app.listen(PORT, () => {
  console.log(`Server runing in the port ${PORT}`)
})
