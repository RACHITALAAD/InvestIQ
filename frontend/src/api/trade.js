import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002/api/trade",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const buyStock = (data) => {
  return API.post("/buy", data);
};

export const sellStock = (data) => {
  return API.post("/sell", data);
};
