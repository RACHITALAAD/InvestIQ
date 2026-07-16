import React from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiExchangeFundsFill } from "react-icons/ri";

import {
  FaChartPie,
  FaBriefcase,
  FaChartBar,
  FaChartLine,
  FaClipboardList,
  FaWallet,
  FaCoins,
  FaLightbulb,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "../../assets/logo2.png";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <RiDashboardHorizontalFill />,
    },
    {
      name: "Market",
      path: "/dashboard/market",
      icon: <FaChartBar />,
    },
    {
      name: "Holdings",
      path: "/dashboard/holdings",
      icon: <FaBriefcase />,
    },
    {
      name: "Orders",
      path: "/dashboard/orders",
      icon: <FaClipboardList />,
    },
    {
      name: "Funds",
      path: "/dashboard/funds",
      icon: <FaCoins />,
    },
    {
      name: "Insights",
      path: "/dashboard/insights",
      icon: <FaLightbulb />,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <FaUserCircle />,
    },
  ];

  return (
    <div
      className="d-flex flex-column justify-content-between shadow-sm"
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#fff",
        borderRight: "1px solid #e9ecef",
        padding: "24px",
      }}
    >
      {/* <h2 className="fw-bold mb-5" style={{ color: "#387ed1" }}>
        InvestIQ
      </h2> */}
      <div>
        <Link
          className="navbar-brand d-flex align-items-center fw-bold fs-4 mb-5"
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

        <ul className="nav flex-column">
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className="nav-link d-flex align-items-center fw-semibold"
                style={{
                  padding: "12px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  color: location.pathname === item.path ? "#fff" : "#0e0e0e",
                  backgroundColor:
                    location.pathname === item.path ? "#358082" : "transparent",
                }}
              >
                <span className="me-3">{item.icon}</span>

                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

        <button
          onClick={logout}
          className="btn w-100 d-flex align-items-center justify-content-center"
          style={{
            border: "1px solid #dc3545",
            color: "#dc3545",
            borderRadius: "12px",
            padding: "11px",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </div>
  );
}

export default Sidebar;
