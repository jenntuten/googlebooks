import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import BookList from "./pages/BookList";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
//<Route component{NoMatch}/>
function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path="/" component={Books}/>
      <Route exact path="/books" component={Books}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/booklist" component={BookList}/>
      <Route exact path="/books/:id" component={Detail}/>
      <Route component={NoMatch}/>
      </Switch>
      <Books />
    </div>
    </Router>
  );
}

export default App;
