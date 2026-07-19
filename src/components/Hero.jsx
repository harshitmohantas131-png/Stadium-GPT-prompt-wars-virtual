import React from 'react';
import { FaFutbol } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} fade-in`} style={{ animationDelay: '0.2s' }}>
      <div className={styles.iconContainer}>
        <BsStars className={`${styles.sparkleIcon} glow`} />
        <FaFutbol className={`${styles.footballIcon} glow`} />
      </div>
      
      <h1 className={styles.title}>StadiumGPT</h1>
      <h2 className={styles.subtitle}>Your AI Match Day Companion for FIFA World Cup 2026</h2>
      
      <p className={styles.description}>
        Experience smarter navigation, real-time crowd insights, multilingual assistance, 
        accessibility support, and AI-powered recommendations—all in one intelligent 
        stadium companion.
      </p>
    </section>
  );
};

export default Hero;
