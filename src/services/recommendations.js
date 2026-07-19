export const getRecommendations = (role, stadiumData, matchData) => {
  if (!stadiumData || !matchData) return [];
  
  const recs = [];
  
  if (matchData.crowdLevel === 'Maximum' || matchData.crowdLevel === 'Very High') {
    recs.push(`Arrive at least 2 hours before ${matchData.kickoff}`);
  }
  
  if (matchData.weather.rain !== '0%') {
    recs.push(`Rain expected (${matchData.weather.rain}). Ponchos are allowed.`);
  }

  if (role === 'Fan') {
    recs.push(`${stadiumData.nearestMetro} is recommended for transport`);
    recs.push(`Food Courts at ${stadiumData.foodCourts.split(',')[0]} have lower waiting times`);
  } else if (role === 'Security') {
    recs.push(`Gate 5 currently has the shortest queue`);
    recs.push(`Monitor North Plaza crowd density`);
  } else if (role === 'Volunteer') {
    recs.push(`Check in 30 mins before shift`);
  } else if (role === 'Venue Operator') {
    recs.push(`Review staff deployment for ${stadiumData.fanZone}`);
  }
  
  return recs.slice(0, 3); // Max 3 recommendations
};
