import { useState, useEffect } from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Menu from './components/Menu'
import CreateNew from './components/CreateNew'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const match = useMatch('/anecdotes/:id')
  const anecdote = match 
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null

  const [notification, setNotification] = useState('')

  useEffect(() => {
    if (notification.length === 0) return

    const timeout = setTimeout(() => {
      setNotification('')
    }, 5_000)

    return () => {
      clearTimeout(timeout)
    }
  }, [notification])

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const addNotification = (notification) => {
    setNotification(notification)
  }

  return (
    <main>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification.length !== 0 && <Notification notification={notification} />}
      <Routes>
        <Route path='/anecdotes/:id' element={anecdote && <Anecdote anecdote={anecdote} />} />
        <Route path='/create' element={<CreateNew addNew={addNew} addNotification={addNotification} />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
