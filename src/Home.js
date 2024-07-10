import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log('Search query:', searchQuery);
    };

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <ul className={styles.navLinks}>
                    <li><Link to="/" className={styles.navLink}>Home</Link></li>
                    <li><Link to="/about" className={styles.navLink}>About Us</Link></li>
                    <li><Link to="/login" className={styles.navLink}>Login</Link></li>
                    <li><Link to="/signup" className={styles.navLink}>Sign Up</Link></li>
                </ul>
                <div className={styles.profile}>
                    <FontAwesomeIcon icon={faUserCircle} className={styles.profileIcon} />
                    <div className={styles.greeting}>Hi User!</div>
                </div>
            </nav>
            <div className={styles.hero}>
                <img src="/2med.webp" alt="Medicine Hero" className={styles.heroImage} />
                <div className={styles.heroText}>Welcome!</div>
            </div>
            <h1 className={styles.title}>Please search for your medicine below</h1>
            <form className={styles.searchForm} onSubmit={handleSearch}>
                <input 
                    type="text" 
                    className={styles.searchInput} 
                    value={searchQuery} 
                    onChange={handleInputChange} 
                    placeholder="Search..."
                />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>
        </div>
    );
};

export default Home;






