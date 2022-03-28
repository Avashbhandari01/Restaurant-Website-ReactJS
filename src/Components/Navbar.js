import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {

  let activeClassName = "underline"

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/"><p>Yums.</p></Link>
      </div>
      <div className="rightSide">
        <NavLink to="/menu" className={({ isActive }) =>
          isActive ? activeClassName : undefined
        }>Menu</NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? activeClassName : undefined
        }>Contact</NavLink>
        <NavLink to="/book" className={({ isActive }) =>
          isActive ? activeClassName : undefined
        }>Book a table</NavLink>
      </div>

    </div>
  )
}

export default Navbar;