import React from "react";
import logoImage from "../assets/logo2.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-white border-bottom sticky-top py-3"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div class="container">
        <Link
          class="navbar-brand d-flex align items-center fw-bold fs-4"
          to="/"
        >
          <img
            src={logoImage}
            alt="InvestIQ Logo Image"
            className="img"
            style={{ width: "48px", marginRight: "10px" }}
          />
          <span style={{ color: "#002855" }}>InvestIQ</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center gap-lg-4">
            <li class="nav-item">
              <Link class="nav-link fw-semibold" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fw-semibold" to="/features">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fw-semibold" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fw-semibold" to="/markets">
                Markets
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fw-semibold" to="/contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link fw-semibold" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="btn btn-primary px-4 py-2 fw-semibold"
                style={{
                  backgroundColor: "#387ed1",
                  border: "none",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
