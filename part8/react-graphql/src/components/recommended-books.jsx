import { useLazyQuery, useQuery } from "@apollo/client"
import { ALL_BOOKS, ME } from "../queries"
import { useState, useEffect } from "react"
import BooksTable from "./books-table"

export default function RecommendedBooks () {
  const meResult = useQuery(ME)
  const [getAllBooks, booksResult] = useLazyQuery(ALL_BOOKS)
  const [recommendedBooks, setRecommendedBooks] = useState([])

  useEffect(() => {
    if (meResult.data) {
      getAllBooks({variables: {
        author: meResult.data.me.name,
        genre: meResult.data.me.favoriteGenre
      }})
    }
  }, [meResult.data])

  useEffect(() => {
    if (booksResult.data) {
      setRecommendedBooks(booksResult.data.allBooks)
    }
  }, [booksResult.data])

  return (
    <section>
      <h2>Recommendations</h2>
      <p>Books in your favorite genre {meResult.data?.me.favoriteGenre && <strong>{meResult.data.me.favoriteGenre}</strong>}</p>

      <BooksTable books={recommendedBooks}/>
    </section>
  )
}