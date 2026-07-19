import React, { useState, useEffect } from 'react';
import { FaSun, FaParking, FaWalking, FaStore } from 'react-icons/fa';
import styles from '../../styles/Companion.module.css';

const DailyBriefing = ({ role, stadium, matchStage }) => {
  const [brief, setBrief] = useState(null);

  useEffect(() => {
    if (role && stadium && matchStage) {
      // Simulate Gemini generating a brief based on context
      const newBrief = {
        greeting: `Good afternoon.`,
        intro: `You are attending the match at ${stadium}.`,
        attendance: '82,500',
        weather: 'Clear, 22°C',
        parking: 'Almost Full',
        recommendation: 'Metro is highly recommended.',
        gate: 'Gate 3 has the shortest queue.',
        arrival: 'Suggested arrival: 16:30',
        food: 'Food Court C currently has the lowest waiting time.'
      };
      setBrief(newBrief);
    } else {
      setBrief(null);
    }
  }, [role, stadium, matchStage]);

  if (!brief) return null;

  return (
    <div className={`glass-card ${styles.card} fade-in`} style={{ width: '100%', maxWidth: '1000px', margin: '0 auto 2rem auto', borderLeft: '4px solid var(--color-accent-blue)' }}>
      <div className={styles.cardHeader} style={{ fontSize: '1.5rem', color: 'var(--color-accent-blue)' }}>
        ✨ Today's Match Brief
      </div>
      <div className={styles.cardBody} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-white)' }}>
          {brief.greeting} {brief.intro}
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><FaSun size={20} color="#fbbf24" /></div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Weather</div>
              <div style={{ color: 'var(--color-white)', fontWeight: '600' }}>{brief.weather}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><FaParking size={20} color="#ef4444" /></div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Parking</div>
              <div style={{ color: 'var(--color-white)', fontWeight: '600' }}>{brief.parking}</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><FaWalking size={20} color="#34d399" /></div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Entry</div>
              <div style={{ color: 'var(--color-white)', fontWeight: '600' }}>{brief.gate}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><FaStore size={20} color="var(--color-accent-blue)" /></div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Food & Beverage</div>
              <div style={{ color: 'var(--color-white)', fontWeight: '600' }}>{brief.food}</div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', color: 'var(--color-white)' }}>
          <strong>💡 AI Tip:</strong> {brief.recommendation} {brief.arrival}.
        </div>
      </div>
    </div>
  );
};

export default DailyBriefing;
