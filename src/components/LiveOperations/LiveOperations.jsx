import React from 'react';
import LiveStadiumStatus from './LiveStadiumStatus';
import AIOperationalInsights from './AIOperationalInsights';
import SmartCrowdHeatmap from './SmartCrowdHeatmap';
import LiveEventTimeline from './LiveEventTimeline';
import AIAlertCenter from './AIAlertCenter';
import AutoAIRecommendations from './AutoAIRecommendations';
import styles from '../../styles/LiveOperations.module.css';

const LiveOperations = ({ role, stadium, matchStage, liveData, timelineEvents }) => {

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>
          <span>⚡</span> Live Stadium Operations
        </h2>
        <p>Real-time operational intelligence powered by StadiumGPT AI</p>
      </div>

      <div className={styles.grid}>
        <div className="stagger-1" style={{ animationFillMode: 'both' }}><LiveStadiumStatus data={liveData} /></div>
        <div className="stagger-2" style={{ animationFillMode: 'both' }}><AIOperationalInsights 
          stadium={stadium} 
          matchStage={matchStage} 
          role={role} 
          data={liveData} 
        /></div>
        <div className="stagger-3" style={{ animationFillMode: 'both' }}><SmartCrowdHeatmap heatmap={liveData?.crowdHeatmap} /></div>
        <div className="stagger-4" style={{ animationFillMode: 'both' }}><LiveEventTimeline 
          timelineEvents={timelineEvents} 
          currentEventIndex={liveData?.currentEventIndex} 
        /></div>
      </div>

      <AutoAIRecommendations recommendations={liveData?.recommendations} />
      <AIAlertCenter alerts={liveData?.alerts} role={role} />
    </div>
  );
};

export default LiveOperations;
