import React from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";

import {
  FaChartPie,
  FaBriefcase,
  FaClipboardList,
  FaWallet,
  FaChartLine,
  FaUserCircle,
} from "react-icons/fa";

function CoreFeatures() {
  const features = [
    {
      icon: <RiDashboardHorizontalFill />,
      title: "Dashboard",
      desc: "Get an overview of your portfolio, available funds, performance, and recent transactions in one place.",
    },

    {
      icon: <FaBriefcase />,
      title: "Holdings",
      desc: "View your current holdings, investment value, profit or loss, and easily buy or sell stocks.",
    },

    {
      icon: <FaClipboardList />,
      title: "Orders",
      desc: "Review your complete order history, including stock details, quantity, price, and transaction status.",
    },

    {
      icon: <FaWallet />,
      title: "Funds",
      desc: "Monitor your available balance, invested amount, and withdrawable balance from a single page.",
    },

    {
      icon: <FaChartLine />,
      title: "Insights",
      desc: "Analyze your portfolio with interactive charts that visualize asset allocation and investment performance.",
    },

    {
      icon: <FaUserCircle />,
      title: "Profile",
      desc: "Access your account information and view your investment profile in one secure location.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              color: "#008080",
              fontSize: "28px",
            }}
          >
            Core Features
          </h2>

          <p
            className="text-muted mx-auto"
            style={{
              maxWidth: "700px",
            }}
          >
            Explore the tools designed to help you manage your portfolio, monitor your funds, track investments, and review your trading activity.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="bg-white rounded-4 shadow-sm h-100 p-4"
                style={{
                  transition: "0.3s ease",
                }}
              >
                <div
                  className="d-inline-flex justify-content-center align-items-center rounded-circle mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#EAF8F8",
                    color: "#008080",
                    fontSize: "24px",
                  }}
                >
                  {feature.icon}
                </div>

                <h5 className="fw-bold mb-3">{feature.title}</h5>

                <p
                  className="text-muted mb-0"
                  style={{
                    lineHeight: "1.7",
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreFeatures;
