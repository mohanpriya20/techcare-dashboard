import axios from 'axios';

const API_BASE_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';

// Create axios instance with Basic Auth
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME || 'coalition',
    password: import.meta.env.VITE_API_PASSWORD || 'skills-test'
  }
});

export const fetchPatients = async () => {
  try {
    const response = await apiClient.get('/patients');
    return response.data;
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};

export const fetchPatientById = async (id) => {
  try {
    const response = await apiClient.get(`/patients/${id}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
}; 