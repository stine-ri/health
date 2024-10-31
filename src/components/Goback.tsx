import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/GoBack.module.css';

const GoBack: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className={styles.goBackContainer} onClick={handleGoBack}>
      <FontAwesomeIcon icon={faArrowLeft} className={styles.goBackIcon} />
      <span>Back</span>
    </div>
  );
};

export default GoBack;
