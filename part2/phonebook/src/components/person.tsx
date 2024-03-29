import type { Person } from '@/types'

export default function Person ({ person }: {
  person: Person
}) {
  return (
    <li>{person.name} {person.number}</li>
  )
}