// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Backend-URL

export const createAppointment = async (name, email, date) => {
  try {
    const response = await axios.post(`${API_URL}/appointments/create`, {
      name,
      email,
      date,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

export const getAppointments = async () => {
  try {
    const response = await axios.get(`${API_URL}/appointments/all`);
    return response.data.appointments;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
};

export const cancelAppointment = async (id) => {
  try {
    const response = await axios.put(`${API_URL}/appointments/cancel/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error canceling appointment:', error);
    throw error;
  }
};
