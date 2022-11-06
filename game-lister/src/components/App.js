import '../App.css';
import React from "react"
import Header from "./Header"
import GamesList from "./GamesList"

function App() {
  console.log("inside app")

  return (
    <div className="App">
      <Header />
      <GamesList />
      <header className="App-header">
        <p className="paragraph">
          Something is present for display purposes.
        </p>
      </header>
    </div>
  );
}

export default App;
