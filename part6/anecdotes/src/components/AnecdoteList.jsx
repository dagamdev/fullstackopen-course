import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

export default function AnecdoteList () {
  /** @type {Anecdote[]} */
  const anecdotes = useSelector(({anecdotes, filter}) => {
    return anecdotes.filter(a => a.content.toLowerCase().includes(filter))
  })
  /** @type {AnecdoteDispatch} */
  const dispatch = useDispatch()

  /**
   * @param {Anecdote} anecdote 
   */
  const vote = (anecdote) => {
    dispatch(updateAnecdote(anecdote.id, {votes: anecdote.votes + 1}))
    dispatch(setNotification(`You voted '${anecdote.content}'`))
  }

  return (
    <ul>
      {anecdotes.map(anecdote =>
        <li key={anecdote.id}>
          <p>
            {anecdote.content}
          </p>
          <div>
            <p>has {anecdote.votes}</p>
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </li>
      )}
    </ul>
  )
}