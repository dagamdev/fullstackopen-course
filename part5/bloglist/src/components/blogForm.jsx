import { useState } from 'react'
import blogService from '../services/blogs'

/**
 * Blog form component
 * @param {{setBlogs: () => void, setNotification: SetNotifi}} param0 props
 * @returns JSX
 */
export default function BlogForm ({ setBlogs, setNotification }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const newBlog = await blogService.create({ title, author, url })

      setBlogs(bs => [...bs, newBlog])
      setTitle('')
      setAuthor('')
      setUrl('')
      setNotification({
        type: 'success',
        message: `A new ${author} blog has been created`
      })
    } catch (error) {
      console.error(error)
      setNotification({
        type: 'error',
        message: error.response.data.error
      })
    }
  }

  const getHandleChange = (setState) => {
    return ({ currentTarget }) => setState(currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Create new blog</h2>
      <label>
        Title
        <input onChange={getHandleChange(setTitle)} value={title} type="text" required />
      </label>
      <label>
        Author
        <input onChange={getHandleChange(setAuthor)} value={author} type="text" required />
      </label>
      <label>
        URL
        <input onChange={getHandleChange(setUrl)} value={url} type="url" required />
      </label>

      <button>Create</button>
    </form>
  )
}
