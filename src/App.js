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
  }, [flip]);

  const updatebooks = async (book, shelf) => {
    await BooksAPI.update(book, shelf);

    setflip(!flip);
  };

  return (
    <Routes>
      <Route
        exact
        path="/search"
        element={<Search shelfbooks={books} updatee={updatebooks} />}
      />
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
