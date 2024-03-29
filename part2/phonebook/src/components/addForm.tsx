import { useState, type ChangeEvent, type FormEvent } from 'react'
import personsServices from '../services/persons'
import type { Person, SetState } from '@/types'

export default function AddForm ({ persons, setPersons, setNotification }: {
  persons: Person[]
  setPersons: SetState<Person[]>
  setNotification: SetState<string | null>
}) {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const getHandleChange =  (setState: SetState<string>) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget
  
      setState(value)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const person = persons.find(p => p.name === newName)

    if (person) {
      if (person.number === newNumber) {
        alert(`${newName} is already added to phonebook`)
        return
      }

      const confirm = window.confirm(`${person.name} is already added to phonebook, replace the old number whit a new one?`)
      
      if (confirm) {
        personsServices.update(person.id, { ...person, number: newNumber }).then(updatedPerson => {
          setPersons(ps => ps.map(p => p.id === person.id ? updatedPerson : p))
          setNotification(`Updated ${person.name} number`)
          setTimeout(() => {
            setNotification(null)
          }, 5_000)
        })
      }

      return
    }

    personsServices.create({ name: newName, number: newNumber }).then(newPerson => {
      setPersons(v => [...v, newPerson])
      setNewName('')
      setNewNumber('')
      setNotification(`Added ${newPerson.name}`)
      setTimeout(() => {
        setNotification(null)
      }, 5_000)
    }).catch(console.error)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new</h3>

      <label>
        Name:
        <input onChange={getHandleChange(setNewName)} type="text" value={newName} required />
      </label>
      <label>
        Number:
        <input onChange={getHandleChange(setNewNumber)} type="tel" value={newNumber} required />
      </label>
      <button type="submit">add</button>
    </form>
  )
}