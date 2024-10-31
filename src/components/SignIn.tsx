import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import styles from '../styles/SignIn.module.css';
import GoBack from './GoBack';
const SignIn: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    const email = event.currentTarget.email.value; // Get email from input
    const password = event.currentTarget.password.value; // Get password from input

    // Handle your login logic here
    console.log('Email:', email, 'Password:', password);
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/signin'; // Redirect to Google login
  };

  const handleMicrosoftLogin = () => {
    window.location.href = 'https://login.microsoftonline.com/'; // Redirect to Microsoft login
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
      <GoBack/>
        <h2>Welcome Back to Wellness</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <input type="email" name="email" placeholder="Email" className={styles.input} required />
          </div>
          <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faLock} className={styles.icon} />
            <input type="password" name="password" placeholder="Password" className={styles.input} required />
          </div>
          <button type="submit" className={styles.button}>Login</button>
          <div className={styles.link}>
            <b>Don't have an account? </b><a href="/signup"><b>Sign Up</b></a>
          </div>
        </form>
        <div className={styles.socialButtons}>
          <button className={`${styles.socialButton} ${styles.googleButton}`} onClick={handleGoogleLogin}>
            <b><FontAwesomeIcon icon={faGoogle} className={styles.socialIcon} /> Continue with Google</b>
          </button>
          <button className={`${styles.socialButton} ${styles.microsoftButton}`} onClick={handleMicrosoftLogin}>
            <b><FontAwesomeIcon icon={faMicrosoft} className={styles.socialIcon} /> Continue with Microsoft</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
