import React from 'react';
import styles from '../../styles/LiveOperations.module.css';

const SmartCrowdHeatmap = ({ heatmap }) => {
  if (!heatmap) return null;

  const sections = [
    { name: 'North', key: 'North' },
    { name: 'South', key: 'South' },
    { name: 'East', key: 'East' },
    { name: 'West', key: 'West' },
    { name: 'VIP', key: 'VIP' },
    { name: 'Fan Zone', key: 'FanZone' },
  ];

  const getTooltipContent = (color) => {
    switch (color) {
      case 'Green': return 'Density: 40% | Wait: 5m | Action: Normal';
      case 'Yellow': return 'Density: 65% | Wait: 12m | Action: Monitor';
      case 'Orange': return 'Density: 85% | Wait: 25m | Action: Prepare to Divert';
      case 'Red': return 'Density: 98% | Wait: 45m+ | Action: Divert Crowd';
      default: return 'Data Unavailable';
    }
  };

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20M12 2v20M5 5l14 14M19 5L5 19" />
        </svg>
        SMART CROWD HEATMAP
      </div>
      <div className={styles.cardBody}>
        <div className={styles.heatmapGrid}>
          {sections.map((section) => {
            const colorClass = styles[`heatmap${heatmap[section.key]}`];
            return (
              <div key={section.key} className={`${styles.heatmapSection} ${colorClass}`}>
                {section.name}
                <div className={styles.tooltip}>
                  {getTooltipContent(heatmap[section.key])}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SmartCrowdHeatmap);
