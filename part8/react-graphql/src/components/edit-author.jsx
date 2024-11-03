import { useMutation } from "@apollo/client"
import { ALL_AUTHORS, UPDATE_AUTHOR_BORN } from "../queries"
import { useState } from "react"

export default function EditAuthor () {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')
  const [updateBorn] = useMutation(UPDATE_AUTHOR_BORN)

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
          <input 
            type="text" 
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          <span>Born</span>
          <input
            type="number"
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </label>

        <button>Update author</button>
      </form>
    </section>
  )
}