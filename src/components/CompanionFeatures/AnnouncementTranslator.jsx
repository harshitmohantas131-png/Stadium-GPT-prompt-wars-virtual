import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaCopy } from 'react-icons/fa';
import styles from '../../styles/Companion.module.css';

const AnnouncementTranslator = () => {
  const [language, setLanguage] = useState('Spanish');
  const [announcements, setAnnouncements] = useState([
    { id: 1, original: "Gate 7 is now open.", translated: "La puerta 7 ya está abierta." }
  ]);
  const streamRef = useRef(null);

  const mockAnnouncements = [
    { original: "Security screening has begun.", translations: { Spanish: "El control de seguridad ha comenzado.", French: "Le contrôle de sécurité a commencé.", Japanese: "セキュリティチェックが始まりました。" } },
    { original: "Please move away from the emergency exit.", translations: { Spanish: "Por favor, aléjese de la salida de emergencia.", French: "Veuillez vous éloigner de la sortie de secours.", Japanese: "非常口から離れてください。" } }
  ];

  useEffect(() => {
    // Simulate incoming live announcements every 20 seconds
    const interval = setInterval(() => {
      const nextMock = mockAnnouncements[Math.floor(Math.random() * mockAnnouncements.length)];
      const newAnnouncement = {
        id: Date.now(),
        original: nextMock.original,
        translated: nextMock.translations[language] || `[Translated to ${language}]: ${nextMock.original}`
      };
      
      setAnnouncements(prev => [...prev, newAnnouncement].slice(-5)); // Keep last 5
    }, 20000);

    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    // Re-translate current announcements when language changes
    setAnnouncements(prev => prev.map(a => {
      const mockMatch = mockAnnouncements.find(m => m.original === a.original);
      return {
        ...a,
        translated: mockMatch?.translations[language] || `[Translated to ${language}]: ${a.original}`
      };
    }));
  }, [language]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <span style={{ fontSize: '1.2rem' }}>🌍</span>
        Live Announcement Translator
      </div>
      <div className={styles.cardBody}>
        <select 
          className={styles.translatorSelect}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label="Select translation language"
        >
          {['English', 'Spanish', 'French', 'Portuguese', 'Arabic', 'Japanese', 'Hindi'].map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>

        <div className={styles.announcementStream} ref={streamRef}>
          {announcements.map(ann => (
            <div key={ann.id} className={styles.announcementItem}>
              <div className={styles.originalText}>{ann.original}</div>
              <div className={styles.translatedText}>✨ {ann.translated}</div>
              <div className={styles.actionRow}>
                <button className={styles.iconBtn} aria-label="Listen to translation">
                  <FaVolumeUp />
                </button>
                <button className={styles.iconBtn} onClick={() => handleCopy(ann.translated)} aria-label="Copy translation">
                  <FaCopy />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTranslator;
