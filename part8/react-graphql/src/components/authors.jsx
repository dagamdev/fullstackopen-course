import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { ALL_AUTHORS } from "../queries"
import EditAuthor from "./edit-author"
import { useLogin } from "../hooks/useLogin"

const Authors = () => {
  const result = useQuery(ALL_AUTHORS)
  const [authors, setAuthors] = useState([])
  const {login} = useLogin()

  useEffect(() => {
    if (result.data) {
      setAuthors(result.data.allAuthors)
    }
  }, [result])

  return (
    <section>
      <h2>Authors</h2>

      <div style={{display: 'flex', gap: '32px', flexWrap: 'wrap'}}>
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

        {login && <EditAuthor authors={authors}/>}
      </div>
    </section>
  )
}

export default Authors