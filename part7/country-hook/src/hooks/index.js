import axios from "axios"
import { useEffect, useState } from "react"

/**
 * @param {string} type 
 * @returns {{type: string, value: string, onChange: () => void}}
 */
export function useField (type) {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

/**
 * @param {string} name 
 */
export function useCountry (name) {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if (name.length === 0) return

    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`).then(res => {
      setCountry({data: res.data, found: true})
    }).catch(err => {
      console.error(err)
      setCountry({found: false})
    })
  }, [name])

  return country
}
