import { useState, type Dispatch, type SetStateAction, type ChangeEvent, type FormEvent } from 'react'
import personsServices from '../services/persons'
import type { Person } from '@/types'

export default function AddForm ({ persons, setPersons }: {
  persons: Person[]
  setPersons: Dispatch<SetStateAction<Person[]>>
}) {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const getHandleChange =  (setState: Dispatch<SetStateAction<string>>) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget
  
      setState(value)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (persons.some(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    personsServices.create({ name: newName, number: newNumber }).then(newPerson => {
      setPersons(v => [...v, newPerson])
      setNewName('')
      setNewNumber('')
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