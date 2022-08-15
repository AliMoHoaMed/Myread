import React from "react";
import Header from "./header";
import Shelfs from "./shelfs";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Home = ({ books, updatee }) => {
  Home.prototype = {
    books: PropTypes.array.isRequired,
    updatee: PropTypes.func.isRequired,
  };

  return (
    <div>
      <Header />

      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <Shelfs
          updatee={updatee}
          data={books.filter((bb) => bb.shelf === "currentlyReading")}
        />
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <Shelfs
          updatee={updatee}
          data={books.filter((bb) => bb.shelf === "wantToRead")}
        />
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <Shelfs
          updatee={updatee}
          data={books.filter((bb) => bb.shelf === "read")}
        />
      </div>
      <div className="open-search">
        <Link to="/search"> Add a book </Link>
      </div>
    </div>
  );
};

export default Home;
