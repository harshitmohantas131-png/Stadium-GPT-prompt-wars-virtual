import React from 'react';
import { FaUsers } from 'react-icons/fa';
import styles from '../styles/Dashboard.module.css';

const CrowdCard = ({ matchData, role }) => {
  const getBadgeColor = (level) => {
    switch (level) {
      case 'Maximum':
      case 'Very High': return 'var(--color-accent-blue)'; // We use blue/red depending on design, let's stick to theme
      case 'High': return '#f59e0b';
      case 'Medium': return 'var(--color-accent-green)';
      default: return 'var(--color-text-secondary)';
    }
  };

  const getProgressColor = (level) => {
    switch (level) {
      case 'Maximum': return '#ef4444';
      case 'Very High': return '#ef4444';
      case 'High': return '#f59e0b';
      case 'Medium': return 'var(--color-accent-green)';
      default: return 'var(--color-accent-blue)';
    }
  };

  return (
    <div className={`${styles.card} glass-card`}>
      <div className={styles.cardHeader}>
        <FaUsers className={styles.cardIcon} />
        {role === 'Security' ? 'Crowd Density' : 'Live Crowd'}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Current Status</span>
          <span 
            className={styles.badge} 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: getProgressColor(matchData.crowdLevel) }}
          >
            {matchData.crowdLevel}
          </span>
        </div>
        
        <div style={{ marginTop: '1rem' }}>
          <div className={styles.infoRow} style={{ marginBottom: '0.25rem' }}>
            <span className={styles.infoLabel}>Capacity Filled</span>
            <span className={styles.infoValue}>{matchData.crowdPercentage}%</span>
          </div>
          <div className={styles.progressTrack}>
            <div 
              className={styles.progressFill} 
              style={{ 
                width: `${matchData.crowdPercentage}%`, 
                backgroundColor: getProgressColor(matchData.crowdLevel)
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CrowdCard);
