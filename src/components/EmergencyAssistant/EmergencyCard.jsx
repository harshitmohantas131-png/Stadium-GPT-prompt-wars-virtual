import React from 'react';
import styles from '../../styles/Emergency.module.css';

const EmergencyCard = ({ type, guidance }) => {
  if (!guidance || guidance.length === 0) return null;

  return (
    <div className={styles.detailCard} aria-live="polite">
      <div className={styles.detailHeader}>
        {type} GUIDANCE
      </div>
      <ul className={styles.guidanceList}>
        {guidance.map((step, index) => (
          <li key={index} className={styles.guidanceItem}>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyCard;
