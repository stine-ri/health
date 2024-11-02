import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboard, faSearch, faComments, faStethoscope, faRobot, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import servicesImage from '../assets/images/services.png';
import logo from '../assets/images/yellow.jpg';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <Link to="/profile" className={styles.navItem}>
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </Link>
        <Link to="/diagnostics" className={styles.navItem}>
          <FontAwesomeIcon icon={faClipboard} />
          <span>Diagnostics</span>
        </Link>
        <Link to="/case-studies" className={styles.navItem}>
          <FontAwesomeIcon icon={faSearch} />
          <span>Case Studies</span>
        </Link>
        <Link to="/feedback" className={styles.navItem}>
          <FontAwesomeIcon icon={faComments} />
          <span>Clients Feedback</span>
        </Link>
        <Link to="/doctors" className={styles.navItem}>
          <FontAwesomeIcon icon={faStethoscope} />
          <span>Doctors</span>
        </Link>
        <Link to="/chatbot" className={styles.navItem}>
          <FontAwesomeIcon icon={faRobot} />
          <span>Chatbot AI</span>
        </Link>
        <Link to="/train" className={styles.navItem}>
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          <span>Train with us</span>
        </Link>
      </nav>

      <div className={styles.content}>
        <header className={styles.header}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <Link to="/about" className={styles.headerLink}>About us</Link>
          <Link to="/services" className={styles.headerLink}>Services</Link>
          <Link to="/contact" className={styles.headerLink}>Contact Us</Link>
          <Link to="/" className={`${styles.headerLink} ${styles.homeButton}`}>Home</Link>
        </header>

        <main className={styles.mainContent}>
          <img src={servicesImage} alt="Mental Health Services" className={styles.image} />
          <div className={styles.textContent}>
            <h1 className={styles.title}>MENTAL <br /><span className={styles.health}>HEALTH</span></h1>
            <p className={styles.subtitle}>
              Prioritize your well-being with resources and support to cultivate resilience and navigate life’s challenges — you’re not alone.
            </p>
            <div className={styles.buttons}>
              <Link to="/signin" className={styles.button}>SIGN IN</Link>
              <Link to="/signup" className={styles.button}>SIGN UP</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
