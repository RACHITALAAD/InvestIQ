import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

function PortfolioChart({ holdings }) {
  const data =
    holdings?.map((stock) => ({
      name: stock.stock,
      value: stock.quantity * stock.currentPrice,
    })) || [];

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-4 shadow-sm p-4 h-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h5 className="fw-bold">Portfolio Overview</h5>
          <p className="text-muted mb-0">
            No holdings available to display the chart.
          </p>
        </div>
      </div>
    );
  }

  const formatAmount = (value) => {
    if (value >= 100000) {
      return `${(value / 100000).toFixed(1)}L`;
    }

    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }

    return value;
  };

  return (
    <div className="bg-white rounded-4 shadow-sm p-4 h-100">
      <div className="mb-4">
        <h4 className="fw-bold mb-1">Portfolio Overview</h4>

        <small className="text-muted">
          Current market value of your holdings
        </small>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            tickFormatter={formatAmount}
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            formatter={(value) => [
              `₹ ${Number(value).toLocaleString()}`,
              "Current Value",
            ]}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#0d6efd"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PortfolioChart;