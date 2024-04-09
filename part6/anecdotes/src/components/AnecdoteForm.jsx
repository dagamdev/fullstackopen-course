import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

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
    dispatch(createNotification('created anecdote'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new</h2>
      <input name='anecdote' type='text' />
      <button>create</button>
    </form>
  )
}