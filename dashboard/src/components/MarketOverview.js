import React from "react";

function MarketOverview() {
  const indices = [
    {
      name: "NIFTY 50",
      change: "+1.24%",
    },
    {
      name: "SENSEX",
      change: "+0.84%",
    },
    {
      name: "BANK NIFTY",
      change: "-0.31%",
    },
  ];

  return (
    <div className="row g-4">
      {indices.map((index, i) => (
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
