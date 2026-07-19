import React, { useState, Suspense } from 'react';
import TopBar from './TopBar';
import Hero from './Hero';
import WelcomeCard from './WelcomeCard';
import RoleSelector from './RoleSelector';
import MatchSelector from './MatchSelector';
import SmartDashboard from './SmartDashboard';
import LiveOperations from './LiveOperations/LiveOperations';
import AIChat from './AIChat';
import Footer from './Footer';
import NotificationCenter from './CompanionFeatures/NotificationCenter';
import DailyBriefing from './CompanionFeatures/DailyBriefing';
import { useSimulation } from '../utils/simulation';
import styles from '../styles/App.module.css';

// Lazy loaded components for performance
const MatchDayCompanion = React.lazy(() => import('./CompanionFeatures/MatchDayCompanion'));
const EmergencyAssistant = React.lazy(() => import('./EmergencyAssistant/EmergencyAssistant'));

const App = () => {
  const [role, setRole] = useState('');
  const [stadium, setStadium] = useState('');
  const [matchStage, setMatchStage] = useState('');

  // Lifted simulation state for global access (Notifications, Live Operations)
  const { liveData, timelineEvents } = useSimulation(stadium, matchStage);

  return (
    <div className={`${styles.appContainer} fade-in`}>
      <TopBar />
      <NotificationCenter alerts={liveData?.alerts} />
      
      <main className={styles.mainContent}>
        <Hero />
        <WelcomeCard />
        
        <div className={styles.selectors}>
          <RoleSelector role={role} setRole={setRole} />
          <MatchSelector 
            stadium={stadium} 
            setStadium={setStadium} 
            matchStage={matchStage} 
            setMatchStage={setMatchStage} 
          />
        </div>
        
        <DailyBriefing role={role} stadium={stadium} matchStage={matchStage} />
        
        <SmartDashboard role={role} stadium={stadium} matchStage={matchStage} />
        
        <LiveOperations 
          role={role} 
          stadium={stadium} 
          matchStage={matchStage} 
          liveData={liveData}
          timelineEvents={timelineEvents}
        />

        <Suspense fallback={<div className="skeleton-loader" style={{ height: '400px', width: '100%', borderRadius: '16px' }}></div>}>
          <MatchDayCompanion role={role} stadium={stadium} matchStage={matchStage} />
        </Suspense>

        <AIChat role={role} stadium={stadium} matchStage={matchStage} />
      </main>
      <Footer />

      <Suspense fallback={null}>
        <EmergencyAssistant role={role} stadium={stadium} matchStage={matchStage} />
      </Suspense>
    </div>
  );
};

export default App;
