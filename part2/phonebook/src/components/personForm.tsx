import { useState, type ChangeEvent, type FormEvent } from 'react'
import personsServices from '../services/persons'
import type { Notification, Person, SetState } from '@/types'

export default function PersonForm ({ persons, setPersons, setNotification }: {
  persons: Person[]
  setPersons: SetState<Person[]>
  setNotification: SetState<Notification | null>
}) {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const getHandleChange =  (setState: SetState<string>) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget
  
      setState(value)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
          setNotification({
            type: 'success',
            message: `Updated ${person.name} number`
          })
          setNewName('')
          setNewNumber('')
        }).catch((err) => {
          console.log(err.response.data.error)
          setNotification({
            type: 'error',
            message: `${err.response.data.error}`
          })
        })
      }

      return
    }

    personsServices.create({ name: newName, number: newNumber }).then(newPerson => {
      setPersons(v => [...v, newPerson])
      setNewName('')
      setNewNumber('')
      setNotification({
        type: 'success',
        message: `Added ${newPerson.name}`
      })
      setNewName('')
      setNewNumber('')
    }).catch((err) => {
      console.error(err.response.data.error)
      setNotification({
        type: 'error',
        message: `${err.response.data.error}`
      })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new</h3>

      <label>
        Name:
        <input name='name' onChange={getHandleChange(setNewName)} type="text" value={newName} required />
      </label>
      <label>
        Number:
        <input name='number' onChange={getHandleChange(setNewNumber)} type="tel" value={newNumber} required />
      </label>
      <button type="submit">add</button>
    </form>
  )
}