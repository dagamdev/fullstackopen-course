import { useQuery } from "@apollo/client"
import { ALL_BOOKS } from "../queries"
import { useState, useEffect } from "react"

const Books = () => {
  const result = useQuery(ALL_BOOKS)
  const [books, setBooks] = useState([])
  const [allGenres, setAllGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState()
  
  useEffect(() => {
    console.log(result)
    if (result.data) {
      setBooks(result.data.allBooks)
      const genres = []

      for (const b of result.data.allBooks) {
        // console.log(b)
        for (const g of b.genres) {
          if (!genres.includes(g)) genres.push(g)
        }
      }

      setAllGenres(genres)
    }
  }, [result.data])

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.filter(b => selectedGenre ? b.genres.includes(selectedGenre) : true).map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ol style={{display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '0'}}>
        {allGenres.map(g => <button
          key={g}
          onClick={() => { setSelectedGenre(sg => sg === g ? undefined : g) }}
        >{g}</button>)}
      </ol>
    </div>
  )
}

export default Books