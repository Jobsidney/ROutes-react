import React from 'react'
import {Link,NavLink} from 'react-router-dom'


function NavBar() {
  return (
    <nav className="navbar">
        <div className="container"><h1>LOGO</h1></div>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar