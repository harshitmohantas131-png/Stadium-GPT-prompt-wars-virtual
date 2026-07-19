import React, { useState } from 'react';
import { FaLeaf, FaCheck } from 'react-icons/fa';
import styles from '../../styles/Companion.module.css';

const SustainabilityCenter = () => {
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Bring reusable bottle', completed: false },
    { id: 2, text: 'Digital ticket', completed: true },
    { id: 3, text: 'Public transport', completed: false },
    { id: 4, text: 'Reusable bag', completed: false },
    { id: 5, text: 'Recycle waste', completed: false },
    { id: 6, text: 'Walk where possible', completed: false }
  ]);

  const toggleCheck = (id) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const completedCount = checklist.filter(i => i.completed).length;
  const completionPercent = Math.round((completedCount / checklist.length) * 100);

  const getBadge = () => {
    if (completionPercent >= 80) return 'Sustainability Champion';
    if (completionPercent >= 50) return 'Green Traveller';
    return 'Eco Fan';
  };

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <span style={{ fontSize: '1.2rem', color: '#34d399' }}><FaLeaf /></span>
        Sustainable Match Day
      </div>
      <div className={styles.cardBody}>
        
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>12.5 kg</span>
            <span style={{ fontSize: '0.8rem' }}>CO₂ Saved</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{completionPercent * 2}</span>
            <span style={{ fontSize: '0.8rem' }}>Green Score</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue} style={{ fontSize: '1.1rem' }}>{getBadge()}</span>
            <span style={{ fontSize: '0.8rem' }}>Badge</span>
          </div>
        </div>

        <div className={styles.aiExplanation}>
          <strong>✨ AI Suggestions:</strong> Take the Metro instead of driving. Refill your bottle at Gate 3.
        </div>

        <div style={{ marginTop: '0.5rem' }}>
          <h4 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>Match Day Checklist ({completionPercent}%)</h4>
          <div className={styles.checklist}>
            {checklist.map(item => (
              <div 
                key={item.id} 
                className={`${styles.checklistItem} ${item.completed ? styles.completed : ''}`}
                onClick={() => toggleCheck(item.id)}
              >
                <div className={styles.checkbox}>
                  {item.completed && <FaCheck size={12} />}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBarFill} style={{ width: `${completionPercent}%` }}></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SustainabilityCenter;
