import React from 'react';
import { FaWheelchair, FaNotesMedical, FaChild } from 'react-icons/fa';
import styles from '../styles/Dashboard.module.css';

const AccessibilityCard = ({ stadiumData }) => {
  return (
    <div className={`${styles.card} glass-card`}>
      <div className={styles.cardHeader}>
        <FaWheelchair className={styles.cardIcon} />
        Accessibility
      </div>
      <div className={styles.cardBody}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaWheelchair /> Entrances
          </span>
          <span className={styles.infoValue}>{stadiumData.wheelchairEntrances}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Accessible Restrooms</span>
          <span className={styles.infoValue}>All Concourse Levels</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Elevators</span>
          <span className={styles.infoValue}>Available at all VIP gates</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaNotesMedical /> Medical Support
          </span>
          <span className={styles.infoValue}>{stadiumData.medicalCenter}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaChild /> Family Area
          </span>
          <span className={styles.infoValue}>{stadiumData.fanZone}</span>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityCard;
