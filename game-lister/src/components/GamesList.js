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
    // console.log("inside gameslist")
    // console.log(games)

    const listedGames = games

    // write a completed click handler
    function handleCompletedClick(completedGame){
        console.log("completed click was heard")
        const updatedGamesList = games.map((game) => {
            if (game.completed === completedGame.completed) {
                return completedGame
            } else {
                return game
            }
        })
        setGames(updatedGamesList)
    }


    return (
        <div className="div">
            <h2 className="h1">Game List</h2>
            <h3 className="paragraph">Here is your handmade list of all the games you are excited to get to someday. Never forget that hidden gem you heard about from an old friend!</h3>
            {/* create an unordered list for your games to render in */}
            <ul className="games">
                {listedGames.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        onCompletedClick={handleCompletedClick}
                    />
                ))}
            </ul>
        </div>
    )
}

export default GamesList