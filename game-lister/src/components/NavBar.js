import React from "react"
import { NavLink } from "react-router-dom"

function NavBar(){
    return (
        <nav>
            <ul>
                <li><NavLink to="/header">Header</NavLink></li>
                <li><NavLink to="/games">Games</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar