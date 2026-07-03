import React from "react";
import {
  FaChartLine,
  FaLayerGroup,
  FaRegClock,
} from "react-icons/fa";

function InvestIQ() {
  const reasons = [
    {
      icon: <FaChartLine />,
      title: "Track Your Investments",
      description:
        "Monitor your portfolio, holdings and overall investment performance from a single dashboard",
    },
    {
      icon: <FaLayerGroup />,
      title: "Everything in One Place",
      description:
        "Manage funds, holdings, orders and portfolio insights without switching between multiple screens",
    },
    {
      icon: <FaRegClock />,
      title: "Simple & Easy to Use",
      description:
        "A clean and intuitive interface designed to help you manage your investments with confidence",
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
            }}
          >
            Why InvestIQ?
          </h2>

          <p
            className="text-muted mx-auto"
            style={{
              maxWidth: "650px",
            }}
          >
            InvestIQ brings together everything you need to manage your
            investments through a simple, organized and easy to use platform
          </p>
        </div>

        <div className="row g-4">

          {reasons.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div
                className="bg-white shadow-sm rounded-4 p-4 h-100 text-center"
                style={{
                  transition: "0.3s",
                }}
              >
                <div
                  className="mx-auto mb-4 d-flex justify-content-center align-items-center rounded-circle"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#EAF8F8",
                    color: "#008080",
                    fontSize: "28px",
                  }}
                >
                  {item.icon}
                </div>

                <h5 className="fw-bold mb-3">
                  {item.title}
                </h5>

                <p
                  className="text-muted mb-0"
                  style={{
                    lineHeight: "1.7",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default InvestIQ;