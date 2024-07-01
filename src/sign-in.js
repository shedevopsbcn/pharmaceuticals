import React, { useState } from 'react';
import styles from './sign-in.module.css';

const SignIn = () => {
    const [action, setAction] = useState("Sign Up");

    const handleActionChange = (newAction) => {
        setAction(newAction);
    };

    return (
      <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.text}>{action}</div>
            <div className={styles.underline}></div>
        </div>
        <div className={styles.inputs}>
          {action === "Sign Up" && (
            <>
              <div className={styles.input}>
                  <input type="text" name="first name" placeholder='First Name'/>
              </div>
              <div className={styles.input}>
                  <input type="text" name="last name" placeholder='Last Name'/>
              </div>
              <div className={styles.input}>
                  <input type="text" name="company name" placeholder='Company Name'/>
              </div>
              <div className={styles.input}>
                  <input type="text" name="NIF" placeholder='NIF'/>
              </div>
              <div className={styles.input}>
                  <input type="text" name="telephone number" placeholder='Telephone Number'/>
              </div>
            </>
          )}
          <div className={styles.input}>
              <input type="email" name="email" placeholder='Email'/>
          </div>
          <div className={styles.input}>
              <input type="password" name="password" placeholder='Password'/>
          </div>
          {action === "Sign Up" && (
            <div className={styles.input}>
                <input type="password" name="repeat password" placeholder='Repeat Password'/>
            </div>
          )}
          <div className={styles.input}>
              <input type="submit" value='Submit'/>
          </div>
        </div>
        {action === "Login" && (
          <div className={styles.forgotPassword}>Lost Password? <span>Click Here!</span></div>
        )}
        <div className={styles.submitContainer}>
            <div 
                className={action === "Sign Up" ? styles.submit : styles.submitGray} 
                onClick={() => handleActionChange("Sign Up")}
            >
                Sign Up
            </div>
            <div 
                className={action === "Login" ? styles.submit : styles.submitGray} 
                onClick={() => handleActionChange("Login")}
            >
                Login
            </div>
        </div>
      </div>
    );
};

export default SignIn;
