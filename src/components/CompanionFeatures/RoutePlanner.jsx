import React, { useState, useEffect } from 'react';
import { FaWalking, FaSubway, FaBusAlt, FaTaxi } from 'react-icons/fa';
import styles from '../../styles/Companion.module.css';

const RoutePlanner = ({ role, stadium, matchStage }) => {
  const [aiRecommendation, setAiRecommendation] = useState("");

  const routes = [
    { id: 1, type: 'Walking', icon: <FaWalking size={20} />, time: '15 mins', crowd: 'Low', distance: '1.2 km', cost: 'Free', badge: '🌱 Eco Friendly', badgeClass: 'badgeEco' },
    { id: 2, type: 'Metro', icon: <FaSubway size={20} />, time: '5 mins', crowd: 'High', distance: '3 Stops', cost: '$2.50', badge: '⭐ Fastest', badgeClass: 'badgeFastest' },
    { id: 3, type: 'Bus', icon: <FaBusAlt size={20} />, time: '20 mins', crowd: 'Medium', distance: '4 km', cost: '$1.50', badge: '♿ Accessible', badgeClass: 'badgeAccessible' },
    { id: 4, type: 'Taxi', icon: <FaTaxi size={20} />, time: '12 mins', crowd: 'Low', distance: '4.5 km', cost: '$15.00', badge: '🚗 Parking Available', badgeClass: 'badgeParking' }
  ];

  useEffect(() => {
    // Simulated Gemini AI Call based on context
    const generateAiExplanation = () => {
      let rec = "Based on current stadium conditions, the Metro is the fastest option. ";
      if (role === 'volunteer') {
        rec = "As a volunteer needing early access, taking the Metro ensures you arrive before the main crowd surge.";
      } else if (matchStage === 'post-match') {
        rec = "With the post-match crowd surge, Walking is highly recommended to avoid the massive queues at the Metro station.";
      } else {
        rec = `For your trip to ${stadium || 'the stadium'}, we recommend the Metro due to current parking congestion. It is the fastest and most efficient option right now.`;
      }
      setAiRecommendation(rec);
    };

    generateAiExplanation();
  }, [role, stadium, matchStage]);

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <span style={{ fontSize: '1.2rem' }}>🧭</span>
        AI Route Planner
      </div>
      <div className={styles.cardBody}>
        <div className={styles.routeGrid}>
          {routes.map(route => (
            <div key={route.id} className={styles.routeCard}>
              <div className={styles.routeName}>
                {route.icon} {route.type}
              </div>
              <div className={styles.routeDetail}>
                <span>Time:</span> <span>{route.time}</span>
              </div>
              <div className={styles.routeDetail}>
                <span>Distance:</span> <span>{route.distance}</span>
              </div>
              <div className={styles.routeDetail}>
                <span>Crowd:</span> <span>{route.crowd}</span>
              </div>
              <div className={styles.routeDetail}>
                <span>Cost:</span> <span>{route.cost}</span>
              </div>
              <div style={{ marginTop: 'auto' }}>
                <span className={`${styles.badge} ${styles[route.badgeClass]}`}>
                  {route.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.aiExplanation}>
          <strong>✨ AI Recommendation:</strong> {aiRecommendation}
        </div>
      </div>
    </div>
  );
};

export default React.memo(RoutePlanner);
