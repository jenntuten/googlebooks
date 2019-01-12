import React, { Component } from "react";
import superagent from 'superagent'
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class BookList extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
        return superagent
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({q: this.state.title})
        .then((data)=>{
            this.setState({books:[...data.body.items]})
          console.log(data);
        })
  };

  render() {
    return (
        <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
    );
  }
}

export default BookList;
