import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../assets/data/data.js";

const ENDPOINT = "http://localhost:3000";

/**
 * Détermine si l'application doit utiliser des données mock ou non.
 * @returns {boolean} Vrai si les données mock doivent être utilisées.
 */
const shouldUseMockData = () => process.env.REACT_APP_USE_MOCK_DATA === "true";
console.log("shouldUseMockData", shouldUseMockData());

/**
 * Récupère les données utilisateur pour un utilisateur donné.
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {object} Les données de l'utilisateur ou un objet par défaut en cas d'erreur.
 */
export const fetchUserData = async (userId) => {
  if (shouldUseMockData()) {
    return (
      USER_MAIN_DATA.find((user) => user.id === userId) || {
        userInfos: { firstName: "Guest" },
      }
    );
  }
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

/**
 * Récupère les données d'activité pour un utilisateur donné.
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {object|null} Les données d'activité de l'utilisateur ou null en cas d'erreur.
 */
export const fetchUserActivity = async (userId) => {
  if (shouldUseMockData()) {
    return USER_ACTIVITY.find((activity) => activity.userId === userId) || null;
  }
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

/**
 * Récupère les données de performance pour un utilisateur donné.
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {object|null} Les données de performance de l'utilisateur ou null en cas d'erreur.
 */
export const fetchUserPerformance = async (userId) => {
  if (shouldUseMockData()) {
    return (
      USER_PERFORMANCE.find((performance) => performance.userId === userId) ||
      null
    );
  }
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

/**
 * Récupère les données de sessions moyennes pour un utilisateur donné.
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {object|null} Les données de sessions moyennes de l'utilisateur ou null en cas d'erreur.
 */
export const fetchUserSessions = async (userId) => {
  if (shouldUseMockData()) {
    return (
      USER_AVERAGE_SESSIONS.find((sessions) => sessions.userId === userId) ||
      null
    );
  }
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
