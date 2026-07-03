import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function AssetAllocationChart({ holdings }) {
  const COLORS = [
    "#0d6efd",
    "#20c997",
    "#ffc107",
    "#dc3545",
    "#6f42c1",
    "#fd7e14",
    "#198754",
    "#6610f2",
  ];

  const data =
    holdings?.map((stock) => ({
      name: stock.stock,
      value: stock.quantity * stock.currentPrice,
    })) || [];

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-4 shadow-sm p-4 h-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h5 className="fw-bold">Asset Allocation</h5>
          <p className="text-muted mb-0">No holdings available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-4 shadow-sm p-4 h-100">
      <div className="mb-4">
        <h4 className="fw-bold mb-1">Asset Allocation</h4>

        <small className="text-muted">
          Portfolio diversification across holdings
        </small>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={95}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) => [
              `₹ ${Number(value).toLocaleString()}`,
              "Investment",
            ]}
          />

          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AssetAllocationChart;
