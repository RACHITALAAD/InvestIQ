import React from "react";
import { FaWallet, FaChartLine } from "react-icons/fa";
import { PiChartBarFill } from "react-icons/pi";
import { FaShieldAlt } from "react-icons/fa";

function CoreFeatures() {
  const features = [
    {
      icon: <FaWallet />,
      title: "Portfolio Management",
      desc: "Track holdings , monitor performance and manage investments efficiently.",
    },
    {
      icon: <FaChartLine />,
      title: "Market Intelligence",
      desc: "Stay informed with stock trends, watchlists , and market insights.",
    },
    {
      icon: <PiChartBarFill />,
      title: "Analytics Dashboard",
      desc: "Visualize investment growth and analyze performance with powerful charts.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Authentication",
      desc: "Protect user accounts with secure login and authentication systems.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Core Features</h2>

        <p className="text-muted">
          Everything you need to manage investments smarter.
        </p>
      </div>

      <div className="row g-4">
        {features.map((feature, index) => (
          <div className="col-md-6" key={index}>
            <div className="border rounded p-4 h-100 shadow-sm">
              <div className="mb-3 fs-2" style={{ color: "#387ed1" }}>
                {feature.icon}
              </div>

              <h4 className="fw-bold">{feature.title}</h4>

              <p className="text-muted">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreFeatures;
