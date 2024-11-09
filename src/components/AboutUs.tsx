import React from 'react';
import styles from '../styles/AboutUs.module.css'; // Your existing CSS module
import visionImage from '../assets/images/vision.png'; // Replace with actual image paths
import approachImage from '../assets/images/skills.png'; // Replace with actual image paths
import processImage from '../assets/images/onboarding.png'; // Replace with actual image paths
import LeardershipImage from '../assets/images/leadership.png';
import GoBack from './Goback';

const AboutUs: React.FC = () => {
  return (
    <div className={`${styles.container} px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16`}>
      <GoBack />
      <h1 className={`${styles.title} text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}>About Us</h1>
      <p className={`${styles.welcome} text-base sm:text-lg md:text-xl font-light my-4`}>We Treat You With Care</p>

      {/* Vision Section */}
      <div className={`${styles.flexContainer} flex flex-col sm:flex-row items-center gap-4 sm:gap-8 my-6`}>
        <div className={`${styles.textSection} flex-1 text-center sm:text-left`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Our Vision</h2>
          <p className={`${styles.text} text-base sm:text-lg md:text-xl my-4`}>
            At Mental Health Chatbot, our vision is to create a world where mental health support is accessible
            to everyone, anywhere, at any time. We believe in breaking the stigma surrounding mental health
            and providing a safe space for individuals to seek help and guidance. Our aim is to empower
            individuals with tools and resources to manage their mental well-being effectively.
          </p>
          <p className={`${styles.text} text-base sm:text-lg md:text-xl`}>
            We envision a future where mental health care is as common and normalized as physical health care,
            making it easier for individuals to prioritize their mental health without fear or hesitation.
          </p>
        </div>
        <div className={`${styles.imageSection} flex-1 sm:w-[50%] md:w-[40%] lg:w-[35%]`}>
          <img
            src={visionImage}
            alt="Our Vision"
            className={`${styles.image} w-full h-auto sm:h-[140px] md:h-[160px] lg:h-[180px] object-contain`}
          />
        </div>
      </div>

      {/* Approach Section */}
      <div className={`${styles.flexContainer} flex flex-col sm:flex-row items-center gap-4 sm:gap-8 my-6`}>
        <div className={`${styles.imageSection} flex-1 sm:w-[50%] md:w-[40%] lg:w-[35%]`}>
          <img
            src={approachImage}
            alt="Our Approach"
            className={`${styles.image} w-full h-auto sm:h-[140px] md:h-[160px] lg:h-[180px] object-contain`}
          />
        </div>
        <div className={`${styles.textSection} flex-1 text-center sm:text-left`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Our Approach</h2>
          <p className={`${styles.text} text-base sm:text-lg md:text-xl my-4`}>
            We adopt a compassionate and personalized approach to mental health care. Our chatbot is designed
            to provide empathetic responses and reliable information tailored to each individual's needs.
            We strive to ensure that every interaction is meaningful, providing a comforting presence for
            those seeking support.
          </p>
          <p className={`${styles.text} text-base sm:text-lg md:text-xl`}>
            Our team of mental health professionals continuously collaborates to enhance the chatbot's
            responses and ensure the information provided is accurate and helpful. We understand that
            every journey is unique, and we aim to meet individuals where they are, guiding them toward
            the resources and support they need.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <div className={`${styles.flexContainer} flex flex-col sm:flex-row items-center gap-4 sm:gap-8 my-6`}>
        <div className={`${styles.textSection} flex-1 text-center sm:text-left`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Our Process</h2>
          <p className={`${styles.text} text-base sm:text-lg md:text-xl my-4`}>
            Our process involves continuous learning and adaptation. By leveraging advanced AI technologies
            and incorporating user feedback, we refine our chatbot’s capabilities to better serve our users.
            We prioritize user privacy and confidentiality, ensuring a secure and trustworthy environment
            for mental health conversations.
          </p>
          <p className={`${styles.text} text-base sm:text-lg md:text-xl`}>
            Each user interaction is carefully analyzed to improve our responses and broaden our resources.
            We strive to provide timely and relevant information while ensuring our chatbot remains a
            friendly companion for those navigating their mental health journeys.
          </p>
        </div>
        <div className={`${styles.imageSection} flex-1 sm:w-[50%] md:w-[40%] lg:w-[35%]`}>
          <img
            src={processImage}
            alt="Our Process"
            className={`${styles.image} w-full h-auto sm:h-[140px] md:h-[160px] lg:h-[180px] object-contain`}
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className={`${styles.flexContainer} flex flex-col sm:flex-row items-center gap-4 sm:gap-8 my-6`}>
        <div className={`${styles.imageSection} flex-1 sm:w-[50%] md:w-[40%] lg:w-[35%]`}>
          <img
            src={LeardershipImage}
            alt="Our Mission"
            className={`${styles.image} w-full h-auto sm:h-[140px] md:h-[160px] lg:h-[180px] object-contain`}
          />
        </div>
        <div className={`${styles.textSection} flex-1 text-center sm:text-left`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Our Mission</h2>
          <p className={`${styles.text} text-base sm:text-lg md:text-xl my-4`}>
            Our mission is to provide accessible, immediate mental health support through innovative technology.
            We aim to reduce barriers to mental health care by offering 24/7 assistance to individuals seeking
            guidance, reassurance, or simply someone to talk to. Our chatbot is here to listen and provide
            support whenever you need it.
          </p>
          <p className={`${styles.text} text-base sm:text-lg md:text-xl`}>
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
