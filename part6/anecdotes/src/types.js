/** 
 * @typedef {Object} Anecdote
 * @prop {string} id
 * @prop {number} votes
 * @prop {string} content
 */

/** 
 * @typedef {'VOTE' | 'ADD'} AnecdoteState
 * @typedef {{type: AnecdoteState, payload: Partial<Anecdote>}} AnecdoteAction
 * @typedef {{type: 'SET_FILTER', payload: string}} FilterAction
*/

/**
 * @template T
 * @typedef {import("redux").Dispatch<T>} SetDispatch
 */

/**
 * @typedef {SetDispatch<AnecdoteAction>} AnecdoteDispatch 
 * @typedef {SetDispatch<FilterAction>} FilterDispatch
 */