import { useState } from "react"

/**
 * @param {string} type 
 * @returns {{type: string, value: string, onChange: (ev: import("react").ChangeEvent<HTMLInputElement>) => void, reset: () => void}}
 */
export function useField (type) {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    type,
    value,
    onChange,
    reset
  }
}