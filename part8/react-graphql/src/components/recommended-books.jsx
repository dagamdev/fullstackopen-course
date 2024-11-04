import { useQuery } from "@apollo/client"
import { ALL_BOOKS, ME } from "../queries"
import { useState, useEffect } from "react"
import BooksTable from "./books-table"

export default function RecommendedBooks () {
  const meResult = useQuery(ME)
  const booksResult = useQuery(ALL_BOOKS)
  const [recommendedBooks, setRecommendedBooks] = useState([])
  const [favoriteGenre, setFavoriteGenre] = useState()

  useEffect(() => {
    if (meResult.data && booksResult.data) {
      setRecommendedBooks(booksResult.data.allBooks.filter(b => b.genres.includes(meResult.data.me.favoriteGenre)))
      setFavoriteGenre(meResult.data.me.favoriteGenre)
    }
  }, [meResult.data, booksResult.data])

  return (
    <section>
      <h2>Recommendations</h2>
      <p>Books in your favorite genre {favoriteGenre && <strong>{favoriteGenre}</strong>}</p>

      <BooksTable books={recommendedBooks}/>
    </section>
  )
}