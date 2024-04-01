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
  response.send(`<h1>Hello World!</h1>`)
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

app.get('/api/persons/:id', (req, res) => {
  const { id } = req.params

  Person.findById(id).then(person => {
    res.json(person)
  }).catch(() => {
    res.status(404).json({
      error: 'Person not found'
    })
  })
})

app.delete('/api/persons/:id', (req, res) => {
  const { id } = req.params

  Person.findByIdAndDelete(id).then(deletedPerson => {
    res.status(204).json(deletedPerson)
  }).catch(() => {
    res.status(404).json({
      error: 'Person not found'
    })
  })
})

app.post('/api/persons', (req, res) => {
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

  Person.findOne({ name }).then(p => {
    if (p) {
      res.status(400).json({
        error: 'name must be unique'
      })
      return
    }

    const newPerson = new Person({
      name,
      number
    })
  
    newPerson.save().then(person => {
      res.json(person)
    }).catch(() => {
      res.status(404).json({
        error: 'An error has occurred'
      })
    })
  })
})

app.use((_, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
})

const PORT = process.env.PORT ?? 321
app.listen(PORT, () => {
  console.log(`Server runing in the port ${PORT}`)
})
