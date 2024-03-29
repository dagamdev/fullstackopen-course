import personsService from '../services/persons'
import type { Person, SetState } from '@/types'

export default function Person ({ person, setPersons }: {
  person: Person
  setPersons: SetState<Person[]>
}) {
  const deletePerson = () => {
    const confirm = window.confirm(`Delete ${person.name}`)

    if (!confirm) return

    personsService.delete(person.id).then(person => {
      setPersons(ps => ps.filter(p => p.id !== person.id))
    }).catch(console.error)
  }

  return (
    <li>
      <span>{person.name}</span>
      <br />
      <span>{person.number}</span>
      <button onClick={deletePerson}>Delete</button>
    </li>
  )
}