import React, {useState, useEffect} from "react"
import GameCard from "./GameCard"

function GamesList(){
    // create a games state to store the db.json info in state. then can use to render to the DOM
    const [games, setGames] = useState([])
    // set up fetch GET request to get existing lists from db.json
    useEffect(() => {
        fetch("http://localhost:3000/games")
            .then((response) => response.json())
            .then((games) => setGames(games))
    }, [])
    console.log("inside gameslist")
    console.log(games)

    const loggedGames = {games}

    return (
        <div>
            <h3>blob</h3>
            <GameCard games={games}/>
        </div>
    )
}

export default GamesList