import React from 'react';
import { FaBell } from 'react-icons/fa';
import styles from '../styles/Dashboard.module.css';

const AlertsCard = ({ matchData, role }) => {
  // We can add role-based alerts here
  const baseAlerts = matchData.alerts || [];
  let roleAlerts = [];
  
  if (role === 'Volunteer') {
    roleAlerts = [{ type: 'info', message: 'Shift briefing at 14:00 at Gate 1' }];
  } else if (role === 'Security') {
    roleAlerts = [{ type: 'warning', message: 'Crowd density increasing at North Plaza' }];
  } else if (role === 'Venue Operator') {
    roleAlerts = [{ type: 'success', message: 'All generators nominal' }, { type: 'danger', message: 'Staff shortage at Zone C' }];
  }

  const allAlerts = [...baseAlerts, ...roleAlerts];

  return (
    <div className={`${styles.card} glass-card`}>
      <div className={styles.cardHeader}>
        <FaBell className={styles.cardIcon} />
        Live Alerts
      </div>
      <div className={styles.cardBody} style={{ gap: '0.5rem' }}>
        {allAlerts.length === 0 && (
          <p style={{ opacity: 0.7 }}>No active alerts.</p>
        )}
        
        {allAlerts.map((alert, idx) => (
          <div key={idx} className={styles.alertPill}>
            <div className={`${styles.alertDot} dot-${alert.type}`}></div>
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsCard;
