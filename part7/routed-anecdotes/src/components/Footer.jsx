export default function Footer () {
  const repoUrl = 'https://github.com/dagamdev/fullstackopen-course/tree/main/part7/routed-anecdotes'

  return (
    <footer>
      Anecdote app for Dagamdev.

      See <a href={repoUrl} target="_blank" rel="noreferrer">{repoUrl}</a> for the source code.
    </footer>
  )
}