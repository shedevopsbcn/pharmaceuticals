// src/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>
        <Link to="/about">Learn more about us</Link>
      </p>
    </div>
  );
};

export default Home;

