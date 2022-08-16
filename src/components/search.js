import React from "react";
import { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Book from "./book";
const Search = ({ updatee, shelfbooks }) => {
  Search.prototype = {
    updatee: PropTypes.func.isRequired,
  };

  let [searchword, setsearchword] = useState("");
  let [show, setshow] = useState("");
  let [searchbooks, setbookss] = useState([]);

  const SearchByWord = async (requirdbook) => {
    setsearchword(requirdbook.toLowerCase());

    if (searchword !== "") {
      const newlist = await BooksAPI.search(searchword);

      if (!newlist.error) {
        newlist.map((newbook) =>
          shelfbooks.forEach((mybook) =>
            newbook.id === mybook.id ? (newbook.shelf = mybook.shelf) : null
          )
        );

        setbookss(newlist);
        setshow(true);
      } else {
        setbookss([]);
      }
    } else {
      setbookss([]);
    }
  };

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={searchword}
              placeholder="Search by title, author, or ISBN"
              onChange={(e) => SearchByWord(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchword ? (
              searchbooks &&
              searchbooks.map((bs) => (
                <Book updatebooks={updatee} key={bs.id} bookinfo={bs} />
              ))
            ) : (
              <p style={{ fontSize: "20px" }}> {show} </p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Search;
