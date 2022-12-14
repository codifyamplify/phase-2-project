import React, {useState} from "react"
import GameCard from "./GameCard"

function GamesList({games, setGames}){

    return (
        <div className="gameList">
            <h2 className="h1">Game List</h2>
            <h3 className="">Here is your handmade list of all the games you are excited to get to someday. Never forget that hidden gem you heard about from an old friend!</h3>
            <ul className="games">
                {games.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                    />                    
                ))}
                
            </ul>
        </div>
    )
}

export default GamesList