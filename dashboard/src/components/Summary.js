import React from "react";
import { FaWallet, FaArrowTrendUp, FaBriefcase } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";

function Summary() {
  const cards = [
    {
      title: "Portfolio Value",
      value: "₹1,24,500",
      icon: <FaWallet size={28} />,
      bg: "#e8f4ff",
      color: "#387ed1",
    },
    {
      title: "Today's Gain",
      value: "+₹2,430",
      icon: <FaArrowTrendUp size={28} />,
      bg: "#e8fff0",
      color: "#28a745",
    },
    {
      title: "Available Funds",
      value: "₹20,000",
      icon: <GrMoney size={28} />,
      bg: "#fff7e6",
      color: "#ff9800",
    },
    {
      title: "Holdings",
      value: "8 Stocks",
      icon: <FaBriefcase size={28} />,
      bg: "#f3ebff",
      color: "#7b61ff",
    },
  ];

  return (
    <div className="row g-4">
      {cards.map((card, index) => (
        <div className="col-md-3 col-lg-3" key={index}>
          <div
            className="p-4 rounded-4 shadow-sm h-100"
            style={{
              backgroundColor: card.bg,
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-2  fw-semibold">{card.title}</p>

                <h4 className="fw-bold mb-0">{card.value}</h4>
              </div>

              <div style={{ color: card.color }}>{card.icon}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summary;
