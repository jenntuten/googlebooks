import React from "react";
import "./style.css";
import BookCard from "../../pages/BookCard";

function SearchResults(props) {
  return (
    <div className="search-results">
      {props.results.map((book, i) => {
        return <BookCard 
        image={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        link={book.volumeInfo.infoLink} />;
      })}
    </div>
  );
}
export default SearchResults;
/*return <BookCard />*/
