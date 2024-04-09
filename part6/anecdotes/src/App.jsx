import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  /** @type {Anecdote[]} */
  const anecdotes = useSelector(state => state)
  /** @type {AnecdoteDispatch} */
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({type: 'VOTE', payload: {id}})
  }

  /**
   * @param {import('react').FormEvent<HTMLFormElement>} event submit event
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    
    const content = event.target.anecdote.value
    dispatch({type: 'ADD', payload: {content}})
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name='anecdote' type='text' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App