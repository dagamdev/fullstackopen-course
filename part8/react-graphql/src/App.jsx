import { useState } from "react";
import Authors from "./components/authors";
import Books from "./components/books";
import NewBook from "./components/new-book";
import LoginForm from "./components/login-form";
import { useLogin } from "./hooks/useLogin";

const App = () => {
  const [page, setPage] = useState("authors");
  const {login} = useLogin()

  return (
    <main>
      <section className="buttons">
        <button onClick={() => setPage("authors")}>Authors</button>
        <button onClick={() => setPage("books")}>Books</button>
        {login && <button onClick={() => setPage("add-book")}>Add book</button>}
        <button onClick={() => setPage("login")}>Login</button>
      </section>

      {page === "authors" && <Authors />}
      {page === "books" && <Books />}
      {page === "add-book" && <NewBook />}
      {page === "login" && <LoginForm />}
    </main>
  );
};

export default App;