// src/About.js

import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Our website is meant to help pharmacies track inventory and search for products!
      </p>
    </div>
  );
};

export default About;

