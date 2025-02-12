import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectTimeline from './pages/ProjectTimeline';
import Registration from './pages/Registration';
import Login from './pages/Login';
import PaymentGateway from './components/PaymentGateway';
import DashBoard from './pages/DashBoard';
import FuturePlanning from './pages/FuturePlanning';

const ProtectedRoute = ({ element }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/dashboard", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (error) {
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (auth === null) return <p>Loading...</p>;  // Show loading state
  return auth ? element : <Navigate to="/login" />;
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
          <Route path="/products" element={<FuturePlanning/>} />
          <Route path="/contact" element={<div>Contact Page</div>} />

          {/* Protected Dashboard Route */}
          <Route path="/dashboard" element={<ProtectedRoute element={<DashBoard />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
