import React from 'react';
import styles from '../styles/TopBar.module.css';

const TopBar = () => {
  return (
    <header className={`${styles.topbar} glass-card fade-in`}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>🏟</span>
        <span className={styles.logoText}>StadiumGPT</span>
      </div>
      
      <div className={styles.languageSelector}>
        <select className={styles.dropdown} defaultValue="English">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="Hindi">Hindi</option>
          <option value="Arabic">Arabic</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Japanese">Japanese</option>
        </select>
      </div>
    </header>
  );
};

export default TopBar;
