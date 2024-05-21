const ENDPOINT = "http://localhost:3000";

export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${ENDPOINT}/user/${userId}`);
    if (!response.ok) {
      console.error("Erreur lors de la récupération des données utilisateur");
      return { userInfos: { firstName: "Guest" } };
    }
    const userData = await response.json();
    return userData.data;
  } catch (error) {
    console.error("Erreur de réseau ou autre", error);
    return { userInfos: { firstName: "Guest" } };
  }
};

export const fetchUserActivity = async (userId) => {
  try {
    const response = await fetch(`${ENDPOINT}/user/${userId}/activity`);
    if (!response.ok) {
      console.error("Erreur lors de la récupération des données d'activité");
      return null;
    }
    const activityData = await response.json();
    return activityData.data;
  } catch (error) {
    console.error("Erreur de réseau ou autre", error);
    return null;
  }
};

export const fetchUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${ENDPOINT}/user/${userId}/performance`);
    if (!response.ok) {
      console.error(
        "Erreur lors de la récupération des données de performance"
      );
      return null;
    }
    const performanceData = await response.json();
    return performanceData.data;
  } catch (error) {
    console.error("Erreur de réseau ou autre", error);
    return null;
  }
};

export const fetchUserSessions = async (userId) => {
  try {
    const response = await fetch(`${ENDPOINT}/user/${userId}/average-sessions`);
    if (!response.ok) {
      console.error(
        "Erreur lors de la récupération des données de sessions moyennes"
      );
      return null;
    }
    const sessionData = await response.json();
    return sessionData.data;
  } catch (error) {
    console.error("Erreur de réseau ou autre", error);
    return null;
  }
};
