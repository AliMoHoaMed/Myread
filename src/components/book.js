import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Book = ({ bookinfo, updatebooks }) => {
  Book.prototype = {
    bookinfo: PropTypes.array.isRequired,
    updatebooks: PropTypes.func.isRequired,
  };

  const [bookshelf] = useState(bookinfo.shelf || "none");

  return (
    <div className="book">
      <div className="book-top">
        <Link to={"/bookinformation/" + bookinfo.id}>
          {" "}
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                bookinfo.imageLinks
                  ? bookinfo.imageLinks.smallThumbnail
                  : "none"
              })`,
            }}
          >
            {" "}
          </div>{" "}
        </Link>
        <div className="book-shelf-changer">
          <select
            defaultValue={bookshelf}
            onChange={(e) => updatebooks(bookinfo, e.target.value)}
          >
            <option value="" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{bookinfo.title}</div>
      <div className="book-authors">{bookinfo.authors}</div>
    </div>
  );
};

export default Book;
