import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002/api/holdings",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getHoldings = () => {
  return API.get("/");
};
