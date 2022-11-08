import React, {useState} from "react"


function AddNewGame({onAddGame}){
    const [newGameName, setNewGameName] = useState("")
    const [newGameImageURL, setNewGameImageURL] = useState("")


    function handleSubmit(event){
        event.preventDefault()
        const newGameData =  {
            name: newGameName,
            imageURL: newGameImageURL
        };
        fetch("http://localhost:3000/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGameData),
        })
            .then((response) => response.json())
            .then((newGame) => onAddGame(newGame))

        console.log("any old nonsense")
        setNewGameName("")
        setNewGameImageURL("")

    }

    return (
    <div className="newGameComponent">
        <h2 className="h2">Add New Game</h2>
        <h3>Here you can add a game that you would like to play someday, and never forget it until you mark it off as "completed!" Just provide the name of the game in the "text field", and an image URL in the "image URL field." (We recommend grabbing an image URL from igdb.com - the internet game database!)</h3>
        <form 
            className="newGameForm"
            onSubmit={handleSubmit}
        >
            <label>
                Name:
                <br></br>
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
                Image URL:
                <br></br>
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