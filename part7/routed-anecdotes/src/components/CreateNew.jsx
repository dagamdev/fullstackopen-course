import { useState } from "react"

/**
 * 
 * @param {{addNew: (anecdote: Omit<Anecdote, 'id'>) => void}} param0 
 * @returns 
 */
export default function CreateNew ({ addNew }) {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content,
      author,
      info,
      votes: 0
    })
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