import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div id="navbar">
        <nav id="nav-bar-container">
          <ul id="nav-links">
            <li className="nav-link">< NavLink to="/">Pocket Parent</ NavLink ></li>
         
            <li className="nav-link">< NavLink to="/kids/new">Make A New Kid</ NavLink ></li>
            
            <li className="nav-link">< NavLink to="/kids">All Of Your Children</ NavLink ></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar