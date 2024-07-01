// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home'; // Assume you have a Home component
import SignIn from './sign-in';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

