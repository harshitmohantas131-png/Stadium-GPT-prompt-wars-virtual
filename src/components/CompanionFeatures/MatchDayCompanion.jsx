import React from 'react';
import RoutePlanner from './RoutePlanner';
import AnnouncementTranslator from './AnnouncementTranslator';
import SustainabilityCenter from './SustainabilityCenter';
import MatchDayPredictions from './MatchDayPredictions';
import SmartSummary from './SmartSummary';
import styles from '../../styles/Companion.module.css';

const MatchDayCompanion = ({ role, stadium, matchStage }) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.grid2x2}>
        <RoutePlanner role={role} stadium={stadium} matchStage={matchStage} />
        <AnnouncementTranslator />
        <SustainabilityCenter />
        <MatchDayPredictions matchStage={matchStage} />
      </div>
      
      <SmartSummary />
    </div>
  );
};

export default MatchDayCompanion;
