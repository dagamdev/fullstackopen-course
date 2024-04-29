/**
 * @param {{anecdote: Anecdote}} param0 
 * @returns {React.JSX.Element}
 */
export default function Anecdote ({ anecdote }) {
  return (
    <section>
      <h2>{anecdote.content} by {anecdote.author}</h2>

      <p>Has {anecdote.votes} votes</p>

      <p>For more info see <a href={anecdote.info} target="_blank" rel="noreferrer">{anecdote.info}</a></p>
    </section>
  )
}