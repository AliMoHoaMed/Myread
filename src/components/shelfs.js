import React from "react";
import Book from "./book";
import PropTypes from "prop-types";
const Shelfs = ({ data, updatee }) => {
  Shelfs.prototype = {
    data: PropTypes.array.isRequired,
    updatee: PropTypes.func.isRequired,
  };

  return (
    <div>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {data.map((r) => (
            <Book updatebooks={updatee} key={r.id} bookinfo={r} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelfs;
