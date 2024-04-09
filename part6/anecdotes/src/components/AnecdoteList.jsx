import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

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
    dispatch(addVote(anecdote.id))
    dispatch(createNotification(`You voted '${anecdote.content}'`))
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