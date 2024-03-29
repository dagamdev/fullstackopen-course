import { useState, type Dispatch, type SetStateAction, type ChangeEvent, type FormEvent } from 'react'
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

    setPersons(v => [...v, { name: newName, number: newNumber, id: v.length + 1 }])
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new</h2>

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