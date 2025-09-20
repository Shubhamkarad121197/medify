// src/services/api.js
const API_BASE_URL = 'https://meddata-backend.onrender.com';

export const getStates = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/states`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching states:", error);
    return [];
  }
};

export const getCitiesByState = async (stateName) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cities/${stateName}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching cities for ${stateName}:`, error);
    return [];
  }
};

export const getMedicalCenters = async (state, city) => {
  try {
    const response = await fetch(`${API_BASE_URL}/data?state=${state}&city=${city}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching medical centers:", error);
    return [];
  }
};