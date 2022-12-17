import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://127.0.0.1:8000/"
      : "http://127.0.0.1:8000/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;