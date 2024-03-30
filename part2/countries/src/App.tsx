import { useState, useRef, useEffect, type ChangeEvent } from 'react'
import axios from 'axios'
import Country from './components/country'
import type { Countries } from './country'
import Results from './components/results'

function App() {
  const timeout = useRef<number | null>(null)
  const [countries, setCountries] = useState<Countries>([])
  const [results, setResults] = useState<Countries>([])
  const [uniqueResult] = results

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(res => {
      setCountries(res.data)
    }).catch(console.error)
  }, [])

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.toLowerCase().trim()

    if (!value) {
      setResults([])
      return
    }
    if (timeout.current) clearTimeout(timeout.current)
    
    timeout.current = setTimeout(() => {
      // console.log(value)
      let results = countries.filter(c => c.name.common.toLowerCase() === value)

      if (!results.length) {
        results = countries.filter(c => c.name.common.toLowerCase().startsWith(value))
      }

      setResults(results)
    }, 600)

  }

  return (
    <>
      <label>
        Find countries
        <input onChange={handleSearch} type="search" />
      </label>

      {results.length === 0
        ? <p>Search a country</p>
        : results.length === 1
          ? <Country country={uniqueResult} />
          : results.length > 10
            ? <p>Too many matches, specify another filter</p>
            : <Results results={results} setResults={setResults} />
      }
    </>
  )
}

export default App
