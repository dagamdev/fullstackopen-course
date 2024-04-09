import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

export default function AnecdoteList () {
  /** @type {Anecdote[]} */
  const anecdotes = useSelector(state => state)
  /** @type {AnecdoteDispatch} */
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id))
  }

  return (
    <section>
      <h2>Anecdotes</h2>
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
    </section>
  )
}