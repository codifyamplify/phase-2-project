import React, {useState, useEffect} from "react"
import GameCard from "./GameCard"
import AddNewGame from "./AddNewGame"

function GamesList({games, setGames}){
    // create a games state to store the db.json info in state. then can use to render to the DOM
    // set up fetch GET request to get existing lists from db.json
    useEffect(() => {
        fetch("http://localhost:3000/games")
            .then((response) => response.json())
            .then((games) => setGames(games))
    }, [])



    // console.log("inside gameslist")
    // console.log(games)

    // write a completed click handler
    // function handleCompletedClick(completedGame){
    //     console.log("completed click was heard in GameList")
    //     const updatedGamesList = games.map((game) => {
    //         if (game.completed === completedGame.completed) {
    //             return completedGame
    //         } else {
    //             return game
    //         }
    //     })
    //     setGames(updatedGamesList)
    // }


    return (
        <div className="gameList">
            <h2 className="h1">Game List</h2>
            <h3 className="">Here is your handmade list of all the games you are excited to get to someday. Never forget that hidden gem you heard about from an old friend!</h3>
            {/* create an unordered list for your games to render in */}
            <ul className="games">
                {games.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        // onAddGame={handleAddGame}
                        // onCompletedClick={handleCompletedClick}
                        // onCheckedChange={handleCheckedChange}
                    />                    
                ))}
                
            </ul>
        </div>
    )
}

export default GamesList