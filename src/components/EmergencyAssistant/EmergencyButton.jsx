import React from 'react';
import styles from '../../styles/Emergency.module.css';

const EmergencyButton = ({ onClick }) => {
  return (
    <button 
      className={styles.floatingButton} 
      onClick={onClick}
      aria-label="Open Emergency Assistant"
      title="Emergency Assistant"
    >
      🚨
    </button>
  );
};

export default EmergencyButton;
