import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

export default function App() {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0, 0))

  const addVote = () => {
    setVotes(v => {
      const newValue = v.slice()
      newValue[selected]++

      return newValue
    })
  }

  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  return (
    <div>
      <Anecdotes {...{ selected, anecdotes, votes, addVote, nextAnecdote }} />
      <WithMostVotes {...{ votes, anecdotes }} />
    </div>
  )
}

function Anecdotes ({ anecdotes, selected, votes, addVote, nextAnecdote }: {
  anecdotes: string[]
  selected: number
  votes: number[]
  addVote: () => void
  nextAnecdote: () => void
}) {
  return (
    <section>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has votes {votes[selected]}</p>
      <div>
        <button onClick={addVote}>Vote</button>
        <button onClick={nextAnecdote}>next anecdote</button>
      </div>
    </section>
  )
}

function WithMostVotes ({ votes, anecdotes }: {
  votes: number[]
  anecdotes: string[]
}) {
  let index = 0, max = 0
  
  for (const [i, vote] of votes.entries()) {
    if (vote > max) {
      index = i
      max = vote
    }
  }

  const theAnecdote = anecdotes[index]

  return (
    <section>
      <h2>Anecdote with most votes</h2>
      <p>{theAnecdote}</p>
    </section>
  )
}
