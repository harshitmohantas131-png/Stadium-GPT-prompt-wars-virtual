import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import EmergencyCard from './EmergencyCard';
import styles from '../../styles/Emergency.module.css';

const EMERGENCY_OPTIONS = [
  { id: 'lost_child', icon: '🧒', label: 'Lost Child' },
  { id: 'medical', icon: '❤️', label: 'Medical Emergency' },
  { id: 'fire', icon: '🔥', label: 'Fire / Smoke' },
  { id: 'security', icon: '🚓', label: 'Security Threat' },
  { id: 'exit', icon: '🚪', label: 'Emergency Exit' },
  { id: 'accessibility', icon: '♿', label: 'Accessibility Help' },
];

const EmergencyModal = ({ isOpen, onClose, role, stadium, matchStage }) => {
  const [activeType, setActiveType] = useState(null);
  const [guidance, setGuidance] = useState([]);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Focus trapping & Escape to close
  useEffect(() => {
    if (!isOpen) return;
    
    // Focus the first element (close button) when opened
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      
      // Simple focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleOptionClick = (option) => {
    setActiveType(option.label);
    
    // Simulated Gemini Generation
    let newGuidance = [];
    if (option.id === 'lost_child') {
      newGuidance = [
        "Stay calm.",
        "Proceed to Family Assistance Center.",
        "Security has been notified.",
        `Nearest location: Gate ${stadium?.includes('Wembley') ? 'B' : '4'}.`
      ];
    } else if (option.id === 'medical') {
      newGuidance = [
        "Nearest First Aid: Section 112",
        "Estimated walking time: 2 minutes.",
        role === 'volunteer' ? "Retrieve AED from cabinet 4." : "Stay with the patient."
      ];
    } else if (option.id === 'fire') {
      newGuidance = [
        "Use Exit B.",
        "Do NOT use elevators.",
        "Follow illuminated evacuation signs."
      ];
    } else if (option.id === 'security') {
      newGuidance = [
        "Avoid Gate 7.",
        "Follow stadium announcements.",
        "Contact nearest steward."
      ];
    } else {
      newGuidance = [
        "Assistance has been requested.",
        "Stay where you are.",
        "A response team is en route."
      ];
    }
    setGuidance(newGuidance);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="emergency-modal-title">
      <div className={styles.modalContent} ref={modalRef}>
        <div className={styles.modalHeader}>
          <div>
            <h2 id="emergency-modal-title">🚨 AI Emergency Assistant</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
              Instant help for emergencies during match day.
            </p>
          </div>
          <button 
            className={styles.closeButton} 
            onClick={onClose} 
            ref={closeButtonRef}
            aria-label="Close emergency modal"
          >
            <FaTimes />
          </button>
        </div>

        <div className={styles.optionsGrid}>
          {EMERGENCY_OPTIONS.map(option => (
            <button 
              key={option.id} 
              className={styles.optionCard}
              onClick={() => handleOptionClick(option)}
              aria-label={`Get help for ${option.label}`}
            >
              <span className={styles.optionIcon} aria-hidden="true">{option.icon}</span>
              <span className={styles.optionLabel}>{option.label}</span>
            </button>
          ))}
        </div>

        {activeType && (
          <EmergencyCard type={activeType} guidance={guidance} />
        )}
      </div>
    </div>
  );
};

export default EmergencyModal;
