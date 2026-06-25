import React from "react";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  console.log("ProtectedRoute Token:", token);

  if (!token) {
    console.log("No token found. Redirecting...");
    window.location.href = "http://localhost:3000/login";
    return null;
  }

  console.log("Token found. Rendering dashboard...");
  return children;
}

export default ProtectedRoute;