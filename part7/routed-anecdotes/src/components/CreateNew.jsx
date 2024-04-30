import { useNavigate } from "react-router-dom"
import { useField } from "../hooks"

/**
 * 
 * @param {{addNew: (anecdote: Omit<Anecdote, 'id'>) => void, addNotification: (notification: string) => void}} param0 
 * @returns 
 */
export default function CreateNew ({ addNew, addNotification }) {
  const { reset: resetContent, ...content} = useField('text')
  const { reset: resetAuthor, ...author} = useField('text')
  const { reset: resetInfo, ...info} = useField('url')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    addNotification(`New anecdote '${content.value}' created!`)
    navigate('/')
  }

  const handleReset = () => {
    resetContent()
    resetAuthor()
    resetInfo()
  }

  return (
    <form onSubmit={handleSubmit} id="form">
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

      <div>
        <button form="form">Create</button>
        <button onChange={handleReset}>Reset</button>
      </div>
    </form>
  )
}