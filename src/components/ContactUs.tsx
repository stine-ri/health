import React from 'react';
import styles from '../styles/ContactUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faWhatsapp, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';
import GoBack from './GoBack';
const ContactUs: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    // Handle form submission logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <div className={styles.infoSection}>
        <GoBack/>
          <h1>Contact Us</h1>
          <div className={styles.contactInfo}>
            <div className={styles.location}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <p><strong>Location:</strong> 123 Wellness Street, Healthy City</p>
            </div>
            <div className={styles.email}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <p><strong>Email:</strong> contact@wellness.com</p>
            </div>
            <div className={styles.phone}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <p><strong>Phone:</strong> (123) 456-7890</p>
            </div>
          </div>
          <div className={styles.followUs}>
            <div className={styles.socialHandles}>
              <p>Follow Us:</p>
              <div className={styles.socialMedia}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className={styles.socialIcon} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faPinterest} className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formSection}>
          <h2>Get in Touch</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className={styles.input} required />
            <input type="email" placeholder="Email" className={styles.input} required />
            <input type="tel" placeholder="Contact Number" className={styles.input} required />
            <textarea placeholder="Message" className={styles.textarea} required></textarea>
            <button type="submit" className={styles.button}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
