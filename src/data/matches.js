export const MATCHES = {
  "Opening Match": {
    kickoff: "15:00 Local",
    gateOpening: "11:00 Local",
    expectedAttendance: "100%",
    crowdLevel: "Very High",
    crowdPercentage: 95,
    weather: { temp: "28°C", condition: "Sunny", rain: "0%", wind: "10 km/h" },
    alerts: [
      { type: "warning", message: "Heavy traffic near stadium" },
      { type: "info", message: "Opening ceremony begins at 13:30" }
    ]
  },
  "Group Stage": {
    kickoff: "18:00 Local",
    gateOpening: "15:00 Local",
    expectedAttendance: "85%",
    crowdLevel: "High",
    crowdPercentage: 82,
    weather: { temp: "24°C", condition: "Partly Cloudy", rain: "10%", wind: "15 km/h" },
    alerts: [
      { type: "success", message: "Metro operating normally" },
      { type: "warning", message: "Gate 3 busy, use Gate 4" }
    ]
  },
  "Round of 16": {
    kickoff: "20:00 Local",
    gateOpening: "17:00 Local",
    expectedAttendance: "90%",
    crowdLevel: "High",
    crowdPercentage: 88,
    weather: { temp: "22°C", condition: "Clear", rain: "5%", wind: "12 km/h" },
    alerts: [
      { type: "success", message: "Food court wait under 5 min" }
    ]
  },
  "Quarter Final": {
    kickoff: "20:00 Local",
    gateOpening: "17:00 Local",
    expectedAttendance: "95%",
    crowdLevel: "Very High",
    crowdPercentage: 92,
    weather: { temp: "20°C", condition: "Light Rain", rain: "60%", wind: "18 km/h" },
    alerts: [
      { type: "danger", message: "Parking almost full" },
      { type: "warning", message: "Rain expected, ponchos allowed" }
    ]
  },
  "Semi Final": {
    kickoff: "21:00 Local",
    gateOpening: "17:30 Local",
    expectedAttendance: "98%",
    crowdLevel: "Very High",
    crowdPercentage: 97,
    weather: { temp: "25°C", condition: "Clear", rain: "0%", wind: "8 km/h" },
    alerts: [
      { type: "danger", message: "Security queues > 20 mins" },
      { type: "warning", message: "Arrive early" }
    ]
  },
  "Final": {
    kickoff: "19:00 Local",
    gateOpening: "14:00 Local",
    expectedAttendance: "100%",
    crowdLevel: "Maximum",
    crowdPercentage: 100,
    weather: { temp: "26°C", condition: "Clear", rain: "0%", wind: "5 km/h" },
    alerts: [
      { type: "danger", message: "Parking FULL" },
      { type: "warning", message: "Transport extremely busy" },
      { type: "info", message: "Closing ceremony at 17:30" }
    ]
  }
};
