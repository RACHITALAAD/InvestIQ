import React from "react";

function WatchList() {
  const stocks = [
    {
      symbol: "AAPL",
      price: "$198.40",
      change: "+2.4%",
    },
    {
      symbol: "TSLA",
      price: "$242.80",
      change: "-1.2%",
    },
    {
      symbol: "NVDA",
      price: "$121.90",
      change: "+5.3%",
    },
    {
      symbol: "MSFT",
      price: "$427.10",
      change: "+0.9%",
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h4 className="fw-bold mb-4">Watchlist</h4>

      {stocks.map((stock, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center py-3 border-bottom"
        >
          <div>
            <h6 className="fw-bold mb-1">{stock.symbol}</h6>

            <small className="text-muted">{stock.price}</small>
          </div>

          <span
            className={
              stock.change.startsWith("+")
                ? "text-success fw-bold"
                : "text-danger fw-bold"
            }
          >
            {stock.change}
          </span>
        </div>
      ))}
    </div>
  );
}

export default WatchList;
