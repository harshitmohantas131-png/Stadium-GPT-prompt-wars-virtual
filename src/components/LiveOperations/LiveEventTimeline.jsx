import React from 'react';
import styles from '../../styles/LiveOperations.module.css';

const LiveEventTimeline = ({ timelineEvents, currentEventIndex }) => {
  if (!timelineEvents || timelineEvents.length === 0) return null;

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        LIVE EVENT TIMELINE
      </div>
      <div className={styles.cardBody}>
        <div className={styles.timeline}>
          {timelineEvents.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.timelineEvent} ${index === currentEventIndex ? styles.active : ''}`}
            >
              <span className={styles.eventTime}>{item.time}</span>
              <span className={styles.eventText}>{item.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveEventTimeline;
