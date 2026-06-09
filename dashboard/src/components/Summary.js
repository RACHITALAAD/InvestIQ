import React from "react";

function Summary() {
  const cards = [
    {
      title: "Portfolio Value",
      value: "₹1,24,500",
    },
    {
      title: "Today's Gain",
      value: "+₹2,430",
    },
    {
      title: "Available Funds",
      value: "₹20,000",
    },
    {
      title: "Holdings",
      value: "8 Stocks",
    },
  ];

  return (
    <div className="row g-4">
      {cards.map((card, index) => (
        <div className="col-md-3" key={index}>
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <p className="text-muted mb-2">{card.title}</p>

            <h4 className="fw-bold">{card.value}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summary;
