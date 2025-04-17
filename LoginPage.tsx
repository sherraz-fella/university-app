// src/screens/LoginScreen.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 🔹 Predefined Admin User
  const adminUser = {
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔸 Check if entered credentials match the admin user
    if (email === adminUser.email && password === adminUser.password) {
      localStorage.setItem("currentUser", JSON.stringify(adminUser)); // Store user in localStorage
      navigate("/profile"); // 🔹 Redirect to ProfileScreen
      return;
    }

    setError("Invalid email or password."); // Show error for wrong credentials
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
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
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;