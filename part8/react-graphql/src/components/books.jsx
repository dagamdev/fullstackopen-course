import { useLazyQuery, useQuery } from "@apollo/client"
import { ALL_BOOKS, ALL_GENRES } from "../queries"
import { useState, useEffect } from "react"
import BooksTable from "./books-table"

const Books = () => {
  const genresResult = useQuery(ALL_GENRES)
  const [getAllBooks, booksResult] = useLazyQuery(ALL_BOOKS)
  const [allGenres, setAllGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState()

  useEffect(() => {
    getAllBooks({variables: {
      genre: selectedGenre
    }})
  }, [selectedGenre])

  useEffect(() => {
    if (genresResult.data) {
      setAllGenres(genresResult.data.allGenres)
    }
  }, [genresResult.data])

  return (
    <div>
      <h2>books</h2>

      {booksResult.loading
        ? <strong>Loading books...</strong> 
        : booksResult.data && <BooksTable books={booksResult.data.allBooks}/>}
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