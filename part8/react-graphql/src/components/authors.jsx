import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { ALL_AUTHORS } from "../queries"
import EditAuthor from "./edit-author"

const Authors = () => {
  const result = useQuery(ALL_AUTHORS)
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    if (result.data) {
      setAuthors(result.data.allAuthors)
    }
  }, [result])

  return (
    <div style={{display: 'flex', gap: '32px', flexWrap: 'wrap'}}>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditAuthor authors={authors}/>
    </div>
  )
}

export default Authors