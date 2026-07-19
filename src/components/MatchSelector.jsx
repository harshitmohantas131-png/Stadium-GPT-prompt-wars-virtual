import React from 'react';
import styles from '../styles/Selector.module.css';

const MatchSelector = ({ stadium, setStadium, matchStage, setMatchStage }) => {
  return (
    <div className={`${styles.card} glass-card fade-in`} style={{ animationDelay: '0.8s' }}>
      <h3 className={styles.title}>Match Details</h3>
      
      <div className={styles.selectWrapper}>
        <select 
          className={styles.dropdown}
          value={stadium}
          onChange={(e) => setStadium(e.target.value)}
        >
          <option value="" disabled>Choose Stadium</option>
          <option value="MetLife Stadium">MetLife Stadium</option>
          <option value="SoFi Stadium">SoFi Stadium</option>
          <option value="AT&T Stadium">AT&T Stadium</option>
          <option value="Mercedes-Benz Stadium">Mercedes-Benz Stadium</option>
          <option value="BC Place">BC Place</option>
          <option value="Estadio Azteca">Estadio Azteca</option>
        </select>
      </div>

      <div className={styles.selectWrapper}>
        <select 
          className={styles.dropdown}
          value={matchStage}
          onChange={(e) => setMatchStage(e.target.value)}
        >
          <option value="" disabled>Choose Match</option>
          <option value="Opening Match">Opening Match</option>
          <option value="Group Stage">Group Stage</option>
          <option value="Round of 16">Round of 16</option>
          <option value="Quarter Final">Quarter Final</option>
          <option value="Semi Final">Semi Final</option>
          <option value="Final">Final</option>
        </select>
      </div>
    </div>
  );
};

export default MatchSelector;
