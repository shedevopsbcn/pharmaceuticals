// src/About.js

import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing the best service for our customers.
        Our team is passionate about what we do, and we strive to exceed your expectations.
      </p>
      <p>
        Our mission is to create value for our users through innovation and dedication.
        We believe in the power of community and the importance of customer feedback.
      </p>
    </div>
  );
};

export default About;

