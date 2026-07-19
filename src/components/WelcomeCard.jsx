import React from 'react';
import { BsStars } from 'react-icons/bs';
import styles from '../styles/WelcomeCard.module.css';

const WelcomeCard = () => {
  const handleScroll = () => {
    const section = document.getElementById('ai-placeholder');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${styles.card} glass-card fade-in`} style={{ animationDelay: '0.4s' }}>
      <div className={styles.badge}>
        <BsStars /> Powered by Gemini AI
      </div>
      
      <h2 className={styles.title}>Welcome to StadiumGPT</h2>
      
      <p className={styles.description}>
        Your personal intelligent guide to everything happening inside and outside the stadium. 
        Whether you're looking for your seat, the nearest concessions, or translation of live 
        announcements, StadiumGPT is here to help.
      </p>
      
      <button className={styles.primaryButton} onClick={handleScroll}>
        Start AI Assistant
      </button>
    </div>
  );
};

export default WelcomeCard;
