import '../App.css';
import React, {useState, useEffect} from "react"
import Home from "./Home"
import GamesList from "./GamesList"
import AddNewGame from "./AddNewGame"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PageNotFound from './PageNotFound';
import NavBar from './NavBar';

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/games")
        .then((response) => response.json())
        .then((games) => setGames(games))
  }, [])


      function handleAddGame(newGame){
        setGames([...games, newGame])
    }


  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/new">
          <AddNewGame onAddGame={handleAddGame}/>
        </Route>
        <Route exact path="/games">
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
