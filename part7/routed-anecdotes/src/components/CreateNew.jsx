import { useNavigate } from "react-router-dom"
import { useField } from "../hooks"

/**
 * 
 * @param {{addNew: (anecdote: Omit<Anecdote, 'id'>) => void, addNotification: (notification: string) => void}} param0 
 * @returns 
 */
export default function CreateNew ({ addNew, addNotification }) {
  const content = useField('text')
  const author = useField('text')
  const info = useField('url')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
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
        <input name='content' {...content} required />
      </label>
      <label>
        Author
        <input name='author' {...author} required />
      </label>
      <label>
        Url for more info
        <input name='info' {...info} required />
      </label>

      <button>create</button>
    </form>
  )
}