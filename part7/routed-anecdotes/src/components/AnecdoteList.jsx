/**
 * 
 * @param {{anecdotes: Anecdote[]}} param0 
 * @returns {React.JSX.Element}
 */
export default function AnecdoteList ({ anecdotes }) {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => <li key={anecdote.id} >{anecdote.content}</li>)}
      </ul>
    </div>
  )
}
