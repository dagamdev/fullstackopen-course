import type { ChangeEvent, Dispatch, SetStateAction } from 'react'

export default function Filter ({ setFilterBy }: {
  setFilterBy: Dispatch<SetStateAction<string>>
}) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget

    setFilterBy(value.toLowerCase())
  }

  return (
    <label>
      Filter shown with
      <input onChange={handleChange} type="text" />
    </label>
  )
}