// src/screens/HomeScreen.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css'; // Import the CSS file

const HomeScreen = () => {
  return (
    <div className="container">
      <h1 className="header">Welcome to University App</h1>
      <Link to="/signup">
        <button className="button">Sign Up</button>
      </Link>
      <Link to="/profile">
        <button className="button">Create Profile</button>
      </Link>
      <Link to="/universities">
        <button className="button">View Universities</button>
      </Link>
      <Link to="/application-status">
        <button className="button">Check Application Status</button>
      </Link>
    </div>
  );
};

export default HomeScreen;
