import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

export default function AnecdoteList () {
  /** @type {Anecdote[]} */
  const anecdotes = useSelector(({anecdotes, filter}) => anecdotes.filter(a => a.content.toLowerCase().includes(filter)))
  /** @type {AnecdoteDispatch} */
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </li>
      )}
    </ul>
  )
}