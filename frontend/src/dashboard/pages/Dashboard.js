import React from "react";
import Summary from "../components/Summary";
import WatchList from "../components/WatchList";
import MarketOverview from "../components/MarketOverview";
import PortfolioChart from "../charts/PortfolioChart";
import AssetAllocation from "../charts/AssetAllocationChart";
import { topMovers } from "../../data/dashboardData";

function Dashboard() {
  return (
    <div className="container-fluid p-4">
      <Summary />

      <div className="mt-4">
        <MarketOverview />
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <PortfolioChart />
        </div>

        <div className="col-lg-4">
          <AssetAllocation />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-4">
          <WatchList />
        </div>

        <div className="col-lg-8">
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <h4 className="fw-bold mb-4">Top Movers</h4>

            <div className="row g-3">
              {topMovers.map((stock, index) => (
                <div className="col-md-4" key={index}>
                  <div className="border rounded p-3">
                    <h6 className="fw-bold">{stock.stock}</h6>

                    <p
                      className={
                        stock.change.startsWith("+")
                          ? "text-success fw-bold mb-0"
                          : "text-danger fw-bold mb-0"
                      }
                    >
                      {stock.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
