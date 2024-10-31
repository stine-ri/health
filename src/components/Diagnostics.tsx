import React from 'react';
import styles from '../styles/Diagnostics.module.css';
import diagnostic1Image from '../assets/images/bo ah.webp';
import diagnostic2Image from '../assets/images/wook.jpg';
import diagnostic3Image from '../assets/images/sang.jpg';
import diagnostic4Image from '../assets/images/soo.jpg';
import diagnostic5Image from '../assets/images/won.jpg';
import diagnostic6Image from '../assets/images/Me1.jpg';
import GoBack from './Goback';
const Diagnostics = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
      <GoBack/>
        <h1 className={styles.header}>Mental Health Diagnostics</h1>
        <p className={styles.intro}>
          Our diagnostics process offers detailed evaluations to help individuals understand their mental health challenges <br />
          and receive the right support to improve their well-being.
        </p>

        {/* Diagnostic 1 */}
        <div className={styles.flexContainer}>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Diagnostic 1: Anxiety Disorder</h2>
            <p className={styles.intro}>
              After experiencing consistent nervousness and fear in social situations, Alex sought help. Through a series of assessments, <br />
              Alex was diagnosed with Social Anxiety Disorder. Therapy sessions, along with exposure techniques, were recommended <br />
              to help Alex gradually gain confidence in social environments.
            </p>
          </div>
          <div className={styles.imageSection}>
            <img src={diagnostic1Image} alt="Anxiety Disorder" className={styles.image} />
          </div>
        </div>

        {/* Diagnostic 2 */}
        <div className={styles.flexContainer}>
          <div className={styles.imageSection}>
            <img src={diagnostic2Image} alt="Depression" className={styles.image} />
          </div>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Diagnostic 2: Major Depression</h2>
            <p className={styles.intro}>
              Emily reported prolonged feelings of sadness, fatigue, and lack of motivation. A thorough evaluation confirmed <br />
              Major Depressive Disorder. A combination of cognitive-behavioral therapy (CBT) and a structured daily routine <br />
              was recommended to help Emily rebuild positive patterns in her daily life.
            </p>
          </div>
        </div>

        {/* Diagnostic 3 */}
        <div className={styles.flexContainer}>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Diagnostic 3: Bipolar Disorder</h2>
            <p className={styles.intro}>
              Jacob experienced extreme mood swings from high energy to deep sadness. Through careful observation and interviews, <br />
              he was diagnosed with Bipolar Disorder. A treatment plan including mood stabilizers and psychoeducation was <br />
              recommended to help Jacob and his family manage the symptoms.
            </p>
          </div>
          <div className={styles.imageSection}>
            <img src={diagnostic3Image} alt="Bipolar Disorder" className={styles.image} />
          </div>
        </div>

        {/* Diagnostic 4 */}
        <div className={styles.flexContainer}>
          <div className={styles.imageSection}>
            <img src={diagnostic4Image} alt="PTSD" className={styles.image} />
          </div>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Diagnostic 4: Post-Traumatic Stress Disorder (PTSD)</h2>
            <p className={styles.intro}>
              After surviving a traumatic event, Lisa experienced flashbacks and heightened anxiety. Diagnostic testing confirmed PTSD, <br />
              and she was guided through a trauma-focused therapy program to support her recovery.
            </p>
          </div>
        </div>

        {/* Diagnostic 5 */}
        <div className={styles.flexContainer}>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Diagnostic 5: Obsessive-Compulsive Disorder (OCD)</h2>
            <p className={styles.intro}>
              Sam struggled with repetitive thoughts and rituals that interfered with daily life. A diagnostic evaluation revealed OCD, <br />
              and Sam was introduced to Exposure and Response Prevention (ERP) therapy to reduce these behaviors.
            </p>
          </div>
          <div className={styles.imageSection}>
            <img src={diagnostic5Image} alt="Obsessive-Compulsive Disorder" className={styles.image} />
          </div>
        </div>

        {/* Diagnostic 6 */}
        <div className={styles.flexContainer}>
          <div className={styles.imageSection}>
            <img src={diagnostic6Image} alt="Schizophrenia" className={styles.image} />
          </div>
          <div className={styles.textSection}>
            <h2 className={styles.header}>Diagnostic 6: Schizophrenia</h2>
            <p className={styles.intro}>
              James began experiencing delusions and hallucinations, affecting his daily interactions. A comprehensive assessment led <br />
              to a diagnosis of Schizophrenia, and James was referred to specialized therapy and medication management to help <br />
              him cope with the symptoms and maintain stability.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Diagnostics;
