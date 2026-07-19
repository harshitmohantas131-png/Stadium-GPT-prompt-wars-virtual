import { useState, useEffect } from 'react';

const generateRandomFluctuation = (base, variance) => {
  return Math.max(0, Math.floor(base + (Math.random() * variance * 2) - variance));
};

export const useSimulation = (stadium, matchStage) => {
  const [liveData, setLiveData] = useState({
    health: 'Normal', // Normal, Busy, Critical
    capacity: 45000,
    queueLevel: 'Low',
    gatesAvailable: 12,
    securityStatus: 'Clear',
    transportStatus: 'Smooth',
    crowdHeatmap: {
      North: 'Green',
      South: 'Green',
      East: 'Yellow',
      West: 'Green',
      VIP: 'Green',
      FanZone: 'Orange'
    },
    alerts: [],
    recommendations: [],
    currentEventIndex: 0
  });

  const timelineEvents = [
    { time: '14:00', event: 'Security Check Begins' },
    { time: '15:00', event: 'Fan Zone Opens' },
    { time: '16:30', event: 'Opening Ceremony' },
    { time: '18:00', event: 'Teams Warm-up' },
    { time: '19:00', event: 'Kickoff' }
  ];

  useEffect(() => {
    // Initial state based on match stage
    let baseCapacity = 10000;
    if (matchStage === 'pre-match') baseCapacity = 30000;
    if (matchStage === 'in-game') baseCapacity = 65000;
    if (matchStage === 'post-match') baseCapacity = 40000;

    const runSimulation = () => {
      setLiveData(prev => {
        const newCapacity = generateRandomFluctuation(baseCapacity, 5000);
        
        let health = 'Normal';
        let queueLevel = 'Low';
        let securityStatus = 'Clear';
        let transportStatus = 'Smooth';
        
        const heatmap = {
          North: 'Green', South: 'Green', East: 'Green', West: 'Green', VIP: 'Green', FanZone: 'Green'
        };

        if (newCapacity > 60000) {
          health = 'Critical';
          queueLevel = 'High';
          securityStatus = 'Elevated';
          heatmap.North = 'Red';
          heatmap.FanZone = 'Red';
        } else if (newCapacity > 40000) {
          health = 'Busy';
          queueLevel = 'Medium';
          heatmap.North = 'Orange';
          heatmap.FanZone = 'Orange';
        }

        if (Math.random() > 0.8) transportStatus = 'Delayed';

        // Generate random alerts based on conditions
        const newAlerts = [];
        if (newCapacity > 55000) {
          newAlerts.push({ id: Math.random(), priority: 'Critical', text: 'Heavy Crowd at Gate 7', action: 'Divert to Gate 5', timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) });
        }
        if (transportStatus === 'Delayed') {
          newAlerts.push({ id: Math.random(), priority: 'Medium', text: 'Metro Delay on Red Line', action: 'Use alternative transport', timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) });
        }
        if (Math.random() > 0.8) {
          newAlerts.push({ id: Math.random(), priority: 'High', text: 'Medical Assistance Requested in South Stand', action: 'Dispatch Medics', timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) });
        }
        if (newAlerts.length === 0) {
          newAlerts.push({ id: Math.random(), priority: 'Low', text: 'All systems nominal', action: 'Monitor casually', timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) });
        }

        // Generate Recommendations
        const newRecommendations = [];
        if (queueLevel === 'High') {
          newRecommendations.push({ id: Math.random(), text: 'Move toward Gate 3 for faster entry.' });
        }
        if (transportStatus === 'Delayed') {
          newRecommendations.push({ id: Math.random(), text: 'Take Metro instead of Parking due to congestion.' });
        } else {
          newRecommendations.push({ id: Math.random(), text: 'Metro is currently the fastest arrival option.' });
        }
        if (heatmap.FanZone === 'Red' || heatmap.FanZone === 'Orange') {
          newRecommendations.push({ id: Math.random(), text: 'Food Court C has the shortest waiting time.' });
        }

        return {
          health,
          capacity: newCapacity,
          queueLevel,
          gatesAvailable: Math.max(4, 12 - Math.floor(newCapacity / 10000)),
          securityStatus,
          transportStatus,
          crowdHeatmap: heatmap,
          alerts: newAlerts,
          recommendations: newRecommendations,
          currentEventIndex: (prev.currentEventIndex + 1) % timelineEvents.length
        };
      });
    };

    runSimulation(); // Run initially
    const interval = setInterval(runSimulation, 15000);

    return () => clearInterval(interval);
  }, [stadium, matchStage]);

  return { liveData, timelineEvents };
};
