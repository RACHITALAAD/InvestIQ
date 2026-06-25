import React from "react";
import { FaWallet, FaChartLine, FaBriefcase } from "react-icons/fa";
import { summaryCards } from "../../data/dashboardData";

function Summary() {
  const icons = {
    wallet: <FaWallet size={28}/>,
    chart: <FaChartLine size={28}/>,
    briefcase: <FaBriefcase size={28}/>
  };

  return (
    <div className="row g-4">
      {summaryCards.map((card, index) => (
        <div className="col-md-6 col-lg-3" key={index}>
          <div
            className="p-4 rounded-4 shadow-sm h-100"
            style={{
              backgroundColor: card.bg,
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-2">{card.title}</p>
                <h4 className="fw-bold">{card.value}</h4>
              </div>

              {icons[card.icon]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summary;
