import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import styles from '../styles/BookDoctor.module.css';
import GoBack from './Goback';
const BookDoctor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ensure you have input data
    if (name && email && date) {
      // Show success toast after successful booking
      toast.success('Doctor booked successfully!');
    } else {
      toast.error('Please fill in all fields');
    }
  };

  return (
    
    <div className={styles.pageContainer}>
      <div className={styles.container}>
      <GoBack />
        <h1 className={styles.header}>Book Your Appointment</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} /> Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="date" className={styles.label}>
              <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} /> Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookDoctor;
