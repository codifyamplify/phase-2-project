import React, {useState} from "react"

// needs to receive games state info, more specifically an individual game's info

function GameCard({game, onCompletedClick, onCheckedChange}){
    // console.log("inside GameCard")
    // console.log("props in GameCard", games)
    // console.log("inside GameCard: " + game)
// ABANDONING PATCH ATTEMPT. NOT REQUIRED FOR PROJECT
    // function handleCompletedClick(){
    //     console.log("completed click was heard inside gamecard")
    //     fetch(`http://localhost:3000/games/${game.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             completed: !game.completed
    //         }),
    //     })
    //         .then((response) => response.json())
    //         .then((updatedGame) => onCompletedClick(updatedGame))
    // }


    return (
        <div className="gameCard">
            {/* <h3>this will be a game card</h3> */}
            {/* game name */}
            <h4>{game.name}</h4>
            {/* game image */}
            <img src={game.imageURL}></img>
            {/* commpleted status, this will be a checkbock */}
            <br></br>
            <br></br>
            <label>
                Completed!
                <input 
                type="checkbox"
                // onCheck={handleCompletedClick}
                />
            </label>
        </div>
    )
}

export default GameCard