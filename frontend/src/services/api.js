import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const getTrends = async (industry) => {
  const response = await axios.get(`${API_URL}/get_trends?industry=${industry}`);
  return response.data;
};

export const addTrend = async (data) => {
  const response = await axios.post(`${API_URL}/add_trend`, data);
  return response.data;
};
