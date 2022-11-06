import React from "react"

// needs to receive games state info, more specifically an individual game's info

function GameCard({game, onCompletedClick}){
    // console.log("inside GameCard")
    // console.log("props in GameCard", games)
    // console.log("inside GameCard: " + game)

    function handleCompletedClick(){
        console.log("completed click was heard inside gamecard")
        fetch(`http://localhost:3000/games/${game.id}`), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                completed: !game.completed
            }),
        }
            .then((response) => response.json())
            .then((updatedGame) => onCompletedClick(updatedGame))
    }


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