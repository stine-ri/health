import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Doctors.module.css';
import doctor1Image from '../assets/images/Doctor 1.webp';
import doctor2Image from '../assets/images/Doctor 2.avif';
import doctor3Image from '../assets/images/Doctor 3.avif';
import doctor4Image from '../assets/images/Doctor 4.webp';
import doctor5Image from '../assets/images/Doctor 5.jpg';
import doctor6Image from '../assets/images/Doctor 6.jpg';
import GoBack from './Goback';

const Doctors = () => {
  const navigate = useNavigate();

  const handleBookDoctor = () => {
    navigate('/book');
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <GoBack />
        <h1 className={styles.header}>Meet Our Mental Health Experts</h1>
        <p className={styles.intro}>
          Our team of mental health professionals is dedicated to providing compassionate care <br />
          and tailored treatment plans to support each individual’s unique needs.
        </p>

        {/* Doctor 1 */}
        <div className={styles.flexContainer}>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Dr. Emily Brooks, PhD</h2>
            <p className={styles.intro}>
              Specializes in Cognitive Behavioral Therapy (CBT) for anxiety and depression. <br />
              With over 15 years of experience, Dr. Brooks has helped countless individuals regain confidence and stability.
            </p>
            <button className={styles.bookButton} onClick={handleBookDoctor}>Book Doctor</button>
          </div>
          <div className={styles.imageSection}>
            <img src={doctor1Image} alt="Dr. Emily Brooks" className={styles.image} />
          </div>
        </div>

        {/* Doctor 2 */}
        <div className={styles.flexContainer}>
          <div className={styles.imageSection}>
            <img src={doctor2Image} alt="Dr. Michael Chang" className={styles.image} />
          </div>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Dr. Michael Chang, MD</h2>
            <p className={styles.intro}>
              Board-certified psychiatrist specializing in mood disorders and bipolar disorder. <br />
              Dr. Chang combines medication management with therapy for holistic patient care.
            </p>
            <button className={styles.bookButton} onClick={handleBookDoctor}>Book Doctor</button>
          </div>
        </div>

        {/* Doctor 3 */}
        <div className={styles.flexContainer}>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Dr. Sarah Nguyen, PsyD</h2>
            <p className={styles.intro}>
              Known for her work in trauma and PTSD, Dr. Nguyen offers trauma-focused therapy to help individuals process <br />
              past experiences and move forward with resilience.
            </p>
            <button className={styles.bookButton} onClick={handleBookDoctor}>Book Doctor</button>
          </div>
          <div className={styles.imageSection}>
            <img src={doctor3Image} alt="Dr. Sarah Nguyen" className={styles.image} />
          </div>
        </div>

        {/* Doctor 4 */}
        <div className={styles.flexContainer}>
          <div className={styles.imageSection}>
            <img src={doctor4Image} alt="Dr. James Patel" className={styles.image} />
          </div>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Dr. James Patel, MD</h2>
            <p className={styles.intro}>
              Specializing in adolescent mental health, Dr. Patel provides a safe environment for teens <br />
              dealing with challenges like anxiety, depression, and self-esteem issues.
            </p>
            <button className={styles.bookButton} onClick={handleBookDoctor}>Book Doctor</button>
          </div>
        </div>

        {/* Doctor 5 */}
        <div className={styles.flexContainer}>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Dr. Laura Gomez, LCSW</h2>
            <p className={styles.intro}>
              A licensed clinical social worker focusing on family therapy and relationship counseling. <br />
              Dr. Gomez helps families and couples navigate their dynamics and improve communication.
            </p>
            <button className={styles.bookButton} onClick={handleBookDoctor}>Book Doctor</button>
          </div>
          <div className={styles.imageSection}>
            <img src={doctor5Image} alt="Dr. Laura Gomez" className={styles.image} />
          </div>
        </div>

        {/* Doctor 6 */}
        <div className={styles.flexContainer}>
          <div className={styles.imageSection}>
            <img src={doctor6Image} alt="Dr. Ahmed Malik" className={styles.image} />
          </div>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Dr. Ahmed Malik, PsyD</h2>
            <p className={styles.intro}>
              Specializes in Obsessive-Compulsive Disorder (OCD) and uses Exposure and Response Prevention (ERP) <br />
              therapy to help patients overcome intrusive thoughts and compulsive behaviors.
            </p>
            <button className={styles.bookButton} onClick={handleBookDoctor}>Book Doctor</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Doctors;
