import { useEffect, useState } from "react";
import Authors from "./components/authors";
import Books from "./components/books";
import NewBook from "./components/new-book";
import LoginForm from "./components/login-form";
import { useLogin } from "./hooks/useLogin";
import RecommendedBooks from "./components/recommended-books";
import { useSubscription } from "@apollo/client";
import { BOOK_ADDED } from "./queries";

const App = () => {
  const [page, setPage] = useState("authors");
  const {login, setLogin} = useLogin()

  useEffect(() => {
    if (login && page === 'login') setPage('authors')
  }, [login])

  useSubscription(BOOK_ADDED, {
    onData ({data}) {
      console.log(data)
      window.alert(`New book created: ${data.bookAdded.title}`)
    }
  })

  return (
    <main>
      <section className="buttons">
        <button onClick={() => setPage("authors")}>Authors</button>
        <button onClick={() => setPage("books")}>Books</button>
        {login && <>
          <button onClick={() => setPage("add-book")}>Add book</button>
          <button onClick={() => setPage("recommend")}>Recommend</button>
        </>}
        {login ? <button onClick={() => {
          setLogin(false)
          localStorage.removeItem('token')
        }}>Logout</button> : <button onClick={() => setPage("login")}>Login</button>}
      </section>

      {page === "authors" && <Authors />}
      {page === "books" && <Books />}
      {page === "add-book" && <NewBook />}
      {page === "login" && <LoginForm />}
      {page === "recommend" && <RecommendedBooks />}
    </main>
  );
};

export default App;