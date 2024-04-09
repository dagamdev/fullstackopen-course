/** 
 * @typedef {Object} Anecdote
 * @prop {string} id
 * @prop {number} votes
 * @prop {string} content
 */

/** 
 * @typedef {'VOTE' | 'ADD'} AnecdoteState
 * @typedef {{type: AnecdoteState, payload: Partial<Anecdote>}} AnecdoteAction
*/

/** @typedef {import("redux").Dispatch<{type: AnecdoteState, payload: Partial<Anecdote>}>} AnecdoteDispatch */