import '../App.css';
import React from "react"
import Header from "./Header"
import GamesList from "./GamesList"

function App() {
  // console.log("inside app")

  return (
    <div className="App">
      <Header />
      <GamesList />
    </div>
  );
}

export default App;
