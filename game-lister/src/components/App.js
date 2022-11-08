import '../App.css';
import React from "react"
import Header from "./Header"
import GamesList from "./GamesList"
// import AddNewGame from "./AddNewGame"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import Block from './Block';
import PageNotFound from './PageNotFound';
import NavBar from './NavBar';

function App() {
  // console.log("inside app")

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/header">
          {/* This should display only Header */}
          <Header />
        </Route>
        {/* <Route exact path="/block">
          <Block />
        </Route> */}
        <Route exact path="/games">
          {/* this should display AddNewGame and GamesList */}
          <GamesList />
        </Route>  
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
