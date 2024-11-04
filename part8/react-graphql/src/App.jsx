import { useState } from "react";
import Authors from "./components/authors";
import Books from "./components/books";
import NewBook from "./components/new-book";

const App = () => {
  const [page, setPage] = useState("authors");

  return (
    <main>
      <section className="buttons">
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </section>

      {page === "authors" && <Authors />}
      {page === "books" && <Books />}
      {page === "add" && <NewBook />}
    </main>
  );
};

export default App;