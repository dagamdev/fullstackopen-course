import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getAll, updateAnecdote } from './requests'
import { useNotification } from './hooks/useNotification'

const App = () => {
  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.map(a => a.id === updateAnecdote.id ? updateAnecdote : a))
    }
  })

  const notificationDispatch = useNotification()[1]

  const handleVote = (anecdote) => {
    anecdote.votes++
    updateAnecdoteMutation.mutate(anecdote)
    notificationDispatch({type: 'CREATE', payload: `Anecdote '${anecdote.content}' voted`})
  }

  const anecdotes = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,
    retry: false
  })

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
