import React from 'react';
import { FaChartLine, FaCloudSun, FaClock, FaRunning, FaSubway } from 'react-icons/fa';
import styles from '../../styles/Companion.module.css';

const MatchDayPredictions = ({ matchStage }) => {
  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <span style={{ fontSize: '1.2rem' }}>📈</span>
        Match Day Predictions
      </div>
      <div className={styles.cardBody}>
        
        <div className={styles.routeGrid} style={{ gridTemplateColumns: '1fr 1fr' }}>
          
          <div className={styles.routeCard}>
            <div className={styles.routeName}><FaRunning /> Exit Congestion</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              {matchStage === 'post-match' ? 'Severe - 30+ min delay expected at main gates.' : 'Minimal currently. Expected to rise 10 mins before final whistle.'}
            </div>
          </div>

          <div className={styles.routeCard}>
            <div className={styles.routeName}><FaCloudSun /> Weather Shift</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Temperature drop of 5°C expected around 20:00. No rain forecast.
            </div>
          </div>

          <div className={styles.routeCard}>
            <div className={styles.routeName}><FaSubway size={16} /> Transport Delays</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Metro Line 1 currently experiencing 5-min delays.
            </div>
          </div>

          <div className={styles.routeCard}>
            <div className={styles.routeName}><FaClock /> Recommended Departure</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Leave 15 minutes before match ends to avoid the primary surge.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default React.memo(MatchDayPredictions);
