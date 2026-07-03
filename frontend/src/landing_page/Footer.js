import React from "react";
import { Link } from "react-router-dom";

import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaRegCopyright,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="border-top mt-5 pt-5 pb-3"
      style={{ background: "#F8FCFC" }}
    >
      <div className="container">
        <div className="row justify-content-between gy-4">
          {/* Brand */}
          <div className="col-lg-4">
            <h3 className="fw-bold mb-3" style={{ color: "#008080" }}>
              InvestIQ
            </h3>

            <p
              className="text-muted mb-0"
              style={{
                maxWidth: "360px",
                lineHeight: "1.8",
              }}
            >
              A simple investment platform to manage your portfolio, holdings,
              funds and trading activity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-5">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <div className="d-flex flex-wrap gap-4">
              <Link
                to="/"
                className="text-decoration-none"
                style={{ color: "#6c757d", fontWeight: "500" }}
              >
                Home
              </Link>

              <Link
                to="/features"
                className="text-decoration-none"
                style={{ color: "#6c757d", fontWeight: "500" }}
              >
                Features
              </Link>

              <Link
                to="/contact"
                className="text-decoration-none"
                style={{ color: "#6c757d", fontWeight: "500" }}
              >
                Contact
              </Link>

              <Link
                to="/login"
                className="text-decoration-none"
                style={{ color: "#6c757d", fontWeight: "500" }}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="text-decoration-none"
                style={{
                  color: "#008080",
                  fontWeight: "600",
                }}
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="col-lg-3">
            <h5 className="fw-bold mb-2">Connect</h5>

            <div className="d-flex gap-4 fs-3">
              <a
                href="https://www.linkedin.com/in/rachitalaad885/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#008080" }}
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/RACHITALAAD"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#008080" }}
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center text-muted">
          <small>
            <FaRegCopyright className="me-1" />
            2026 InvestIQ. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
