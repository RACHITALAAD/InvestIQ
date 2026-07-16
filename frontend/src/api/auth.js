import axios from "axios";

const API = axios.create({
  baseURL: "https://investiq-backend-nr86.onrender.com/api/auth",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const signupUser = (data) => {
  return API.post("/signup", data);
};

export const loginUser = (data) => {
  return API.post("/login", data);
};

export const getProfile = (token) => {
  return API.get("/profile");
};
