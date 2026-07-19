import React from 'react';
import styles from '../styles/SuggestedPrompts.module.css';

const QUICK_ACTIONS = [
  "Navigate to my gate",
  "Nearest restroom",
  "Parking",
  "Metro",
  "Food nearby",
  "Accessibility",
  "Translate announcement",
  "Lost & Found",
  "Emergency",
  "Weather",
  "Crowd status"
];

const SuggestedPrompts = ({ onSelectPrompt }) => {
  return (
    <div className={styles.container}>
      {QUICK_ACTIONS.map((prompt, index) => (
        <button 
          key={index} 
          className={styles.chip}
          onClick={() => onSelectPrompt(prompt)}
          aria-label={`Ask: ${prompt}`}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestedPrompts;
