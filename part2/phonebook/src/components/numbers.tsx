import Person from './person'
import type { Person as PersonData } from '@/types'

export default function Numbers ({ persons, filterBy }: {
  persons: PersonData[]
  filterBy: string
}) {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(p => p.name.toLowerCase().includes(filterBy)).map((person) => <Person key={person.id} person={person} />)}
      </ul>
    </>
  )
}