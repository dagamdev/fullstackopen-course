import { useState } from "react";
import Authors from "./components/authors";
import Books from "./components/books";
import NewBook from "./components/new-book";

const App = () => {
  const [page, setPage] = useState("authors");

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div>

      {page === "authors" && <Authors />}
      {page === "books" && <Books />}
      {page === "add" && <NewBook />}
    </div>
  );
};

export default App;