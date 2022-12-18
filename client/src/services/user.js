import api from "./apiConfig";
import jwtDecode from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("auth/getUser", async () => {
  try {
    const decoded = jwtDecode(localStorage.getItem("token"));
    const id = decoded.user_id;
    const { data } = await api.get(`/api/user/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
});

export const signUp = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await api.post(`/api/auth/register/`, credentials);
    localStorage.setItem("token", data.access);
    localStorage.setItem("refresh", data.refresh);
    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
});

export const signIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await api.post("/api/auth/login/", credentials);
    localStorage.setItem("token", data.access);
    localStorage.setItem("refresh", data.refresh);
    return data;
  } catch (error) {
    alert("Invalid Username or password");
    throw error;
  }
});

export const refreshToken = async () => {
  const refresh = localStorage.getItem("refresh");
  if (refresh) {
    const res = await api.post("/api/auth/refresh/", { refresh: refresh });
    return res.data;
  }
  return false;
};
