import { useState } from 'react'
import blogService from '../services/blogs'
import { useDispatch } from 'react-redux'
import { addBlog } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'

const NewBlog = ({ blogFormRef }) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const newBlog = await blogService.create({ title, url, author })
      dispatch(addBlog(newBlog))
      dispatch(notify(`Blog created: ${newBlog.title}, ${newBlog.author}`))
      blogFormRef.current.toggleVisibility()
      setAuthor('')
      setTitle('')
      setUrl('')
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Blog</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          data-testid='title'
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label>URL:</label>
        <input
          type="text"
          data-testid='url'
          value={url}
          onChange={handleUrlChange}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          data-testid='author'
          value={author}
          onChange={handleAuthorChange}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  )
}

export default NewBlog