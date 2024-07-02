import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sign-in.module.css';

const Login = () => {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.text}>Login</div>
            <div className={styles.underline}></div>
        </div>
        <div className={styles.inputs}>
          <div className={styles.input}>
              <input type="email" name="email" placeholder='Email' />
          </div>
          <div className={styles.input}>
              <input type="password" name="password" placeholder='Password' />
          </div>
          <div className={styles.input}>
              <input type="submit" value='Submit' />
          </div>
        </div>
        <div className={styles.forgotPassword}>Lost Password? <span>Click Here!</span></div>
        <div className={styles.switch}>
            Don't have an account? <Link to="/signup">Sign up here</Link>
        </div>
      </div>
    );
};

export default Login;
