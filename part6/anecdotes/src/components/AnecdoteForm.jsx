import { useDispatch } from 'react-redux'
import { addAnecdote, createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

export default function AnecdoteForm () {
  /** @type {AnecdoteDispatch} */
  const dispatch = useDispatch()

  /**
   * @param {import('react').FormEvent<HTMLFormElement>} event submit event
   */
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const content = event.target.anecdote.value
    
    try {
      const newAnecdote = await anecdoteService.create(content)
      
      dispatch(addAnecdote(newAnecdote))
      event.target.anecdote.value = ''
      dispatch(createNotification('created anecdote'))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new</h2>
      <input name='anecdote' type='text' />
      <button>create</button>
    </form>
  )
}