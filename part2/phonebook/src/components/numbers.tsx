import Person from './person'
import type { Person as PersonData } from '@/types'

export default function Numbers ({ persons, filterBy }: {
  persons: PersonData[]
  filterBy: string
}) {
  return (
    <section>
      <h3>Numbers</h3>
      <ul>
        {persons.filter(p => p.name.toLowerCase().includes(filterBy)).map((person) => <Person key={person.id} person={person} />)}
      </ul>
    </section>
  )
}