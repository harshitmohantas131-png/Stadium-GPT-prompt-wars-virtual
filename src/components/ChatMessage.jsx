import React from 'react';
import styles from '../styles/ChatMessage.module.css';
import { BsStars } from 'react-icons/bs';
import { FaUser, FaCompass, FaCloudSun, FaTrain, FaWheelchair, FaUtensils, FaShieldAlt } from 'react-icons/fa';

const ChatMessage = ({ message }) => {
  const isAi = message.role === 'model';
  
  // Keyword detection for Smart Response Icons
  const textLower = message.text.toLowerCase();
  const showCompass = textLower.includes('navigate') || textLower.includes('direction') || textLower.includes('route') || textLower.includes('gate');
  const showWeather = textLower.includes('weather') || textLower.includes('rain') || textLower.includes('sun');
  const showTransport = textLower.includes('transport') || textLower.includes('metro') || textLower.includes('bus') || textLower.includes('park');
  const showAccessibility = textLower.includes('wheelchair') || textLower.includes('accessib') || textLower.includes('elevator');
  const showFood = textLower.includes('food') || textLower.includes('eat') || textLower.includes('restaurant') || textLower.includes('concession');
  const showSafety = textLower.includes('safe') || textLower.includes('secur') || textLower.includes('emergenc');

  return (
    <div className={`${styles.messageWrapper} ${isAi ? styles.aiWrapper : styles.userWrapper}`}>
      {isAi && (
        <div className={styles.avatar}>
          <BsStars />
        </div>
      )}
      
      <div className={`${styles.bubble} ${isAi ? styles.aiBubble : styles.userBubble}`}>
        {isAi && !message.isError && (
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', color: '#60a5fa' }}>
            {showCompass && <FaCompass title="Directions" />}
            {showWeather && <FaCloudSun title="Weather" />}
            {showTransport && <FaTrain title="Transport" />}
            {showAccessibility && <FaWheelchair title="Accessibility" />}
            {showFood && <FaUtensils title="Food" />}
            {showSafety && <FaShieldAlt title="Safety" />}
          </div>
        )}
        {/* Render simple markdown/linebreaks by splitting \n */}
        {message.text.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i !== message.text.split('\n').length - 1 && <br />}
          </span>
        ))}
        <div className={styles.timestamp}>
          {message.timestamp}
        </div>
      </div>
      
      {!isAi && (
        <div className={styles.avatar}>
          <FaUser />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
