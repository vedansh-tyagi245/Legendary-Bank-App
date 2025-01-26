import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePageNavbar from './components/HomePageNavbar';

function App() {
  return (
    <Router>
      <div className="h-screen" style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}>
        <HomePageNavbar />

        <nav>
          {/* Example of using Link component for navigation */}
          <ul>
            <li>
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Routes will render based on the current URL */}
          <Route path="/" element={<div>Home Page Content</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
