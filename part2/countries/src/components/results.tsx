import type { Dispatch, SetStateAction } from 'react'
import type { Countries } from '../country'

export default function Results ({ results, setResults }: {
  results: Countries
  setResults: Dispatch<SetStateAction<Countries>>
}) {
  const showCountry = (name: string) => {
    setResults(rs => rs.filter(r => r.name.common === name))
  }

  return (
    <ul>
      {results.map(r => <li key={r.name.official}>
        <span>{r.name.common}</span> <button onClick={() => showCountry(r.name.common)}>show</button>
      </li>)}
    </ul>
  )
}