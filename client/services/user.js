import api from "./apiConfig";

export const getUser = async (id) => {
  try {
    const res = await api.get(`/api/user/${id}`);
    const user = res.data;
    return user;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (credentials) => {
  try {
    const res = await api.post("/api/auth/register/", credentials);
    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    const user = res.data.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const res = await api.post("/api/auth/login/", credentials);
    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    const user = res.data.user;
    return user;
  } catch (error) {
    return error;
  }
};

export const refreshToken = async () => {
  const refresh = localStorage.getItem("refresh");
  if (refresh) {
    const res = await api.post("/api/auth/refresh/", { refresh: refresh });
    return res.data;
  }
  return false;
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    return true;
  } catch (error) {
    throw error;
  }
};
