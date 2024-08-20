// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      
        <div><Link to="/form">Form</Link></div>
        <div><Link to="/matches">Matches</Link></div>
        <div><Link to="/players">Players</Link></div>
      
    </nav>
  );
};

export default Navbar;
