import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

import { Routes, Route } from "react-router-dom";
import Search from "./components/search";
import Home from "./components/home";
import Bookinformation from "./components/bookinformation";
function App() {
  const [books, SetBooks] = useState([]);
  const [flip, setflip] = useState(false);

  useEffect(() => {
    const getmybooks = async () => {
      const mybooks = await BooksAPI.getAll();
      SetBooks(mybooks);
    };
    getmybooks();
  }, []);

  const updatebooks = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const mybooks = books;
    const index = mybooks.indexOf(book);
    if (index >= 0) {
      mybooks[index].shelf = shelf;

      SetBooks(mybooks);
      setflip(!flip);
    } else {
      book.shelf = shelf;
      SetBooks([...books, book]);
    }
  };

  return (
    <Routes>
      <Route exact path="/search" element={<Search updatee={updatebooks} />} />
      <Route exact path="/bookinformation/:id" element={<Bookinformation />} />
      <Route
        exact
        path=""
        element={<Home books={books} updatee={updatebooks} />}
      />
    </Routes>
  );
}

export default App;
