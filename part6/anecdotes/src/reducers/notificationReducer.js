import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    createNotification (state, action) {
      return action.payload
    },
    deleteNotification () {
      return null
    }
  }
})

export const { createNotification, deleteNotification } = notificationSlice.actions

let timeoutNotifi

/**
 * @param {string} message 
 * @param {number} time Time in seconds
 */
export function setNotification (message, time = 5) {
  return dispatch => {
    dispatch(createNotification(message))

    if (timeoutNotifi) {
      clearTimeout(timeoutNotifi)
    }

    timeoutNotifi = setTimeout(() => {
      dispatch(deleteNotification())
    }, time * 1000)
  }
}

export default notificationSlice.reducer
