import React, { useState, useEffect } from 'react';
import styles from '../../styles/LiveOperations.module.css';

const AIOperationalInsights = ({ stadium, matchStage, role, data }) => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    // Simulate generating insights when stadium or matchStage changes, 
    // or when data health changes significantly.
    const generateInsights = () => {
      const newInsights = [];
      if (data.queueLevel === 'High') {
        newInsights.push("Gate 5 congestion increasing.");
      }
      
      if (data.transportStatus === 'Smooth') {
        newInsights.push("Metro is currently the fastest arrival option.");
      }
      
      if (data.crowdHeatmap.FanZone === 'Green') {
        newInsights.push("Food Court C has the shortest waiting time.");
      } else {
        newInsights.push("Food courts are currently busy.");
      }

      newInsights.push("Wheelchair entrances remain fully accessible.");
      
      if (matchStage === 'pre-match') {
        newInsights.push("Rain expected before kickoff.");
      }

      // Filter by role lightly if needed, but the prompt implies these are general operational insights.
      if (role === 'security') {
        newInsights.push("Crowd density normal across all main concourses.");
      }

      setInsights(newInsights);
    };

    generateInsights();
  }, [stadium, matchStage, role, data.health, data.queueLevel, data.transportStatus, data.crowdHeatmap.FanZone]);

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        AI OPERATIONAL INSIGHTS
      </div>
      <div className={styles.cardBody}>
        <ul className={styles.insightsList}>
          {insights.map((insight, index) => (
            <li key={index} className={styles.insightItem}>
              <span style={{ color: 'var(--color-accent-blue)', marginRight: '0.5rem' }}>✨</span>
              {insight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIOperationalInsights;
