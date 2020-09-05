import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="navBar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign-up</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
