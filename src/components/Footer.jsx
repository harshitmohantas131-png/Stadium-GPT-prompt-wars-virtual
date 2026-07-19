import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} fade-in`} style={{ animationDelay: '1s' }}>
      <div className={styles.content}>
        <h4 className={styles.title}>StadiumGPT</h4>
        
        <div className={styles.links}>
          <span>Built with React + Vite</span>
          <span className={styles.dot}>•</span>
          <span>Powered by Gemini AI</span>
        </div>
        
        <div className={styles.bottomText}>
          <p>Google Prompt Wars 2026</p>
          <p>Made with ❤️ for FIFA World Cup fans.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
