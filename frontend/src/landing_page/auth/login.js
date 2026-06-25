import React, { useState } from "react";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user" , JSON.stringify(response.data.user));
      
      setMessage("Login Successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="bg-white shadow rounded-4 p-5"
        style={{ width: "100%", maxWidth: "450px" }}
      >
        <h2 className="fw-bold text-center mb-2" style={{ color: "#008080" }}>
          InvestIQ
        </h2>

        <p className="text-center text-muted mb-4">
          Welcome! back to your investment dashboard
        </p>

        {message && (
          <div className="alert alert-info text-center">{message}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>

            <input
              type="email"
              name="email"
              className="form-control py-2"
              placeholder="Enter your email....."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>

            <input
              type="password"
              name="password"
              className="form-control py-2"
              placeholder="Enter your password...."
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100 fw-semibold"
            style={{
              backgroundColor: "#008080",
              color: "white",
              border: "none",
              padding: "10px",
            }}
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ color: "#008080", cursor: "pointer", fontWeight: "600" }}
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
