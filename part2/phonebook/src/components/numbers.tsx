import Person from './person'
import type { Person as PersonData, SetState } from '@/types'

export default function Numbers ({ persons, filterBy, setPersons }: {
  persons: PersonData[]
  filterBy: string
  setPersons: SetState<PersonData[]>
}) {
  return (
    <section>
      <h3>Numbers</h3>
      <ul>
        {persons.filter(p => p.name.toLowerCase().includes(filterBy))
          .map((person) => <Person key={person.id} person={person} setPersons={setPersons} />)
        }
      </ul>
    </section>
  )
}