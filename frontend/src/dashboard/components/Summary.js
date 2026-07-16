import React from "react";
import { FaWallet, FaChartLine, FaBriefcase, FaCoins } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

function Summary({ data }) {
  if (!data) {
    return (
      <div className="text-center py-5">
        <h5
          style={{
            color: "#1F2937",
            fontWeight: 600,
          }}
        >
          Loading Summary...
        </h5>
      </div>
    );
  }

  const cards = [
    {
      title: "Portfolio Value",
      value: data.portfolioValue,
      icon: <FaWallet size={28} style={{ color: "#008080" }} />,
      bg: "#EAF8F8",
    },
    {
      title: "Profit / Loss",
      value: data.totalProfit,
      icon: (
        <FaChartLine
          size={28}
          className={data.totalProfit >= 0 ? "text-success" : "text-danger"}
        />
      ),
      bg:  "#EEF8F0",
      color: data.totalProfit >= 0 ? "#198754" : "#DC3545",
    },
    {
      title: "Available Funds",
      value: data.availableFunds,
      icon: <FaCoins size={28} className="text-warning" />,
      bg: "#FFF8E8",
    },
    {
      title: "Holdings",
      value: `${data.holdingsCount} ${
        data.holdingsCount === 1 ? "Stock" : "Stocks"
      }`,
      icon: <FaBriefcase size={28} style={{ color: "#6C757D" }} />,
      bg: "#F3F6FA",
    },
  ];

  return (
    <div className="row g-4">
      {cards.map((card, index) => (
        <div className="col-lg-3 col-md-6" key={index}>
          <div
            className="rounded-4 shadow-sm border-0 h-100 p-4"
            style={{
              backgroundColor: card.bg,
              cursor: "pointer",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {/* Icon + Title */}
            <div className="d-flex align-items-center gap-3">
              {card.icon}

              <small
                className="mb-0"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                   color: "#6B7280",
                }}
              >
                {card.title}
              </small>
            </div>

            {/* Value */}
             <h4
              className="mt-3 mb-0"
              style={{
                fontSize: "24px",
                fontWeight: 650,
                color: card.color || "#1F2937",
              }}
            >
              {typeof card.value === "number" ? (
                <>
                  <MdCurrencyRupee
                    size={22}
                    style={{ verticalAlign: "-2px" }}
                  />
                  {card.value.toLocaleString()}
                </>
              ) : (
                card.value
              )}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summary;
