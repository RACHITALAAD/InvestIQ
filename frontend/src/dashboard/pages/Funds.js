import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { FaWallet, FaChartLine, FaCoins } from "react-icons/fa";
import { getFunds } from "../../api/funds";

function Funds() {
  const [funds, setFunds] = useState(null);

  const fetchFunds = async () => {
    try {
      const res = await getFunds();
      setFunds(res.data.funds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  if (!funds) {
    return (
      <div className="container-fluid p-4">
        <h4>Loading Funds...</h4>
      </div>
    );
  }

  const availableBalance = funds.availableBalance || 0;
  const investedAmount = funds.investedAmount || 0;
  const withdrawableAmount = funds.withdrawableAmount || 0;

  const totalCapital = availableBalance + investedAmount;

  const investedPercent =
    totalCapital === 0 ? 0 : ((investedAmount / totalCapital) * 100).toFixed(1);

  return (
    <div className="container-fluid p-4">
      {/* Page Heading */}

      <div className="mb-4">
        <h2
          style={{
            fontSize: "25px",
            fontWeight: 700,
            color: "#1F2937",
            marginBottom: "6px",
          }}
        >
          Funds
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#6B7280",
            marginBottom: 0,
          }}
        >
          Manage your trading capital and portfolio balance.
        </p>
      </div>

      {/* Summary Cards */}

      <div className="row g-4">
        {/* Available Balance */}

        <div className="col-lg-4 col-md-6">
          <div
            className="rounded-4 shadow-sm border-0 h-100 p-4"
            style={{
              background: "#F8FAFC",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <FaWallet size={28} style={{ color: "#008080" }} />

              <small
                className="text-muted"
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Available Balance
              </small>
            </div>

            <h4
              className="mt-3 mb-1"
              style={{
                fontSize: "25px",
                fontWeight: 550,
                color: "#1F2937",
              }}
            >
              <MdCurrencyRupee size={22} style={{ verticalAlign: "-2px" }} />
              {availableBalance.toLocaleString()}
            </h4>

            <small className="text-success">Ready for trading</small>
          </div>
        </div>

        {/* Invested Amount */}

        <div className="col-lg-4 col-md-6">
          <div
            className="rounded-4 shadow-sm border-0 h-100 p-4"
            style={{
              background: "#EAF8F8",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <FaChartLine size={28} className="text-success" />

              <small
                className="text-muted"
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Invested Amount
              </small>
            </div>

            <h4
              className="mt-3 mb-1"
              style={{
                fontSize: "25px",
                fontWeight: 550,
                color: "#1F2937",
              }}
            >
              <MdCurrencyRupee size={22} style={{ verticalAlign: "-2px" }} />
              {investedAmount.toLocaleString()}
            </h4>

            <small className="text-success">Active investments</small>
          </div>
        </div>

        {/* Withdrawable Balance */}

        <div className="col-lg-4 col-md-6">
          <div
            className="rounded-4 shadow-sm border-0 h-100 p-4"
            style={{
              background: "#FFF9EA",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <FaCoins size={28} className="text-warning" />

              <small
                className="text-muted"
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Withdrawable Balance
              </small>
            </div>

            <h4
              className="mt-3 mb-1"
              style={{
                fontSize: "25px",
                fontWeight: 550,
                color: "#1F2937",
              }}
            >
              <MdCurrencyRupee size={22} style={{ verticalAlign: "-2px" }} />
              {withdrawableAmount.toLocaleString()}
            </h4>

            <small className="text-success">Available for withdrawal</small>
          </div>
        </div>
      </div>

      {/* Portfolio Summary */}

      <div
        className="rounded-4 shadow-sm p-4 mt-5"
        style={{
          background: "#FFFFFF",
        }}
      >
        <div className="mb-4">
          <h4 className="fw-bold mb-1" style={{ fontSize: "21px" }}>Portfolio Summary</h4>

          <small className="text-muted">
            Overview of your available and invested funds.
          </small>
        </div>

        <div className="row align-items-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <small className="text-muted">Total Capital</small>

            <h4
              className="fw-semibold mt-2"
              style={{
                fontSize: "23px",
                color: "#1F2937",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MdCurrencyRupee
                size={22}
                style={{
                  verticalAlign: "-2px",
                }}
              />

              {totalCapital.toLocaleString()}
            </h4>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <small className="text-muted">Capital Invested</small>

            <h4
              className="fw-semibold mt-2"
              style={{
                fontSize: "23px",
                color: "#008080",
              }}
            >
              {investedPercent}%
            </h4>
          </div>

          <div className="col-md-4">
            <small className="text-muted">Investment Utilization</small>

            <div
              className="progress mt-3"
              style={{
                height: "10px",
                borderRadius: "50px",
                background: "#E8ECEF",
              }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${investedPercent}%`,
                  background: "#008080",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funds;


