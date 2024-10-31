import React, { useState } from 'react'; // Import React and useState
import styles from '../styles/TrainWithUs.module.css'; // Import CSS module
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import testimonialImage1 from '../assets/images/bo ah.webp'; // Import testimonial images
import testimonialImage2 from '../assets/images/won.jpg';
import testimonialImage3 from '../assets/images/moon.jpg';
import testimonialImage4 from '../assets/images/wook.jpg';
import testimonialImage5 from '../assets/images/sang.jpg';
import testimonialImage6 from '../assets/images/soo.jpg';
import GoBack from './GoBack';
// Sample testimonials data
const testimonialsData = [
  { id: 1, name: "Alice Johnson", feedback: "The training program helped me develop coping strategies that changed my life.", image: testimonialImage1 },
  { id: 2, name: "Michael Brown", feedback: "I learned so much about managing stress. This has been a game changer!", image: testimonialImage2 },
  { id: 3, name: "Sarah Williams", feedback: "The skills I gained from the training have made a huge difference in my daily life.", image: testimonialImage3 },
  { id: 4, name: "John Smith", feedback: "This training empowered me to take control of my mental health.", image: testimonialImage4 },
  { id: 5, name: "Emily Davis", feedback: "The insights I received during the program were invaluable.", image: testimonialImage5 },
  { id: 6, name: "Robert Wilson", feedback: "I feel much more equipped to handle my challenges after this training.", image: testimonialImage6 },
];

const TrainWithUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your submission has been received. We will get back to you."); // Show toast notification
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <GoBack/>
      <h1 className={styles.header}>Train with Us</h1>
      
      <div className={styles.testimonialsGrid}>
        {testimonialsData.map((item) => (
          <div key={item.id} className={styles.testimonialCard}>
            <p className={styles.testimonialText}>“{item.feedback}”</p>
            <div className={styles.clientInfo}>
              <div className={styles.avatar} style={{ backgroundImage: `url(${item.image})` }}></div>
              <p className={styles.clientName}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      <form className={styles.enrollmentForm} onSubmit={handleSubmit}>
        <h2 className={styles.formHeader}>Enroll Now</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.textareaField}
          required
        />
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>

      <ToastContainer /> {/* Add the ToastContainer here to render the toasts */}
    </div>
  );
};

export default TrainWithUs;
