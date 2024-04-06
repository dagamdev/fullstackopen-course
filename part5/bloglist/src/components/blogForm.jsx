import { useState } from 'react'

/**
 * Blog form component
 * @param {{createBlog: (blogData: Omit<Blog, 'user' | 'id' | 'likes'>) => Promise<void>}} param0 props
 * @returns JSX
 */
export default function BlogForm ({ createBlog }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await createBlog({ title, author, url })

      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (error) {
      console.error(error)
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
        <input onChange={getHandleChange(setTitle)} value={title}
          placeholder='Blog title...' type="text" required
        />
      </label>
      <label>
        Author
        <input onChange={getHandleChange(setAuthor)} value={author}
          placeholder='Blog author...' type="text" required
        />
      </label>
      <label>
        URL
        <input onChange={getHandleChange(setUrl)} value={url}
          placeholder='Blog URL...' type="url" required
        />
      </label>

      <button>Create</button>
    </form>
  )
}
