import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectTimeline from './pages/ProjectTimeline';
import Registration from './pages/Registration';

function App() {
  return (
    <Router>
      {/* <div> */}
      <div className="" style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}>
        <Routes>
          {/* Routes will render based on the current URL */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/timeline" element={<ProjectTimeline />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
