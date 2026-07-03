import React from "react";
import { FaWallet, FaChartLine, FaBriefcase, FaCoins } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

function Summary({ data }) {
  if (!data) {
    return (
      <div className="text-center py-5">
        <h5>Loading Summary...</h5>
      </div>
    );
  }

  const cards = [
    {
      title: "Portfolio Value",
      value: data.portfolioValue,
      icon: <FaWallet size={28} className="text-primary" />,
      bg: "#EEF6FF",
    },
    {
      title: "Profit / Loss",
      value: data.profitLoss,
      icon: (
        <FaChartLine
          size={28}
          className={data.profitLoss >= 0 ? "text-success" : "text-danger"}
        />
      ),
      bg: "#F1FFF4",
      color: data.profitLoss >= 0 ? "text-success" : "text-danger",
    },
    {
      title: "Available Funds",
      value: data.availableFunds,
      icon: <FaCoins size={28} className="text-warning" />,
      bg: "#FFF9EA",
    },
    {
      title: "Holdings",
      value: `${data.holdingsCount} Stocks`,
      icon: <FaBriefcase size={28} className="text-secondary" />,
      bg: "#F4F1FF",
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
              transition: "all 0.3s ease",
              cursor: "pointer",
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
            <div className="d-flex align-items-center gap-2">
              {card.icon}

              <small
                className="text-muted"
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                {card.title}
              </small>
            </div>

            {/* Value */}
            <h4
              className={`mt-3 mb-0 ${card.color || ""}`}
              style={{
                fontSize: "25px",
                fontWeight: 550,
                color: card.color ? undefined : "#1F2937",
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
