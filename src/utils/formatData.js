// formatData.js
export const formatUserActivity = (sessions) => {
  return sessions.map((session, index) => ({
    day: index + 1,
    Kilogram: session.kilogram,
    Calories: session.calories,
  }));
};

export const getYAxisDomainActivity = (data) => {
  const kilograms = data.map((session) => session.kilogram);
  const minKilogram = Math.min(...kilograms);
  const maxKilogram = Math.max(...kilograms);
  return [minKilogram - 1, maxKilogram + 1];
};

export const formatUserSessions = (sessions) => {
  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

  return sessions.map((session) => ({
    day: daysOfWeek[session.day - 1],
    SessionLength: session.sessionLength,
  }));
};

export const formatUserPerformance = (userData) => {
  const translations = {
    intensity: "Intensité",
    speed: "Vitesse",
    strength: "Force",
    endurance: "Endurance",
    energy: "Énergie",
    cardio: "Cardio",
  };

  const order = [
    "intensity",
    "speed",
    "strength",
    "endurance",
    "energy",
    "cardio",
  ];

  let formattedData = userData.data.map((item) => ({
    subject: userData.kind[item.kind],
    Value: item.value,
    TranslatedSubject: translations[userData.kind[item.kind]],
  }));

  formattedData = formattedData.sort(
    (a, b) => order.indexOf(a.subject) - order.indexOf(b.subject)
  );

  return formattedData;
};

export const formatUserScoreData = (userData) => {
  const userScore = userData.todayScore || userData.score || 0;
  const total = 1;
  const userScoreValue = total * userScore;

  const chartData = [
    {
      name: `${(userScore * 100).toFixed(0)}% Segment`,
      value: userScoreValue,
    },
    { name: "Other", value: total - userScoreValue },
  ];

  return { chartData, userScore };
};
