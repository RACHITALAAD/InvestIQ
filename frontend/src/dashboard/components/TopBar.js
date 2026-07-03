import React from "react";

function TopBar() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const userName = user.userName || "Investor";

  return (
    <div
      className="d-flex align-items-center px-4"
      style={{
        height: "92px",
        background: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#1F2937",
            marginBottom: "8px",
          }}
        >
          👋 Hello, {userName}
        </h2>

        <p
          style={{
            fontSize: "15px",
            fontWeight: 400,
            color: "#454952",
            marginBottom: 0,
          }}
        >
          Welcome back to InvestIQ Dashboard
        </p>
      </div>
    </div>
  );
}

export default TopBar;
