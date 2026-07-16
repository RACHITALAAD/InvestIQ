import React, { useState } from "react";
import { signupUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await signupUser(formData);

      setSuccess(true);
      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setSuccess(false);
      setMessage(error.response?.data?.message || "Signup Failed");
    }finally{
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh"}}
    >
      <div
        className="bg-white shadow rounded-4 p-5"
        style={{ width: "100%", maxWidth: "450px",}}
      >
        <h2 className="fw-bold text-center mb-2" style={{ color: "#008080" }}>
          InvestIQ
        </h2>
        <p className="text-center text-muted mb-4">
          Create your account and start investing smarter.
        </p>

         {message && (
          <div
            className={`alert ${
              success ? "alert-success" : "alert-danger"
            } text-center`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control py-2"
              placeholder="Enter your username....."
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
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
              placeholder="Enter your password....."
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn w-100 fw-semibold"
            style={{
              backgroundColor: "#008080",
              color: "white",
              border: "none",
              padding: "10px",
            }}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{
              color: "#008080",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
