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

  const formatAmount = (value) => {
    if (value >= 100000) {
      return `${(value / 100000).toFixed(1)}L`;
    }

    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }

    return value;
  };

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-4 shadow-sm p-4 h-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h5
            style={{
              color: "#1F2937",
              fontWeight: 600,
            }}
          >
            Portfolio Overview
          </h5>
          <p
            className="mb-0"
            style={{
              color: "#6B7280",
            }}
          >
            No holdings available to display the chart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-4 shadow-sm p-4 h-100">
      <div className="mb-4">
        <h4
          style={{
            color: "#1F2937",
            fontWeight: 700,
            marginBottom: "4px",
          }}
        >
          Portfolio Overview
        </h4>

        <p
          className="mb-0"
          style={{
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          Current market value of your holdings
        </p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid
            stroke="#E5E7EB"
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            tick={{
              fontSize: 12,
              fill: "#6B7280",
            }}
            axisLine={true}
            tickLine={true}
          />

          <YAxis
            tickFormatter={formatAmount}
            tick={{
              fontSize: 12,
              fill: "#6B7280",
            }}
            axisLine={true}
            tickLine={true}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
            formatter={(value) => [
              `₹ ${Number(value).toLocaleString()}`,
              "Current Value",
            ]}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#008080"
            strokeWidth={3}
            dot={{
              r: 4,
              fill: "#008080",
            }}
            activeDot={{
              r: 6,
              fill: "#008080",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PortfolioChart;
