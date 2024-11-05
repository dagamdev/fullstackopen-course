import { gql, useApolloClient, useLazyQuery, useQuery, useSubscription } from "@apollo/client"
import { ALL_BOOKS, ALL_GENRES, BOOK_ADDED } from "../queries"
import { useState, useEffect } from "react"
import BooksTable from "./books-table"

const Books = () => {
  const genresResult = useQuery(ALL_GENRES)
  const [getAllBooks, booksResult] = useLazyQuery(ALL_BOOKS)
  const [allGenres, setAllGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState()
  const client = useApolloClient()

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

  useSubscription(BOOK_ADDED, {
    onData ({data}) {
      console.log(data)
      const addedBook = data.data.bookAdded
      window.alert(`New book created: ${addedBook.title}`)

      if (selectedGenre === undefined || addedBook.genres.includes(selectedGenre)) {
        client.cache.modify({
          fields: {
            items(existingItems = []) {
              const newItemRef = client.cache.writeFragment({
                data: data.newItem,
                fragment: gql`
                  fragment NewItem on Item {
                    id
                    title
                    author {
                      id
                      name
                      born
                    }
                    genres
                    published
                  }
                `
              });
              return [...existingItems, newItemRef];
            },
          }
        })
        getAllBooks({variables: {
          genre: selectedGenre
        }})
      }
    }
  })

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