import React from 'react';
import styles from '../styles/Selector.module.css';

const RoleSelector = ({ role, setRole }) => {
  return (
    <div className={`${styles.card} glass-card fade-in`} style={{ animationDelay: '0.6s' }}>
      <h3 className={styles.title}>Who are you?</h3>
      
      <div className={styles.selectWrapper}>
        <select 
          className={styles.dropdown}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="" disabled>Select your role</option>
          <option value="Fan">Fan</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Security Staff">Security Staff</option>
          <option value="Venue Operator">Venue Operator</option>
        </select>
      </div>
    </div>
  );
};

export default RoleSelector;
