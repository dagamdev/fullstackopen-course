import { useState } from 'react'
import AddForm from './components/addForm'
import Numbers from './components/numbers'
import Filter from './components/filter'

export default function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [filterBy, setFilterBy] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilterBy={setFilterBy} />
      <AddForm persons={persons} setPersons={setPersons} />
      <Numbers persons={persons} filterBy={filterBy} />
    </div>
  )
}
