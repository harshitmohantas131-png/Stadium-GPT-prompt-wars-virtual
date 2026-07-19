import React, { useState, useEffect } from 'react';
import styles from '../styles/TypingIndicator.module.css';

const STATUS_MESSAGES = [
  "Consulting stadium knowledge...",
  "Checking transport updates...",
  "Planning your route...",
  "Analyzing crowd density...",
  "Preparing personalized advice..."
];

const TypingIndicator = () => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.indicatorContainer} aria-label="AI is typing" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', fontStyle: 'italic', color: '#64748b' }}>
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <span className="fade-in" key={msgIndex}>{STATUS_MESSAGES[msgIndex]}</span>
    </div>
  );
};

export default TypingIndicator;
