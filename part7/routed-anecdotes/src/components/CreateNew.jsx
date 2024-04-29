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
      <h2>create a new anecdote</h2>
      <div>
        content
        <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        author
        <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        url for more info
        <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
      </div>
      <button>create</button>
    </form>
  )
}