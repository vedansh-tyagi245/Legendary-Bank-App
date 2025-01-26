import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageNavbar from './components/HomePageNavbar';

function App() {
  return (
    <Router>
      <div className="h-screen" style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}>
        <Routes>
          {/* Route for the homepage */}
          <Route
            path="/"
            element={
              <>
                <HomePageNavbar />
                {/* You can add more content here for the homepage */}
              </>
            }
          />

          {/* Other routes, without the navbar */}
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
