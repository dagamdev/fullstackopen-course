import Person from './person'
import type { Notification, Person as PersonData, SetState } from '@/types'

export default function Numbers ({ persons, filterBy, setPersons, setNotification }: {
  persons: PersonData[]
  filterBy: string
  setPersons: SetState<PersonData[]>
  setNotification: SetState<Notification | null>
}) {
  return (
    <section>
      <h3>Numbers</h3>
      <ul>
        {persons.filter(p => p.name.toLowerCase().includes(filterBy))
          .map((person) => <Person
            key={person.id}
            person={person}
            setPersons={setPersons}
            setNotification={setNotification}
          />)
        }
      </ul>
    </section>
  )
}