import { useField, useResource } from './hooks'

const App = () => {
  const [content, resetContent] = useField('text')
  const [name, resetName] = useField('text')
  const [number, resetNumber] = useField('text')

  const [notes, noteService] = useResource('http://localhost:321/notes')
  const [persons, personService] = useResource('http://localhost:321/persons')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
    resetContent()
  }
 
  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value})
    resetName()
    resetNumber()
  }

  return (
    <main>
      <section>
        <h2>Notes</h2>
        <form onSubmit={handleNoteSubmit}>
          <label>
            Content
            <input {...content} />
          </label>
          <button>create</button>
        </form>
        {notes.map(n => <p key={n.id}>{n.content}</p>)}
      </section>

      <section>
        <h2>Persons</h2>
        <form onSubmit={handlePersonSubmit}>
          <label>
            Name
            <input {...name} /> <br/>
          </label>
          <label>
            Number
            <input {...number} />
          </label>
          <button>create</button>
        </form>
        {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
      </section>
    </main>
  )
}

export default App