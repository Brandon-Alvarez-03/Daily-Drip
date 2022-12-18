import { createSlice } from "@reduxjs/toolkit";
import { getUser, signUp, signIn, } from "../../services/user";

const token = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  token,
  error: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      state.loading = false;
      state.userInfo = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.token = payload.access;
    },
    [signIn.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = "error";
    },
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.token = payload.access;
    },
    [signUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = "error";
    },
    [getUser.pending]: (state) => {
      state.loading = true
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = "error";
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
