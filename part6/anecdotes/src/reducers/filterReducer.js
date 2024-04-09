/**
 * 
 * @param {string} state
 * @param {FilterAction} action
 * @returns {string}
 */
export default (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.payload
    }
    default:
      return state
  }
}

/**
 * @param {string} filter 
 * @returns {FilterAction}
 */
export const filterChange = filter => ({
  type: 'SET_FILTER',
  payload: filter,
})
