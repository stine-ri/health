import React from 'react'; // Ensure this import is present
import styles from '../styles/Services.module.css';
import therapyImage from '../assets/images/papy.webp';
import crisisImage from '../assets/images/crisis.webp';
import wellnessImage from '../assets/images/well.jpg';
import educationImage from '../assets/images/leaf.jpg';
import communityImage from '../assets/images/llt.webp';
import programImage from '../assets/images/program.jpg';
import workshopImage from '../assets/images/shop.webp';
import assessmentImage from '../assets/images/sess.jpg';
import medicationImage from '../assets/images/medical.jpg';
import telehealthImage from '../assets/images/telehealth.png'; 
import GoBack from './Goback';
const Services = () => {
  React.createElement; // This ensures React is used.

  return (
    <div className={styles.container}>
       <GoBack/>
      <h1>Our Services</h1>  
      <p className={styles.intro}>
        We provide a range of mental health services to support your journey towards wellness,  <br />offering individual care, crisis support, and educational resources.
      </p>
      {/* Therapy and Counseling Services */}
      <div className={styles.flexContainer}>
        <div className={styles.textSection}>
          <h2>Therapy and Counseling Services</h2>
          <p>
            <strong>Individual Therapy:</strong> One-on-one sessions with licensed therapists for personalized treatment.<br />
            <strong>Group Therapy:</strong> Therapy sessions focused on specific issues like depression and anxiety in a supportive group setting.<br />
            <strong>Family Counseling:</strong> Support for families to address relational dynamics and strengthen family bonds.<br />
            <strong>Couples Counseling:</strong> Guidance for couples dealing with relationship challenges, enhancing communication skills and understanding.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={therapyImage} alt="Therapy and Counseling" className={styles.image} />
        </div>
      </div>

      {/* Crisis Intervention */}
      <div className={styles.flexContainer}>
        <div className={styles.imageSection}>
          <img src={crisisImage} alt="Crisis Intervention" className={styles.image} />
        </div>
        <div className={styles.textSection}>
          <h2>Crisis Intervention</h2>
          <p>
            <strong>24/7 Crisis Hotline:</strong> Immediate support for individuals in crisis or experiencing suicidal thoughts.<br />
            <strong>Chat Support:</strong> A confidential, text-based option for those who may be uncomfortable with calling.<br />
            <strong>Emergency Services Integration:</strong> Assistance in connecting with emergency services as necessary.
          </p>
        </div>
      </div>

      {/* Self-Help and Wellness Resources */}
      <div className={styles.flexContainer}>
        <div className={styles.textSection}>
          <h2>Self-Help and Wellness Resources</h2>
          <p>
            <strong>Mindfulness and Meditation Sessions:</strong> Guided audio and video sessions for relaxation and mindfulness.<br />
            <strong>Stress Management Tools:</strong> Tools like breathing exercises, journaling, and grounding techniques.<br />
            <strong>Sleep Improvement Programs:</strong> Resources to help establish healthy sleep habits.<br />
            <strong>Wellness Tracking:</strong> Monitor your mood, sleep patterns, and overall well-being.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={wellnessImage} alt="Wellness Resources" className={styles.image} />
        </div>
      </div>

      {/* Psychoeducational Content */}
      <div className={styles.flexContainer}>
        <div className={styles.imageSection}>
          <img src={educationImage} alt="Psychoeducational Content" className={styles.image} />
        </div>
        <div className={styles.textSection}>
          <h2>Psychoeducational Content</h2>
          <p>
            <strong>Articles and Blog Posts:</strong> In-depth articles on mental health topics like depression, anxiety, and PTSD.<br />
            <strong>Videos and Webinars:</strong> Educational content by professionals on mindfulness, coping strategies, and more.<br />
            <strong>Podcasts:</strong> Audio discussions on mental health topics, including coping mechanisms and personal stories.
          </p>
        </div>
      </div>

      {/* Community Support */}
      <div className={styles.flexContainer}>
        <div className={styles.textSection}>
          <h2>Community Support</h2>
          <p>
            <strong>Support Groups:</strong> Peer-led groups for specific challenges, like addiction recovery or grief.<br />
            <strong>Forums and Peer Support:</strong> Safe spaces for discussing challenges with others.<br />
            <strong>Buddy System:</strong> Matches users with a supportive peer for mutual assistance and encouragement.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={communityImage} alt="Community Support" className={styles.image} />
        </div>
      </div>

      {/* Specialized Programs */}
      <div className={styles.flexContainer}>
        <div className={styles.imageSection}>
          <img src={programImage} alt="Specialized Programs" className={styles.image} />
        </div>
        <div className={styles.textSection}>
          <h2>Specialized Programs</h2>
          <p>
            <strong>Substance Abuse Programs:</strong> Step-based recovery programs and addiction counseling.<br />
            <strong>Trauma Recovery Programs:</strong> Includes therapies like EMDR or exposure therapy for trauma survivors.<br />
            <strong>Youth and Adolescent Programs:</strong> Tailored mental health services for young people.<br />
            <strong>Employee Assistance Programs:</strong> Services supporting mental health in the workplace.
          </p>
        </div>
      </div>

      {/* Skill-Building Workshops */}
      <div className={styles.flexContainer}>
        <div className={styles.textSection}>
          <h2>Skill-Building Workshops</h2>
          <p>
            <strong>CBT Skills Training:</strong> Practical CBT techniques for managing thoughts and behaviors.<br />
            <strong>DBT Skills Workshops:</strong> Techniques for emotional regulation and interpersonal effectiveness.<br />
            <strong>Life Skills Training:</strong> Workshops on time management, financial planning, and social skills.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={workshopImage} alt="Skill-Building Workshops" className={styles.image} />
        </div>
      </div>

      {/* Mental Health Assessment Tools */}
      <div className={styles.flexContainer}>
        <div className={styles.imageSection}>
          <img src={assessmentImage} alt="Mental Health Assessment Tools" className={styles.image} />
        </div>
        <div className={styles.textSection}>
          <h2>Mental Health Assessment Tools</h2>
          <p>
            <strong>Screening Tests:</strong> Self-assessment tools for common mental health conditions.<br />
            <strong>Progress Tracking:</strong> Track symptoms over time to monitor improvements.<br />
            <strong>Goal Setting and Achievement Tracking:</strong> Tools for setting and achieving mental health goals.
          </p>
        </div>
      </div>

      {/* Medication Management Support */}
      <div className={styles.flexContainer}>
        <div className={styles.textSection}>
          <h2>Medication Management Support</h2>
          <p>
            <strong>Medication Reminders:</strong> Tools to help users remember to take prescribed medications.<br />
            <strong>Medication Tracking:</strong> Log medication intake and any side effects.<br />
            <strong>Psycho-Pharmaceutical Information:</strong> Information on medications, side effects, and uses.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={medicationImage} alt="Medication Management" className={styles.image} />
        </div>
      </div>

      {/* Telehealth Services */}
      <div className={styles.flexContainer}>
        <div className={styles.imageSection}>
          <img src={telehealthImage} alt="Telehealth Services" className={styles.image} />
        </div>
        <div className={styles.textSection}>
          <h2>Telehealth Services</h2>
          <p>
            <strong>Virtual Therapy Sessions:</strong> Remote therapy options for convenience and accessibility.<br />
            <strong>Online Support Groups:</strong> Virtual community support for shared experiences.<br />
            <strong>Consultations with Specialists:</strong> Access to specialists through telehealth technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
