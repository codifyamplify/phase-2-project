import React from "react"
import { NavLink } from "react-router-dom"

function NavBar(){
    return (
        <nav className="navBar">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/new">New</NavLink></li>
                <li><NavLink to="/games">Games</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar