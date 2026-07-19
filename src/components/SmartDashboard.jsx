import React from 'react';
import styles from '../styles/Dashboard.module.css';
import { STADIUMS } from '../data/stadiums';
import { MATCHES } from '../data/matches';
import MatchInfoCard from './MatchInfoCard';
import CrowdCard from './CrowdCard';
import WeatherCard from './WeatherCard';
import TransportCard from './TransportCard';
import AccessibilityCard from './AccessibilityCard';
import AlertsCard from './AlertsCard';

const SmartDashboard = ({ role, stadium, matchStage }) => {
  // Only render if a stadium and match are selected
  if (!stadium || !matchStage) {
    return null; // The dashboard remains hidden until required selections are made
  }

  const stadiumData = STADIUMS[stadium];
  const matchData = MATCHES[matchStage];

  if (!stadiumData || !matchData) return null;

  return (
    <div className={`${styles.dashboardContainer} fade-in`}>
      <div className={styles.dashboardHeader}>
        <h2>🏟 Smart Match Day Dashboard</h2>
        <p>{role ? `${role} View` : 'Standard View'}</p>
      </div>
      
      <div className={styles.grid}>
        <div className="stagger-1" style={{ animationFillMode: 'both' }}><MatchInfoCard stadiumData={stadiumData} matchData={matchData} /></div>
        <div className="stagger-2" style={{ animationFillMode: 'both' }}><CrowdCard matchData={matchData} role={role} /></div>
        <div className="stagger-3" style={{ animationFillMode: 'both' }}><WeatherCard matchData={matchData} /></div>
        
        {role !== 'Security' && role !== 'Venue Operator' && (
          <>
            <div className="stagger-4" style={{ animationFillMode: 'both' }}><TransportCard stadiumData={stadiumData} matchData={matchData} role={role} /></div>
            <div className="stagger-1" style={{ animationFillMode: 'both' }}><AccessibilityCard stadiumData={stadiumData} /></div>
          </>
        )}
        
        {/* Fill in specific role cards or just alerts if needed */}
        <div className="stagger-2" style={{ animationFillMode: 'both' }}><AlertsCard matchData={matchData} role={role} /></div>
        
        {(role === 'Security' || role === 'Venue Operator') && (
          <div className={`stagger-3`} style={{ animationFillMode: 'both' }}>
            <div className={`${styles.card} glass-card`}>
              <div className={styles.cardHeader}>
                Operational Summary
              </div>
              <div className={styles.cardBody}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Staff Availability</span>
                  <span className={styles.infoValue}>94%</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Resource Utilization</span>
                  <span className={styles.infoValue}>88%</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Gate Monitoring</span>
                  <span className={styles.infoValue}>Active</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartDashboard;
