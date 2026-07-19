import React from 'react';
import { FaBus, FaTrain, FaParking, FaClock } from 'react-icons/fa';
import styles from '../styles/Dashboard.module.css';

const TransportCard = ({ stadiumData, matchData, role }) => {
  const getArrivalRecommendation = () => {
    if (matchData.crowdLevel === 'Maximum' || matchData.crowdLevel === 'Very High') {
      return "Arrive 3+ hours early";
    }
    return "Arrive 2 hours early";
  };

  return (
    <div className={`${styles.card} glass-card`}>
      <div className={styles.cardHeader}>
        <FaBus className={styles.cardIcon} />
        {role === 'Fan' ? 'Getting There' : 'Transport Hub'}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaTrain /> Nearest Metro
          </span>
          <span className={styles.infoValue}>{stadiumData.nearestMetro}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaBus /> Nearest Bus
          </span>
          <span className={styles.infoValue}>{stadiumData.nearestBus}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaParking /> Parking Status
          </span>
          <span className={styles.infoValue} style={{ color: stadiumData.parkingAvailability === 'Limited' || matchData.crowdLevel === 'Maximum' ? '#ef4444' : 'var(--color-text-primary)' }}>
            {matchData.crowdLevel === 'Maximum' ? 'FULL' : stadiumData.parkingAvailability}
          </span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaClock /> Recommendation
          </span>
          <span className={styles.infoValue} style={{ color: '#f59e0b' }}>{getArrivalRecommendation()}</span>
        </div>
      </div>
    </div>
  );
};

export default TransportCard;
