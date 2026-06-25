import React from "react";
import { marketIndices } from "../../data/dashboardData";

function MarketOverview() {
  return (
    <div className="row g-4">
      {marketIndices.map((index, i) => (
        <div className="col-md-4" key={i}>
          <div className="bg-white rounded shadow-sm p-4">
            <h6 className="text-muted">{index.name}</h6>

            <h3
              className={
                index.change.startsWith("+") ? "text-success" : "text-danger"
              }
            >
              {index.change}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MarketOverview;
