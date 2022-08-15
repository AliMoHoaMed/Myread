import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

const Bookinformation = () => {
  const { id } = useParams();
  const [bookinfoo, SetBookinfoo] = useState([]);

  useEffect(() => {
    const getmybook = async () => {
      const mybooks = await BooksAPI.get(id);
      SetBookinfoo(mybooks);
    };
    getmybook();
  }, [id]);

  return (
    <div className="cc">
      <div className="card">
        <img
          src={bookinfoo.imageLinks ? bookinfoo.imageLinks.thumbnail : "none"}
          alt="Avatar"
          style={{ width: "70%" }}
        />
        <div className="container">
          <h4>
            {" "}
            Authors : <b>{bookinfoo.authors}</b>
          </h4>
          <p>Title : {bookinfoo.title}</p>
          <p>rating : {bookinfoo.averageRating} ★</p>
        </div>
      </div>
    </div>
  );
};

export default Bookinformation;
