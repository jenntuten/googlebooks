import React from "react";
//import "./style.css";

function BookCard(props) {
  return (
    <div className="list-group search-results">
      <img src={props.image} alt="" width="150px"/>
      <div className="desc">
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.link}</p>
    </div>
    </div>
  );
}
export default BookCard;

