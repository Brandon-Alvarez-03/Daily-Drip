import api from "./apiConfig.js";

export const getDays = async () => {
  try {
    const response = await api.get("/api/days/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDay = async (id) => {
  try {
    const response = await api.get(`/api/days/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createDay = async (DayData) => {
  try {
    const response = await api.post("/api/days/", DayData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateDay = async (id, DayData) => {
  try {
    const response = await api.put(`/api/days/${id}/`, DayData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDay = async (id) => {
  try {
    const response = await api.delete(`/api/days/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};