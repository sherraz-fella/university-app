// src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, unstable_HistoryRouter, Routes } from 'react-router-dom';
import HomeScreen from './screens/LandingScreen';
import ProfileScreen from './screens/ProfileScreen';
import UniversityListScreen from './screens/UniversityListScreen';
import ApplicationStatusScreen from './screens/ApplicationStatusScreen';
import SignUpPage from './pages/SignUpPage';  // Corrected import path for SignUpPage

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/universities" element={<UniversityListScreen />} />
        <Route path="/application-status" element={<ApplicationStatusScreen />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Corrected route to SignUpPage */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;