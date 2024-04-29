import { useState } from "react"
import { useNavigate } from "react-router-dom"

/**
 * 
 * @param {{addNew: (anecdote: Omit<Anecdote, 'id'>) => void, addNotification: (notification: string) => void}} param0 
 * @returns 
 */
export default function CreateNew ({ addNew, addNotification }) {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content,
      author,
      info,
      votes: 0
    })
    addNotification(`New anecdote '${content}' created!`)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a new anecdote</h2>

      <label>
        Content
        <input name='content' type='text' value={content} onChange={(e) => setContent(e.target.value)} required />
      </label>
      <label>
        Author
        <input name='author' type='text' value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </label>
      <label>
        Url for more info
        <input name='info' type='url' value={info} onChange={(e)=> setInfo(e.target.value)} required />
      </label>

      <button>create</button>
    </form>
  )
}