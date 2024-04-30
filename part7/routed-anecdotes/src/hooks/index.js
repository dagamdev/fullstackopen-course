import { useState } from "react"

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