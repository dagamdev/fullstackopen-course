import { useState, useEffect } from 'react'
import PersonForm from './components/personForm'
import Numbers from './components/numbers'
import Filter from './components/filter'
import type { Person } from './types'
import Notification from './components/notification'
import personsService from './services/persons'

export default function App() {
  const [persons, setPersons] = useState<Person[]>([])
  const [filterBy, setFilterBy] = useState('')
  const [notification, setNotification] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)
  
  useEffect(() => {
    personsService.getAll().then(setPersons).catch(console.error)
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} close={() => setNotification(null)} />
      <Filter setFilterBy={setFilterBy} />
      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification} />
      <Numbers persons={persons} filterBy={filterBy} setPersons={setPersons} setNotification={setNotification} />
    </div>
  )
}
