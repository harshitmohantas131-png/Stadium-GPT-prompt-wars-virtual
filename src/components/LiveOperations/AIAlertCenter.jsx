import React from 'react';
import styles from '../../styles/LiveOperations.module.css';

const AIAlertCenter = ({ alerts, role }) => {
  if (!alerts || alerts.length === 0) return null;

  // Ideally we would filter based on role here, e.g. Fans don't see all security alerts.
  // For this prototype, we'll show them to demonstrate the live updates, 
  // but we can add light filtering.
  const filteredAlerts = alerts.filter(alert => {
    if (role === 'fan' && alert.text.includes('Medical Assistance')) return false;
    return true;
  });

  return (
    <div className={styles.alertsCenter}>
      <div className={styles.sectionHeader}>
        <h2>🚨 AI Alert Center</h2>
      </div>
      {filteredAlerts.map(alert => (
        <div key={alert.id} className={`${styles.alertItem} ${styles['alert' + alert.priority]}`}>
          <div className={styles.alertHeader}>
            <span>{alert.text}</span>
            <span className={styles.alertTimestamp}>{alert.timestamp}</span>
          </div>
          <div className={styles.alertAction}>
            Recommendation: {alert.action}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AIAlertCenter;
