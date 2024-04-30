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

export const notify = (message, type = 'success') => {
  return dispatch => {
    dispatch(createNotification({ message, type }))
    setTimeout(() => {
      dispatch(createNotification(null))
    }, 5000)
  }
}

export default notificationSlice.reducer
