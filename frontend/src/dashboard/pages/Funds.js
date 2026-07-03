import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { FaWallet, FaChartPie, FaMoneyCheckAlt } from "react-icons/fa";
import { getFunds } from "../../api/funds";

function Funds() {
  const [funds, setFunds] = useState(null);

  const fetchFunds = async () => {
    try {
      const res = await getFunds();
      setFunds(res.data);
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
        <h3>Loading Funds...</h3>
      </div>
    );
  }

  const totalCapital = funds.availableBalance + funds.investedAmount;

  const investedPercent =
    totalCapital === 0
      ? 0
      : ((funds.investedAmount / totalCapital) * 100).toFixed(1);

  return (
    <div className="container-fluid p-4">
      <div className="mb-4">
        <h2 className="fw-bold">Funds</h2>
        <p className="text-muted mb-0">
          Manage your trading capital and portfolio balance.
        </p>
      </div>

      <div className="row g-4">
        {/* Available */}

        <div className="col-lg-4">
          <div className="card border-0 shadow rounded-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <small className="text-muted">Available Balance</small>

                  <h3 className="fw-bold text-success mt-2">
                    <MdCurrencyRupee />
                    {funds.availableBalance.toLocaleString()}
                  </h3>

                  <small className="text-success">Ready for trading</small>
                </div>

                <FaWallet size={42} className="text-success" />
              </div>
            </div>
          </div>
        </div>

        {/* Invested */}

        <div className="col-lg-4">
          <div className="card border-0 shadow rounded-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <small className="text-muted">Invested Amount</small>

                  <h3 className="fw-bold text-primary mt-2">
                    <MdCurrencyRupee />
                    {funds.investedAmount.toLocaleString()}
                  </h3>

                  <small className="text-primary">Active Investments</small>
                </div>

                <FaChartPie size={42} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawable */}

        <div className="col-lg-4">
          <div className="card border-0 shadow rounded-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <small className="text-muted">Withdrawable</small>

                  <h3 className="fw-bold text-warning mt-2">
                    <MdCurrencyRupee />
                    {funds.withdrawableAmount.toLocaleString()}
                  </h3>

                  <small className="text-warning">
                    Available for withdrawal
                  </small>
                </div>

                <FaMoneyCheckAlt size={42} className="text-warning" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}

      <div className="card border-0 shadow rounded-4 mt-5">
        <div className="card-body">
          <h4 className="fw-bold mb-4">Portfolio Summary</h4>

          <div className="row">
            <div className="col-md-4">
              <p className="text-muted mb-1">Total Capital</p>

              <h5 className="fw-bold">
                <MdCurrencyRupee />
                {totalCapital.toLocaleString()}
              </h5>
            </div>

            <div className="col-md-4">
              <p className="text-muted mb-1">Capital Invested</p>

              <h5 className="fw-bold text-primary">{investedPercent}%</h5>
            </div>

            <div className="col-md-4">
              <p className="text-muted mb-2">Investment Utilization</p>

              <div className="progress" style={{ height: "12px" }}>
                <div
                  className="progress-bar bg-success"
                  style={{
                    width: `${investedPercent}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funds;
