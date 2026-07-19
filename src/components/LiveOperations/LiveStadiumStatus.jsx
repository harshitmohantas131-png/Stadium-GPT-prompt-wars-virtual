import React from 'react';
import styles from '../../styles/LiveOperations.module.css';

const LiveStadiumStatus = ({ data }) => {
  if (!data) return null;

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
        LIVE STADIUM STATUS
      </div>
      <div className={styles.cardBody}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Overall Health</span>
          <span className={styles.infoValue}>
            <span className={`${styles.indicator} ${styles['status' + data.health]}`}></span>
            {data.health}
          </span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Current Capacity</span>
          <span className={styles.infoValue}>{data.capacity.toLocaleString()}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Queue Level</span>
          <span className={styles.infoValue}>{data.queueLevel}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Gates Available</span>
          <span className={styles.infoValue}>{data.gatesAvailable}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Security Status</span>
          <span className={styles.infoValue}>{data.securityStatus}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Transport Status</span>
          <span className={styles.infoValue}>{data.transportStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default LiveStadiumStatus;
