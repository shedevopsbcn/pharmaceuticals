// src/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';


const Header = () => {
  const navigate = useNavigate();


  const handleNavigation = (path) => {
    navigate(path);
  };


  return (
    <header className="header">
      <h1 className="header-title">My App</h1>
      <nav className="header-buttons">
        <button onClick={() => handleNavigation('/')} className="header-button">Home</button>
        <button onClick={() => handleNavigation('/about')} className="header-button">About</button>
        <button onClick={() => handleNavigation('/sign-in')} className="header-button">Sign In</button>
      </nav>
    </header>
  );
};


export default Header;