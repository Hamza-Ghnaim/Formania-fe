import axios from "axios";

const API_URL = "http://localhost:5000/auth";

export const register = async (userData: any) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const login = async (userData: any) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
