import '../App.css';
import React, {useState} from "react"
import Home from "./Home"
import GamesList from "./GamesList"
import AddNewGame from "./AddNewGame"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import Block from './Block';
import PageNotFound from './PageNotFound';
import NavBar from './NavBar';

function App() {
  // console.log("inside app")
  const [games, setGames] = useState([])

      // create a handle submit state update function to pass to AddNewGame
      function handleAddGame(newGame){
        // console.log(newGame.name)
        setGames([...games, newGame])
    }


  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/home">
          {/* This should display only Home */}
          <Home />
        </Route>
        <Route exact path="/new">
          <AddNewGame onAddGame={handleAddGame}/>
        </Route>
        <Route exact path="/games">
          {/* this should display AddNewGame and GamesList */}
          <GamesList games={games} setGames={setGames}/>
        </Route>  
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
