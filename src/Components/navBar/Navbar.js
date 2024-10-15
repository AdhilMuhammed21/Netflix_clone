import React, { useState } from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src='movie.png' alt="Netflix Logo" />
      <div className="searchbar">
        <input type='text'
        />
        <button>Show All</button>
      </div>
    </div>
  )
}

export default Navbar
