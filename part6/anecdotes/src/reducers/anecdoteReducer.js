import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

/**
 * Sort the anecdotes in descending order by votes
 * @param {Anecdote} a 
 * @param {Anecdote} b 
 * @returns {Anecdote[]} 
 */
const toSort = (a, b) => b.votes - a.votes

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    update (state, action) {
      return state.map(a => a.id === action.payload.id ? action.payload : a).sort(toSort)
    },
    setAnecdotes (state, action) {
      return action.payload
    },
    addAnecdote (state, action) {
      state.push(action.payload)
    }
  }
})

export const { update, setAnecdotes, addAnecdote } = anecdoteSlice.actions

export function initializeAnecdotes () {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes)) 
  }
}

export function createAnecdote (content) {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch(addAnecdote(newAnecdote))
  }
}

/**
 * @param {string} id 
 * @param {Partial<Omit<Anecdote, 'id'>>} data 
 */
export function updateAnecdote (id, data) {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(id, data)
    dispatch(update(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer
