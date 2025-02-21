import axios from "axios";

const API_URL = "http://localhost:8080";

export const getClubs = async () => {
  try {
    const response = await axios.get(`${API_URL}/clubs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching clubs:", error);
    throw error;
  }
};

export const getMatches = async () => {
  try {
    const response = await axios.get(`${API_URL}/matches`);
    return response.data;
  } catch (error) {
    console.error("Error fetching matches:", error);
    throw error;
  }
};

export const getCompetitions = async () => {
  try {
    const response = await axios.get(`${API_URL}/competitions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching competitions:", error);
    throw error;
  }
};

export const addClub = async (club) => {
  try {
    const response = await axios.post(`${API_URL}/clubs`, club);
    return response.data;
  } catch (error) {
    console.error("Error creating club:", error);
    throw error;
  }
};

export const addMatch = async (match) => {
  try {
    const response = await axios.post(`${API_URL}/matches`, match);
    return response.data;
  } catch (error) {
    console.error("Error creating match:", error);
    throw error;
  }
};

export const addCompetition = async (competition) => {
  try {
    const response = await axios.post(`${API_URL}/competitions`, competition);
    return response.data;
  } catch (error) {
    console.error("Error creating competition:", error);
    throw error;
  }
};

export const calculateWinner = async (competitionId) => {
  try {
    const response = await axios.put(
      `${API_URL}/competitions/${competitionId}/winner/calculate`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to calculate winner:", error);
    throw error;
  }
};

export const deleteClub = async (id) => {
  await axios.delete(`${API_URL}/clubs/${id}`);
};
