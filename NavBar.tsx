// src/components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';  // Use Link to navigate between pages
import './NavBar.css';  // Import the CSS file for styling

const NavBar = () => {
  return (
    <div className="navbar">
      {/* Left section: Website name/logo */}
      <div className="navbar-left">
        <h1 className="web-name">Studify</h1>
      </div>

      {/* Right section: Navigation links */}
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </div>
    </div>
  );
};

export default NavBar;