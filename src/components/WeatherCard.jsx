import React from 'react';
import { FaCloudSun, FaCloudRain, FaSun, FaWind, FaTint } from 'react-icons/fa';
import styles from '../styles/Dashboard.module.css';

const WeatherCard = ({ matchData }) => {
  const { weather } = matchData;
  
  const getWeatherIcon = (condition) => {
    if (condition.includes('Rain')) return <FaCloudRain size={40} color="#60a5fa" />;
    if (condition.includes('Cloudy')) return <FaCloudSun size={40} color="#fcd34d" />;
    return <FaSun size={40} color="#fbbf24" />;
  };

  return (
    <div className={`${styles.card} glass-card`}>
      <div className={styles.cardHeader}>
        <FaCloudSun className={styles.cardIcon} />
        Match Day Weather
      </div>
      <div className={styles.cardBody} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          {getWeatherIcon(weather.condition)}
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-white)' }}>{weather.temp}</span>
          <span style={{ fontSize: '0.85rem' }}>{weather.condition}</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, paddingLeft: '1.5rem' }}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaTint /> Rain Chance
            </span>
            <span className={styles.infoValue}>{weather.rain}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaWind /> Wind
            </span>
            <span className={styles.infoValue}>{weather.wind}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WeatherCard);
