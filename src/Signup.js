import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sign-in.module.css';

const SignUp = () => {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.text}>Sign Up</div>
            <div className={styles.underline}></div>
        </div>
        <div className={styles.inputs}>
          <div className={styles.column}>
            <div className={styles.input}>
                <input type="text" name="first name" placeholder='First Name' />
            </div>
            <div className={styles.input}>
                <input type="text" name="last name" placeholder='Last Name' />
            </div>
            <div className={styles.input}>
                <input type="text" name="company name" placeholder='Company Name' />
            </div>
            <div className={styles.input}>
                <input type="text" name="telephone number" placeholder='Telephone Number' />
            </div>
          </div>
          <div className={styles.column}>
            
            <div className={styles.input}>
                <input type="text" name="NIF" placeholder='NIF' />
            </div>
            <div className={styles.input}>
                <input type="email" name="email" placeholder='Email' />
            </div>
            <div className={styles.input}>
                <input type="password" name="password" placeholder='Password' />
            </div>
            <div className={styles.input}>
                <input type="password" name="repeat password" placeholder='Repeat Password' />
            </div>
          </div>
          <div className={styles.fullWidth}>
            <div className={styles.input}>
                <input type="submit" value='Submit' />
            </div>
          </div>
        </div>
        <div className={styles.switch}>
            Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    );
};

export default SignUp;


