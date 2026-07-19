import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import styles from '../styles/Dashboard.module.css';

const MatchInfoCard = ({ stadiumData, matchData }) => {
  return (
    <div className={`${styles.card} glass-card`}>
      <div className={styles.cardHeader}>
        <FaCalendarAlt className={styles.cardIcon} />
        Match Info
      </div>
      <div className={styles.cardBody}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Stadium</span>
          <span className={styles.infoValue}>{stadiumData.name}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>City</span>
          <span className={styles.infoValue}>{stadiumData.city}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Kickoff</span>
          <span className={styles.infoValue}>{matchData.kickoff}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Gate Opening</span>
          <span className={styles.infoValue}>{matchData.gateOpening}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Expected Attendance</span>
          <span className={styles.infoValue}>{matchData.expectedAttendance} ({stadiumData.capacity})</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MatchInfoCard);
