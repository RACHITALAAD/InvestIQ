import React from "react";
import logoImage from "../assets/logo2.png";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-white border-bottom sticky-top py-3"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div class="container">
        <a class="navbar-brand d-flex align items-center fw-bold fs-4" href="#">
          <img
            src={logoImage}
            alt="InvestIQ Logo Image"
            className="img"
            style={{ width: "48px", marginRight: "10px" }}
          />
          <span style={{ color: "#002855" }}>InvestIQ</span>
        </a>
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
              <a class="nav-link fw-semibold" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold" href="#">
                Insights
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold" href="#">
                Markets
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary px-4 py-2 fw-semibold"
                style={{
                  backgroundColor: "#387ed1",
                  border: "none",
                }}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
