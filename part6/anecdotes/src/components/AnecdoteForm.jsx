import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

export default function AnecdoteForm () {
  /** @type {AnecdoteDispatch} */
  const dispatch = useDispatch()

  /**
   * @param {import('react').FormEvent<HTMLFormElement>} event submit event
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    
    const content = event.target.anecdote.value
    dispatch(createAnecdote(content))
    event.target.anecdote.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>create new</h2>
      <div><input name='anecdote' type='text' /></div>
      <button>create</button>
    </form>
  )
}