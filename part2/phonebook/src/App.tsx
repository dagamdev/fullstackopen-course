import { useState, useEffect } from 'react'
import AddForm from './components/addForm'
import Numbers from './components/numbers'
import Filter from './components/filter'
import type { Person } from './types'
import Notification from './components/notification'
import personsService from './services/persons'

export default function App() {
  const [persons, setPersons] = useState<Person[]>([])
  const [filterBy, setFilterBy] = useState('')
  const [notification, setNotification] = useState<string | null>(null)
  
  useEffect(() => {
    personsService.getAll().then(setPersons).catch(console.error)
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Filter setFilterBy={setFilterBy} />
      <AddForm persons={persons} setPersons={setPersons} setNotification={setNotification} />
      <Numbers persons={persons} filterBy={filterBy} setPersons={setPersons} />
    </div>
  )
}
