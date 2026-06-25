import React from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiExchangeFundsFill } from "react-icons/ri";

import {
  FaChartPie,
  FaBriefcase,
  FaChartLine,
  FaClipboardList,
  FaWallet,
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
      name: "Holdings",
      path: "/dashboard/holdings",
      icon: <FaHandHoldingUsd />,
    },
    {
      name: "Orders",
      path: "/dashboard/orders",
      icon: <FaClipboardList />,
    },
    {
      name: "Funds",
      path: "/dashboard/funds",
      icon: <RiExchangeFundsFill />,
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

      <div>
        <div
          className="p-3 rounded-4 mb-3"
          style={{
            background: "linear-gradient(135deg, #002855, #0F766E)",
            color: "white",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <div className="d-flex align-items-center">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center me-3"
              style={{
                width: "38px",
                height: "38px",
                backgroundColor: "rgba(255,255,255,0.2)",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {user?.userName?.charAt(0)?.toUpperCase()}
            </div>

            <div>
              <h6 className="fw-bold">{user?.userName || "User"}</h6>

              <small style={{ opacity: "0.85" }}>Investor</small>
            </div>
          </div>

          <div
            style={{
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.2)",
              marginBottom: "12px",
            }}
          />

          <small style={{ opacity: "0.8" }}>Portfolio Value</small>

          <h5 className="fw-bold mb-0">₹1,24,500</h5>
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
    </div>
  );
}

export default Sidebar;
