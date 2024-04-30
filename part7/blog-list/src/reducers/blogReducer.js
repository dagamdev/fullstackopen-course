import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs (state, action) {
      return action.payload
    },
    addBlog (state, action) {
      return [...state, action.payload]
    },
    updateBlog (state, action) {
      return state.map(b => b.id === action.payload.id ? action.payload.blog : b)
    }
  }
})

export const { setBlogs, addBlog, updateBlog } = blogsSlice.actions

export function initializeBlogs () {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export default blogsSlice.reducer
