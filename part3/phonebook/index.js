const express = require('express')
const app = express()

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

const PORT = 321
app.listen(PORT, () => {
  console.log(`Server runing in the port ${PORT}`)
})
