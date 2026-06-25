import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PortfolioChart() {
  const data = [
    { month: "Jan", value: 80000 },
    { month: "Feb", value: 92000 },
    { month: "Mar", value: 87000 },
    { month: "Apr", value: 105000 },
    { month: "May", value: 118000 },
    { month: "Jun", value: 124500 },
  ];

  return (
    <div className="bg-white rounded shadow-sm p-4">
      <h4 className="fw-bold mb-4">Portfolio Growth</h4>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#387ed1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PortfolioChart;
