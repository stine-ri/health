import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/SignUp.module.css';
import GoBack from './Goback';
const SignUp: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle registration logic here, such as sending data to the backend

    // Redirect to login page after successful registration
    // For example, using React Router's useNavigate:
    // navigate('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
      <GoBack/>
        <h2>Create Account</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <input type="text" placeholder="Username" className={styles.input} required />
          </div>
          <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <input type="email" placeholder="Email" className={styles.input} required />
          </div>
          <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faLock} className={styles.icon} />
            <input type="password" placeholder="Password" className={styles.input} required />
          </div>
          <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <input type="text" placeholder="Emergency Contact" className={styles.input} required />
          </div>
          <button type="submit" className={styles.button}>Register</button>
        </form>
        <div className={styles.link}>
          Already have an account? <a href="/login">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
