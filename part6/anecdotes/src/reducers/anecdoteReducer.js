const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

/**
 * Creates the object of a new anecdote
 * @param {string} anecdote 
 * @returns {Anecdote}
 */
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

/**
 * Sort the anecdotes in descending order by votes
 * @param {Anecdote} a 
 * @param {Anecdote} b 
 * @returns {Anecdote[]} 
 */
const toSort = (a, b) => b.votes - a.votes

/**
 * 
 * @param {Anecdote[]} state
 * @param {AnecdoteAction} action
 * @returns {Anecdote[]}
 */
export default (state = initialState, action) => {

  switch (action.type) {
    case 'VOTE': {
      const anecdote = state.find(a => a.id === action.payload.id)
      anecdote.votes++

      return state.map(a => a.id === action.payload.id ? anecdote : a).sort(toSort)
    }
    case 'ADD': {
      return [...state, asObject(action.payload.content)].sort(toSort)
    }
  }

  return state
}

/**
 * @param {string} id 
 * @returns {AnecdoteState}
 */
export const addVote = (id) => ({
  type: 'VOTE',
  payload: {id}
})

/**
 * @param {string} content
 * @returns {AnecdoteState}
 */
export const createAnecdote = (content) => ({
  type: 'ADD',
  payload: {content}
})