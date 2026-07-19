import React, { useState } from 'react';
import { FaTimes, FaMapMarkerAlt, FaSubway, FaExclamationTriangle, FaCloudSun, FaWheelchair, FaLightbulb } from 'react-icons/fa';
import styles from '../../styles/Companion.module.css';

const SmartSummary = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={`glass-card ${styles.smartSummary}`}>
      <div className={styles.cardHeader} style={{ fontSize: '1.1rem', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.2rem' }}>📱</span>
          Today's AI Match Plan
        </div>
        <button 
          onClick={() => setIsVisible(false)} 
          style={{ background: 'transparent', border: 'none', color: 'var(--color-white)', cursor: 'pointer' }}
          aria-label="Close summary"
        >
          <FaTimes />
        </button>
      </div>
      
      <div className={styles.summaryList} style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', padding: '1rem' }}>
        
        <div className={styles.summaryItem}>
          <FaMapMarkerAlt /> 
          <span>Arrive by <strong>17:30</strong> to beat the rush.</span>
        </div>
        
        <div className={styles.summaryItem}>
          <FaSubway /> 
          <span><strong>Metro Line 1</strong> is your best transit option.</span>
        </div>

        <div className={styles.summaryItem}>
          <FaExclamationTriangle /> 
          <span>Enter via <strong>Gate 3</strong> to avoid congestion at Gate 7.</span>
        </div>

        <div className={styles.summaryItem}>
          <FaCloudSun /> 
          <span><strong>Clear skies</strong>, ~22°C expected at kickoff.</span>
        </div>

        <div className={styles.summaryItem}>
          <FaWheelchair /> 
          <span>Accessible lifts at <strong>North Stand</strong> are fully operational.</span>
        </div>

        <div className={styles.summaryItem} style={{ marginTop: '0.5rem', color: 'var(--color-white)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.5rem' }}>
          <FaLightbulb color="#fbbf24" /> 
          <span><strong>AI Advice:</strong> Grab food at Court C before 18:00 to avoid lines!</span>
        </div>

      </div>
    </div>
  );
};

export default SmartSummary;
