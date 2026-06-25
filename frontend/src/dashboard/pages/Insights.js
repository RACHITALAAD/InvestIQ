import React from "react";
import { topPerformers , portfolioAllocation , insightSummary } from "../../data/dashboardData";

function Insights() {

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Portfolio Insights</h2>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="text-muted">Total Return</p>

            <h3 className="text-success fw-bold">{insightSummary.totalReturn}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="text-muted">Best Performer</p>

            <h3 className="fw-bold">{insightSummary.bestPerformer}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="text-muted">Risk Level</p>

            <h3 className="fw-bold">{insightSummary.riskLevel}</h3>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="fw-bold mb-4">Top Performers</h4>

            {topPerformers.map((stock, index) => (
              <div
                key={index}
                className="d-flex justify-content-between border-bottom py-3"
              >
                <span className="fw-semibold">{stock.stock}</span>

                <span className="text-success fw-bold">{stock.gain}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="fw-bold mb-4">Sector Allocation</h4>

            {portfolioAllocation.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between border-bottom py-3"
              >
                <span>{item.sector}</span>

                <span className="fw-bold">{item.allocation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
