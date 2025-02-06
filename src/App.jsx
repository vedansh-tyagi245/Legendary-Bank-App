import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectTimeline from './pages/ProjectTimeline';
import Registration from './pages/Registration';
import Login from './pages/Login';
import PaymentGateway from './components/PaymentGateway';
import DashBoard from './pages/DashBoard';

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const userPhone = localStorage.getItem("userPhone");

  return userPhone ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<PaymentGateway />} />
          <Route path="/timeline" element={<ProjectTimeline />} />
          <Route path="/contact" element={<div>Contact Page</div>} />

          {/* Protected Dashboard Route */}
          <Route path="/dashboard" element={<ProtectedRoute element={<DashBoard />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
