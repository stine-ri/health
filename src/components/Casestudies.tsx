import React from 'react';
import styles from '../styles/Casestudies.module.css';
import caseStudy1Image from '../assets/images/soo.jpg';
import caseStudy2Image from '../assets/images/won.jpg';
import caseStudy3Image from '../assets/images/Me1.jpg';
import caseStudy4Image from '../assets/images/sang.jpg';
import caseStudy5Image from '../assets/images/bo ah.webp';
import caseStudy6Image from '../assets/images/wook.jpg';
import GoBack from './Goback';

const CaseStudies = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <GoBack />
        <h1 className={styles.header}>Successful Case Studies in Mental Health</h1>
        <p className={styles.intro}>
          Our case studies highlight the transformative power of mental health services, showcasing the journeys of individuals <br />who have overcome challenges through our programs.
        </p>

        {/* Case Study 1 */}
        <div className={`${styles.flexContainer} sm:flex-col`}>
          <div className={`${styles.textSection} sm:w-full sm:mb-4`}>
            <h2 className={styles.header}>Case Study 1: Overcoming Anxiety</h2>
            <p className={styles.intro}>
              After struggling with anxiety for years, Sarah sought help through our individual therapy sessions. Through a blend of consistent support and cognitive-behavioral techniques, she gradually learned to identify and manage triggers, improving her resilience. Now, Sarah leads a fulfilling life, confident in her ability to handle the stressors that once overwhelmed her. Her journey showcases how guided therapy can empower individuals to overcome persistent anxiety and regain control over their emotional well-being.
            </p>
          </div>
          <div className={`${styles.imageSection} sm:w-full`}>
            <img src={caseStudy1Image} alt="Case Study 1" className={styles.image} />
          </div>
        </div>

        {/* Case Study 2 */}
        <div className={`${styles.flexContainer} sm:flex-col`}>
          <div className={`${styles.imageSection} sm:w-full`}>
            <img src={caseStudy2Image} alt="Case Study 2" className={styles.image} />
          </div>
          <div className={`${styles.textSection} sm:w-full sm:mt-4`}>
            <h2 className={styles.header}>Case Study 2: Family Counseling</h2>
            <p className={styles.intro}>
              The Johnson family faced communication barriers that impacted their relationships and daily interactions. Through our structured family counseling program, they explored their communication styles and emotional needs. By learning effective listening and expression techniques, they began to rebuild trust and understanding. Today, the Johnson family enjoys stronger bonds, open dialogue, and a renewed sense of connection, demonstrating the impact of family counseling in creating supportive home environments.
            </p>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className={`${styles.flexContainer} sm:flex-col`}>
          <div className={`${styles.textSection} sm:w-full sm:mb-4`}>
            <h2 className={styles.header}>Case Study 3: Recovery from Depression</h2>
            <p className={styles.intro}>
              Mark battled severe depression for years, leading to social isolation and a withdrawal from activities he once enjoyed. With the support of our mental health community and tailored therapy sessions, he gradually rediscovered a sense of purpose and joy. Engaging in our support groups allowed Mark to connect with others who understood his struggles, helping him feel less alone. Over time, he developed coping strategies that have enabled him to return to work, illustrating the life-changing potential of mental health support for those facing depression.
            </p>
          </div>
          <div className={`${styles.imageSection} sm:w-full`}>
            <img src={caseStudy3Image} alt="Case Study 3" className={styles.image} />
          </div>
        </div>

        {/* Case Study 4 */}
        <div className={`${styles.flexContainer} sm:flex-col`}>
          <div className={`${styles.imageSection} sm:w-full`}>
            <img src={caseStudy4Image} alt="Case Study 4" className={styles.image} />
          </div>
          <div className={`${styles.textSection} sm:w-full sm:mt-4`}>
            <h2 className={styles.header}>Case Study 4: Navigating Grief</h2>
            <p className={styles.intro}>
              After losing a loved one, Jessica found herself overwhelmed by grief and unsure how to cope. Through our compassionate grief counseling services, she was able to process her loss and honor her loved one’s memory in a way that felt meaningful. With the guidance of her therapist, Jessica learned techniques to manage her emotions and eventually found peace, embracing life with a newfound sense of resilience. Her journey emphasizes the importance of professional support in navigating profound personal loss.
            </p>
          </div>
        </div>

        {/* Case Study 5 */}
        <div className={`${styles.flexContainer} sm:flex-col`}>
          <div className={`${styles.textSection} sm:w-full sm:mb-4`}>
            <h2 className={styles.header}>Case Study 5: Substance Abuse Recovery</h2>
            <p className={styles.intro}>
              James struggled with substance abuse for years, a battle that strained his relationships and put his career at risk. Through our recovery program, he received personalized support that addressed both the psychological and social aspects of addiction. With each session, James learned healthier coping mechanisms, ultimately finding the strength to rebuild his life. His recovery story is a testament to the effectiveness of structured, empathetic treatment in helping individuals overcome addiction and restore family connections.
            </p>
          </div>
          <div className={`${styles.imageSection} sm:w-full`}>
            <img src={caseStudy5Image} alt="Case Study 5" className={styles.image} />
          </div>
        </div>

        {/* Case Study 6 */}
        <div className={`${styles.flexContainer} sm:flex-col`}>
          <div className={`${styles.imageSection} sm:w-full`}>
            <img src={caseStudy6Image} alt="Case Study 6" className={styles.image} />
          </div>
          <div className={`${styles.textSection} sm:w-full sm:mt-4`}>
            <h2 className={styles.header}>Case Study 6: Coping with PTSD</h2>
            <p className={styles.intro}>
              Anna experienced trauma that left her with PTSD, impacting her daily life and mental health. Through our specialized trauma recovery programs, Anna received intensive support that equipped her with coping strategies tailored to her unique challenges. Over time, she learned how to manage her PTSD symptoms and began to reclaim her life, finding the courage to pursue her dreams. Her experience highlights the importance of targeted trauma support in facilitating recovery and personal growth.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CaseStudies;
