import React, {useState} from "react"


function GameCard({game, onCompletedClick, onCheckedChange}){


    return (
        <div className="gameCard">
            <h4>{game.name}</h4>
            <img src={game.imageURL}></img>
            <br></br>
            <br></br>
            <label>
                Completed!
                <input 
                type="checkbox"
                />
            </label>
        </div>
    )
}

export default GameCard