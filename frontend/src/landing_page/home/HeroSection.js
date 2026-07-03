import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/dashboard.png";

function HeroSection() {
  return (
    <section
      className="py-5"
      style={{
        background: "#F8FCFC",
      }}
    >
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left */}
          <div className="col-lg-6">
            <span
              className="badge rounded-pill px-3 py-2 mb-3"
              style={{
                background: "#E7F7F7",
                color: "#008080",
                fontWeight: "600",
              }}
            >
              Virtual Investment Platform
            </span>

            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "2rem",
                lineHeight: "1.25",
                color: "#1F2937",
              }}
            >
              Invest Smarter
              <br />
              Track Better
            </h1>

            <p
              className="text-muted mb-4"
              style={{
                maxWidth: "500px",
                fontSize: "1rem",
                lineHeight: "1.8",
              }}
            >
              Manage your portfolio, monitor holdings, and track your
              investments through a simple and intuitive dashboard.
            </p>

            <div className="d-flex gap-3">
              <Link
                to="/signup"
                className="btn px-4 py-2"
                style={{
                  background: "#008080",
                  color: "#fff",
                  border: "none",
                  fontWeight: "600",
                  borderRadius: "10px",
                }}
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="btn px-4 py-2"
                style={{
                  border: "2px solid #008080",
                  color: "#008080",
                  fontWeight: "600",
                  borderRadius: "10px",
                }}
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-6 text-center">
            <img
              src={heroImage}
              alt="InvestIQ Dashboard"
              className="img-fluid shadow-lg rounded-4"
              style={{
                maxWidth: "95%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
