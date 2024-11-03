import { useMutation } from "@apollo/client"
import { ALL_AUTHORS, UPDATE_AUTHOR_BORN } from "../queries"
import { useEffect, useState } from "react"

export default function EditAuthor ({authors}) {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')
  const [updateBorn] = useMutation(UPDATE_AUTHOR_BORN)

  useEffect(() => {
    setName(authors[0]?.name ?? '')
  }, [authors])

  const handleSubmit = (ev) => {
    ev.preventDefault()

    console.log({name, born})
    updateBorn({
      variables: {name, setBornTo: +born},
      refetchQueries: [{
        query: ALL_AUTHORS
      }]
    })

    setName('')
    setBorn('')
  }

  return (
    <section>
      <h2>Set birthyear</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <select
            value={name}
            onChange={({ target }) => { setName(target.value) }}
            required
          >
            {authors.map(author => <option key={author.id} value={author.name}>
              {author.name}
            </option>)}
          </select>
        </label>
        <label>
          <span>Born</span>
          <input
            type="number"
            value={born}
            onChange={({ target }) => setBorn(target.value)}
            required
          />
        </label>

        <button>Update author</button>
      </form>
    </section>
  )
}