import { gql } from "@apollo/client"

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      id
      name
      born
      bookCount
    }
  }
`

export const ALL_BOOKS = gql`
  query AllBooks($author: String, $genre: String) {
    allBooks(author: $author, genre: $genre) {
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
  }
`

export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $published: Int!, $author: String!, $genres: [String!]!) {
    addBook(
      title: $title
      published: $published
      author: $author
      genres: $genres
    ) {
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
  }
`

export const UPDATE_AUTHOR_BORN = gql`
  mutation updateBorn($name: String!, $setBornTo: Int!) {
    editAuthor(
      name: $name
      setBornTo: $setBornTo
    ) {
      id
      name
      born
      bookCount
    }
  }
`

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`

export const ME = gql`
  query Me {
    me {
      id
      username
      favoriteGenre
    }
  }
`

export const ALL_GENRES = gql`
  query AllGenres {
    allGenres
  }
`

export const BOOK_ADDED = gql`
  subscription BookAdded {
    bookAdded {
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
  }
`
