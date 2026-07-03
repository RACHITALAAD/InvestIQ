import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3002/api/funds",
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");

    if(token){
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export const getFunds = () => API.get("/");
export const updateFunds = (data) => API.put("/" , data);