import React, { useState, useEffect } from 'react';
import { FaBell, FaTimes, FaExclamationCircle } from 'react-icons/fa';
import styles from '../../styles/Notification.module.css';

const NotificationCenter = ({ alerts = [] }) => {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (alerts.length > 0) {
      // Find new alerts not already in notifications
      const newAlerts = alerts.filter(a => !notifications.find(n => n.id === a.id));
      if (newAlerts.length > 0) {
        setNotifications(prev => [...newAlerts, ...prev].slice(0, 5)); // Keep latest 5
        if (!isOpen) {
          setUnreadCount(prev => prev + newAlerts.length);
        }
      }
    }
  }, [alerts]);

  // Auto dismiss after 10s if open
  useEffect(() => {
    if (isOpen && notifications.length > 0) {
      const timer = setTimeout(() => {
        setNotifications(prev => prev.slice(1));
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, notifications]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setUnreadCount(0);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className={styles.notificationContainer}>
      <button 
        className={styles.bellButton} 
        onClick={toggleOpen}
        aria-label="Toggle notifications"
      >
        <FaBell />
        {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
      </button>

      {isOpen && (
        <div className={styles.notificationsList} role="region" aria-label="Notifications">
          {notifications.map(notif => (
            <div key={notif.id} className={`${styles.notificationCard} ${styles[notif.priority]}`}>
              <FaExclamationCircle className={styles.icon} color={notif.priority === 'Critical' ? '#ef4444' : 'var(--color-accent-blue)'} />
              <div className={styles.content}>
                <span className={styles.title}>{notif.priority} Alert</span>
                <span className={styles.message}>{notif.text}</span>
              </div>
              <button 
                className={styles.closeBtn} 
                onClick={() => removeNotification(notif.id)}
                aria-label="Dismiss notification"
              >
                <FaTimes />
              </button>
            </div>
          ))}
          {notifications.length === 0 && (
            <div className={styles.notificationCard}>
              <div className={styles.content}>
                <span className={styles.message}>No new notifications.</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
