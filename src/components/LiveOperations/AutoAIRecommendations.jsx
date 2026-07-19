import React from 'react';
import styles from '../../styles/LiveOperations.module.css';

const AutoAIRecommendations = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <div className={styles.recommendationsContainer}>
      <div className={styles.recommendationsGrid}>
        {recommendations.map(rec => (
          <div key={rec.id} className={styles.recommendationCard}>
            <span style={{ fontSize: '1.2rem' }}>💡</span>
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{rec.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoAIRecommendations;
