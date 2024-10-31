import React from 'react';
import styles from '../styles/AboutUs.module.css'; // Create this CSS module for styling
import visionImage from '../assets/images/vision.png'; // Replace with actual image paths
import approachImage from '../assets/images/skills.png'; // Replace with actual image paths
import processImage from '../assets/images/onboarding.png'; // Replace with actual image paths
import LeardershipImage from '../assets/images/leadership.png'
import GoBack from './Goback';
const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <GoBack/>
      <h1>About Us</h1>
      <p className={styles.welcome}>We Treat You With Care</p>

      <div className={styles.flexContainer}>
        <div className={styles.textSection}>
          <h2>Our Vision</h2>
          <p>
            At Mental Health Chatbot, our vision is to create a world where mental health support is accessible
            to everyone, anywhere, at any time. We believe in breaking the stigma surrounding mental health
            and providing a safe space for individuals to seek help and guidance. Our aim is to empower
            individuals with tools and resources to manage their mental well-being effectively.
          </p>
          <p>
            We envision a future where mental health care is as common and normalized as physical health care,
            making it easier for individuals to prioritize their mental health without fear or hesitation.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={visionImage} alt="Our Vision" className={styles.image} />
        </div>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.imageSection}>
          <img src={approachImage} alt="Our Approach" className={styles.image} />
        </div>
        <div className={styles.textSection}>
          <h2>Our Approach</h2>
          <p>
            We adopt a compassionate and personalized approach to mental health care. Our chatbot is designed
            to provide empathetic responses and reliable information tailored to each individual's needs.
            We strive to ensure that every interaction is meaningful, providing a comforting presence for
            those seeking support.
          </p>
          <p>
            Our team of mental health professionals continuously collaborates to enhance the chatbot's
            responses and ensure the information provided is accurate and helpful. We understand that
            every journey is unique, and we aim to meet individuals where they are, guiding them toward
            the resources and support they need.
          </p>
        </div>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.textSection}>
          <h2>Our Process</h2>
          <p>
            Our process involves continuous learning and adaptation. By leveraging advanced AI technologies
            and incorporating user feedback, we refine our chatbot’s capabilities to better serve our users.
            We prioritize user privacy and confidentiality, ensuring a secure and trustworthy environment
            for mental health conversations.
          </p>
          <p>
            Each user interaction is carefully analyzed to improve our responses and broaden our resources.
            We strive to provide timely and relevant information while ensuring our chatbot remains a
            friendly companion for those navigating their mental health journeys.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={processImage} alt="Our Process" className={styles.image} />
        </div>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.imageSection}>
          <img src={LeardershipImage } alt="Our Mission" className={styles.image} />
        </div>
        <div className={styles.textSection}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide accessible, immediate mental health support through innovative technology.
            We aim to reduce barriers to mental health care by offering 24/7 assistance to individuals seeking
            guidance, reassurance, or simply someone to talk to. Our chatbot is here to listen and provide
            support whenever you need it.
          </p>
          <p>
            We are committed to fostering a community that prioritizes mental health, offering educational
            resources, and raising awareness about the importance of mental well-being. Together, we can
            make mental health a priority for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
