import React, {useState} from "react"

// STATE NOTES:
// -- will need to create a state for new game NAME
// -- will need to create a state for new game IMAGE URL

function AddNewGame(){
    // console.log("inside AddNewGame")

    const [newGameName, setNewGameName] = useState("")
    const [newGameImageURL, setNewGameImageURL] = useState("")

    // console.log(newGameName)
    // console.log(newGameImageURL)

    return (
    <div className="dirtyDiv">
        <h2 className="h2">Add New Game</h2>
        <h3>Here you can add a game that you would like to play someday, and never forget it until you mark it off as "completed!" Just provide the name of the game in the "text field", and an image URL in the "image URL field." (We recommend grabbing an image URL from igdb.com - the internet game database!)</h3>
        {/* will need two inputs: one for game name and one for image URL */}
        {/* add event listeners onChange for text fields to capture text and save it to state */}
        {/* will need a submit button, and a submit handler attached to the form */}
        <form className="newGameForm">
            <label>
                Name:
                    <input 
                        type="text"
                        name="name"
                        value={newGameName}
                        onChange={(event) => setNewGameName(event.target.value)}
                    ></input>
            </label>
            <br></br>
            <br></br>
            <label>
                Image URL
                    <input 
                        type="text"
                        name="imageURL"
                        value={newGameImageURL}
                        onChange={(event) => setNewGameImageURL(event.target.value)}
                    ></input>
            </label>
            <br></br>
            <br></br>
            <button>Add This New Game To Your List</button>
        </form>
    </div>
    )
}

export default AddNewGame