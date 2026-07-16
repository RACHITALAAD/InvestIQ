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
    "#008080",
    "#20C997",
    "#FFC107",
    "#DC3545",
    "#6F42C1",
    "#FD7E14",
    "#0D6EFD",
    "#6C757D",
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
          <h5
            style={{
              color: "#1F2937",
              fontWeight: 600,
            }}
          >
            Asset Allocation
          </h5>
          <p
            className="mb-0"
            style={{
              color: "#6B7280",
            }}
          >
            No holdings available.
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
          Asset Allocation
        </h4>

        <p
          className="mb-0"
          style={{
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          Portfolio diversification across holdings
        </p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
            formatter={(value) => [
              `₹ ${Number(value).toLocaleString()}`,
              "Investment",
            ]}
          />

          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{
              fontSize: "13px",
              color: "#6B7280",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AssetAllocationChart;
