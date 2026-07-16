import axios from "axios";

const API = axios.create({
  baseURL: "https://investiq-backend-nr86.onrender.com/api/orders",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getOrders = () => {
  return API.get("/");
};
