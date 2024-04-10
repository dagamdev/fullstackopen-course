import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from '@tanstack/react-query'
import { getAll } from './requests'

const App = () => {

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const anecdotes = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,
    retry: false
  })

  console.log(anecdotes)

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.isError
        ? <p>Anecdote service not available due to problems in server</p>
        : anecdotes.isLoading
          ? <p>Loading anecdotes...</p>
          : anecdotes.data.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => handleVote(anecdote)}>vote</button>
              </div>
            </div>)
      }
    </div>
  )
}

export default App
