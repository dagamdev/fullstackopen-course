import { useQuery } from "@apollo/client"
import { ALL_BOOKS } from "../queries"
import { useState, useEffect } from "react"
import BooksTable from "./books-table"

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

      <BooksTable books={books.filter(b => selectedGenre ? b.genres.includes(selectedGenre) : true)}/>
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