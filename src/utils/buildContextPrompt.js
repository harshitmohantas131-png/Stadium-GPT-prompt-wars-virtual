export const buildContext = (role, stadiumData, matchData) => {
  if (!stadiumData || !matchData) return "";

  return `
CURRENT DASHBOARD CONTEXT:
--------------------------
The user is currently a: ${role || 'Standard User'}
Selected Stadium: ${stadiumData.name} (${stadiumData.city})
Match Stage: ${matchData.kickoff ? 'Match Day' : 'Unknown'}

STADIUM INFO:
- Capacity: ${stadiumData.capacity}
- Parking: ${stadiumData.parkingAvailability}
- Nearest Metro: ${stadiumData.nearestMetro}
- Nearest Bus: ${stadiumData.nearestBus}
- Accessible Entrances: ${stadiumData.wheelchairEntrances}
- Food Courts: ${stadiumData.foodCourts}
- Medical: ${stadiumData.medicalCenter}
- Fan Zone: ${stadiumData.fanZone}

MATCH INFO:
- Kickoff: ${matchData.kickoff}
- Gate Opening: ${matchData.gateOpening}
- Crowd Level: ${matchData.crowdLevel} (${matchData.crowdPercentage}% full)
- Expected Attendance: ${matchData.expectedAttendance}
- Weather: ${matchData.weather.temp}, ${matchData.weather.condition}, ${matchData.weather.rain} rain chance, Wind ${matchData.weather.wind}

LIVE ALERTS:
${matchData.alerts ? matchData.alerts.map(a => `- [${a.type.toUpperCase()}] ${a.message}`).join('\n') : 'No active alerts.'}

Use this information seamlessly. DO NOT tell the user "I see from your dashboard..." or "Based on the context...". Just answer their questions using this data as your innate knowledge.
`;
};
