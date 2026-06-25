import React from "react";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function AssetAllocationChart() {
  const data = [
    { name: "Stocks", value: 60 },
    { name: "Mutual Funds", value: 20 },
    { name: "ETF", value: 10 },
    { name: "Cash", value: 10 },
  ];

  const COLORS = ["#387ed1", "#4caf50", "#ff9800", "#9c27b0"];

  return (
    <div className="bg-white rounded shadow-sm p-4">
      <h4 className="fw-bold mb-4">Asset Allocation</h4>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AssetAllocationChart;
