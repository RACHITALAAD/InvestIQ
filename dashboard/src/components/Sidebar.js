import React from "react";
import {
  FaChartPie,
  FaBriefcase,
  FaChartLine,
  FaClipboardList,
  FaWallet,
  FaLightbulb,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="d-flex flex-column p-4 shadow-sm"
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e9ecef",
      }}
    >
      <h2 className="fw-bold mb-5" style={{ color: "#387ed1" }}>
        InvestIQ
      </h2>

      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <Link
            to="/"
            className="nav-link d-flex align-items-center text-dark fw-semibold"
          >
            <FaChartPie className="me-3" />
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            to="/holdings"
            className="nav-link d-flex align-items-center text-dark fw-semibold"
          >
            <FaBriefcase className="me-3" />
            Holdings
          </Link>
        </li>


        <li className="nav-item mb-3">
          <Link
            to="/orders"
            className="nav-link d-flex align-items-center text-dark fw-semibold"
          >
            <FaClipboardList className="me-3" />
            Orders
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            to="/funds"
            className="nav-link d-flex align-items-center text-dark fw-semibold"
          >
            <FaWallet className="me-3" />
            Funds
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            to="/insights"
            className="nav-link d-flex align-items-center text-dark fw-semibold"
          >
            <FaLightbulb className="me-3" />
            Insights
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            to="/profile"
            className="nav-link d-flex align-items-center text-dark fw-semibold"
          >
            <FaUserCircle className="me-3" />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
