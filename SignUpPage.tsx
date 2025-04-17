// src/screens/SignUpScreen.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpPage.css';  // Importing the CSS file for styling

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Regular Expression to validate email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Function to validate password (Minimum 8 characters, at least 1 uppercase letter, 1 special character)
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email Validation
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    // Password Validation
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.');
      return;
    }
    
    // Confirm Password Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    // Check if fields are empty
    if (name === '' || email === '' || password === '') {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    console.log('User Signed Up:', { name, email, password });
    navigate('/profile');  // Navigate to Profile screen
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="signup-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;