import personsService from '../services/persons'
import type { Notification, Person, SetState } from '@/types'

export default function Person ({ person, setPersons, setNotification }: {
  person: Person
  setPersons: SetState<Person[]>
  setNotification: SetState<Notification | null>
}) {  
  const deletePerson = () => {
    const confirm = window.confirm(`Delete ${person.name}`)

    if (!confirm) return

    personsService.delete(person.id).then(() => {
      setNotification({
        type: 'success',
        message: `${person.name} number has been deleted`
      })
      setPersons(ps => ps.filter(p => p.id !== person.id))
    }).catch(() => {
      setPersons(ps => ps.filter(p => p.id !== person.id))
      setNotification({
        type: 'error',
        message: `${person.name} number is already deleted`
      })
    })
  }

  return (
    <li className='person'>
      <p>
        <strong>{person.name}</strong>
        <span>{person.number}</span>
      </p>
      <button onClick={deletePerson}>Delete</button>
    </li>
  )
}