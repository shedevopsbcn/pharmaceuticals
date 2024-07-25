// src/Header.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleFocus = () => {
    setDropdownVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => setDropdownVisible(false), 200); // Delay to allow click event
  };

  return (
    <header className="header">
      <div className="top-nav">
        <h1 className="header-title">My App</h1>
        <nav className="header-buttons">
          <button onClick={() => handleNavigation('/')} className="header-button">Home</button>
          <button onClick={() => handleNavigation('/about')} className="header-button">About</button>
          <button onClick={() => handleNavigation('/sign-in')} className="header-button">Sign In</button>
        </nav>
      </div>
      <div className="search-bar-container">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search..." 
          onFocus={handleFocus} 
          onBlur={handleBlur} 
        />
        {dropdownVisible && (
          <div className="dropdown-bar">
            <ul className="dropdown-menu">
              <li onClick={() => handleNavigation('/about/mission')} className="dropdown-item">Head</li> 
              <li onClick={() => handleNavigation('/about/team')} className="dropdown-item">Chest</li>
              <li onClick={() => handleNavigation('/about/contact')} className="dropdown-item">Arm</li>
              <li onClick={() => handleNavigation('/careers')} className="dropdown-item">Hand</li>
              <li onClick={() => handleNavigation('/services')} className="dropdown-item">Stomach</li>
              <li onClick={() => handleNavigation('/products')} className="dropdown-item">Leg</li>
              <li onClick={() => handleNavigation('/blog')} className="dropdown-item">Foot</li>
              <li onClick={() => handleNavigation('/careers')} className="dropdown-item">Respritory</li>
              <li onClick={() => handleNavigation('/support')} className="dropdown-item">Circulatory</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
