import { useState, useEffect } from 'react'
import AddForm from './components/addForm'
import Numbers from './components/numbers'
import Filter from './components/filter'
import axios from 'axios'
import type { Person } from './types'

export default function App() {
  const [persons, setPersons] = useState<Person[]>([])
  const [filterBy, setFilterBy] = useState('')
  
  useEffect(() => {
    axios.get('http://localhost:200/persons').then(response => {
      setPersons(response.data)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilterBy={setFilterBy} />
      <AddForm persons={persons} setPersons={setPersons} />
      <Numbers persons={persons} filterBy={filterBy} setPersons={setPersons} />
    </div>
  )
}
