import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002/api/auth",
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
