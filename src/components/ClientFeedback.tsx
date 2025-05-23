import styles from '../styles/ClientFeedback.module.css'; // Import CSS module

// Import client images
import aliceImage from '../assets/images/bo ah.webp'; // Adjust the path as necessary
import michaelImage from '../assets/images/moon.jpg';
import sarahImage from '../assets/images/sang.jpg';
import johnImage from '../assets/images/jiwon.jpg';
import emilyImage from '../assets/images/won.jpg';
import robertImage from '../assets/images/wook.jpg';
import jessicaImage from '../assets/images/soo.jpg';
import davidImage from '../assets/images/Me1.jpg';
import GoBack from './Goback';

// Sample feedback data with imported images
const feedbackData = [
  {
    id: 1,
    name: "Alice Johnson",
    feedback: "This service transformed my life. I felt heard, understood, and equipped with tools to handle my challenges.",
    image: aliceImage,
  },
  {
    id: 2,
    name: "Michael Brown",
    feedback: "The guidance and support I received was phenomenal. I can’t recommend this service enough.",
    image: michaelImage,
  },
  {
    id: 3,
    name: "Sarah Williams",
    feedback: "Exceptional support from caring professionals who truly understand mental health.",
    image: sarahImage,
  },
  {
    id: 4,
    name: "John Smith",
    feedback: "A great resource for anyone dealing with mental health struggles. I found the support invaluable.",
    image: johnImage,
  },
  {
    id: 5,
    name: "Emily Davis",
    feedback: "I’ve seen such positive changes since starting my sessions here. A great service overall.",
    image: emilyImage,
  },
  {
    id: 6,
    name: "Robert Wilson",
    feedback: "Amazing support. The team is compassionate and truly dedicated to making a difference.",
    image: robertImage,
  },
  {
    id: 7,
    name: "Jessica Taylor",
    feedback: "A life-changing experience with supportive staff who truly care.",
    image: jessicaImage,
  },
  {
    id: 8,
    name: "David Garcia",
    feedback: "The insights I gained here helped me immensely. Highly recommend!",
    image: davidImage,
  },
];

// ClientFeedback component
const ClientFeedback = () => {
  return (
    <div className={`${styles.container} px-4 sm:px-8`}>
      <GoBack />
      <h1 className={`${styles.header} text-2xl sm:text-3xl lg:text-4xl`}>Client Feedback</h1>
      <div className={`${styles.feedbackGrid} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8`}>
        {feedbackData.map((item) => (
          <div key={item.id} className={`${styles.feedbackCard} bg-white p-4 rounded-lg shadow-md`}>
            <p className={`${styles.feedbackText} text-sm sm:text-base`}>“{item.feedback}”</p>
            <div className={`${styles.clientInfo} flex items-center mt-4`}>
              <div
                className={`${styles.avatar} w-12 h-12 rounded-full bg-cover bg-center`}
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <p className={`${styles.clientName} ml-3 text-xs sm:text-sm font-semibold text-gray-700`}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
