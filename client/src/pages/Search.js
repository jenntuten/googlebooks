import React, { Component } from "react";
import superagent from 'superagent'
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import BookCard from "./BookCard";

class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
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
         // console.log(books)
        })
  };

  render() {
    return (
        <div class="search">
        <form>
        <Input
          value={this.state.title}
          onChange={this.handleInputChange}
          name="title"
          placeholder="Title"
        />
        <FormBtn
          disabled={!(this.state.title)}
          onClick={this.handleFormSubmit}
        >
          Search
        </FormBtn>
      </form>

      <SearchResults results={this.state.books} />
    </div>
    );
    
  }
}

export default Search;
