const express = require('express')
const app = express()

app.use(express.json())

const persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send(`<h1>Hello World!</h1>`)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/info', (req, res) => {
  res.send(`
    <p>Phonebook has info for ${persons.length} people<p/>
    <p>${new Date()}<p/>
  `)
})

app.get('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const person = persons.find(p => p.id === +id)

  if (!person) {
    res.status(404).json({
      error: 'Person not found'
    })
    return
  }
  res.statusMessage
  
  res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const personIndex = persons.findIndex(p => p.id === +id)

  if (personIndex === -1) {
    res.status(404).json({
      error: 'Person not found'
    })
    return
  }

  persons.splice(personIndex, 1)
  
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const { name, number } = req.body
  console.log({name, number})
  
  if (!name) {
    res.status(400).json({
      error: 'name mising'
    })
    return
  }

  if (!number) {
    res.status(400).json({
      error: 'number mising'
    })
    return
  }

  const newPerson = {
    id: Math.floor(Math.random() * 888) + 111,
    name,
    number
  }

  persons.push(newPerson)

  res.json(newPerson)
})

const PORT = 321
app.listen(PORT, () => {
  console.log(`Server runing in the port ${PORT}`)
})
