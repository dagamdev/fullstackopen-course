import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

export default function Filter () {
  /** @type {FilterDispatch} */
  const dispatch = useDispatch()

  /**
   * @param {import('react').ChangeEvent<HTMLInputElement>} event 
   */
  const handleChange = (event) => {
    dispatch(filterChange(event.target.value.trim().toLowerCase()))
  }
  
  return (
    <label>
      <input onChange={handleChange} type="search" />
    </label>
  )
}