import React from "react"

// needs to receive games state info, more specifically an individual game's info

function GameCard({game, onCompletedClick}){
    // console.log("inside GameCard")
    // console.log("props in GameCard", games)
    // console.log("inside GameCard: " + game)
    return (
        <li className="li">
            {/* <h3>this will be a game card</h3> */}
            {/* game name */}
            <h4>{game.name}</h4>
            {/* game image */}
            <img src={game.imageURL}></img>
            {/* commpleted status, this will be a checkbock */}
            <span></span>
            <label>
                Completed!
                <input 
                type="checkbox"
                onClick={onCompletedClick}
                />
            </label>
        </li>
    )
}

export default GameCard