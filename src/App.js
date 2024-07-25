// src/App.js


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
//import PharmaHomePage from './PharmaHomePage'; // Assume you have a Home component
import SignIn from './sign-in';
import Header from './Header';
import Footer from './Footer';




const App = () => {
  return (
    <Router>
      <div>
      <Header /> {Header}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mission" element={<About section="mission" />} />
        <Route path="/about/team" element={<About section="team" />} />
        <Route path="/about/contact" element={<About section="contact" />} />
          <Route path="/sign-in" element={<SignIn />} />
         
        </Routes>
        <Footer /> {Footer}
      </div>
    </Router>
  );
};


export default App;


