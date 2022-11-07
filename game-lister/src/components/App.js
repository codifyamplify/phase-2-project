import '../App.css';
import React from "react"
import Header from "./Header"
import GamesList from "./GamesList"
// import AddNewGame from "./AddNewGame"

function App() {
  // console.log("inside app")

  return (
    <div className="App">
      <Header />
      {/* <AddNewGame /> */}
      <GamesList />
    </div>
  );
}

export default App;
