import React from 'react';
import styles from '../styles/ContactUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faWhatsapp, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';
import GoBack from './Goback';

const ContactUs: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    // Handle form submission logic here
  };

  return (
    <div className={`${styles.container} w-full min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-16`}>
      <div className={`${styles.contactContainer} w-full max-w-screen-lg mx-auto flex flex-col sm:flex-row gap-8 sm:gap-12`}>
        
        {/* Left Section */}
        <div className={`${styles.infoSection} flex-1`}>
          <GoBack />
          <h1 className="text-3xl sm:text-4xl font-semibold">Contact Us</h1>
          <div className={`${styles.contactInfo} mt-4 space-y-4 sm:space-y-6`}>
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
              <div className={`${styles.socialMedia} flex space-x-4 mt-2`}>
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

        {/* Right Section */}
        <div className={`${styles.formSection} mt-8 sm:mt-0 flex-1`}>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Get in Touch</h2>
          <form className={`${styles.form} space-y-4 sm:space-y-6`} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className={`${styles.input} w-full p-3 border rounded-md`} required />
            <input type="email" placeholder="Email" className={`${styles.input} w-full p-3 border rounded-md`} required />
            <input type="tel" placeholder="Contact Number" className={`${styles.input} w-full p-3 border rounded-md`} required />
            <textarea placeholder="Message" className={`${styles.textarea} w-full p-3 border rounded-md`} required></textarea>
            <button type="submit" className={`${styles.button} w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md`}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
