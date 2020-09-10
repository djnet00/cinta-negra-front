import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {

    return (
        <div className="navBar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign-up</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/tareas">Tareas</Link></li>
            </ul>
        </div>
    )
}
