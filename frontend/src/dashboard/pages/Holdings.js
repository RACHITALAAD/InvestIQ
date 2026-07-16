import React, { useEffect, useState } from "react";
import { FaWallet, FaChartLine, FaCoins } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

import { getHoldings } from "../../api/holdings";
import { buyStock, sellStock } from "../../api/trade";

import TradeModal from "../components/TradeModel";

function Holdings() {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [tradeMode, setTradeMode] = useState("BUY");

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    try {
      setLoading(true);

      const response = await getHoldings();

      setHoldings(response.data.holdings);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const openTradeModal = (stock, mode) => {
    setSelectedStock(stock);
    setTradeMode(mode);
    setShowModal(true);
  };

  const closeTradeModal = () => {
    setShowModal(false);
    setSelectedStock(null);
  };

  const handleTrade = async (tradeData) => {
    try {
      if (tradeMode === "BUY") {
        await buyStock(tradeData);
      } else {
        await sellStock(tradeData);
      }

      await fetchHoldings();

      closeTradeModal();

      alert(
        tradeMode === "BUY"
          ? "Stock Purchased Successfully!"
          : "Stock Sold Successfully!",
      );
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Trade Failed");
    }
  };

  if (loading) {
    return (
      <div
        className="container-fluid p-4"
        style={{ background: "#F8FAFC", minHeight: "100vh" }}
      >
        <h4>Loading Holdings...</h4>
      </div>
    );
  }

  const totalInvestment = holdings.reduce(
    (sum, stock) => sum + stock.quantity * stock.avgPrice,
    0,
  );

  const totalCurrentValue = holdings.reduce(
    (sum, stock) => sum + stock.quantity * stock.currentPrice,
    0,
  );

  const totalProfit = totalCurrentValue - totalInvestment;

  return (
    <div
      className="container-fluid p-4"
      style={{ background: "#F8FAFC", minHeight: "100vh" }}
    >
      <div className="mb-4">
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#1F2937",
            marginBottom: "6px",
          }}
        >
          Holdings
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#6B7280",
            marginBottom: 0,
          }}
        >
          Track and manage your investment portfolio.
        </p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-lg-4 col-md-6">
          <div
            className="rounded-4 shadow-sm border-0 h-100 p-4"
            style={{
              background: "#F8FCFC",
              transition: "all 0.3s ease",
              cursor: "default",
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
                Total Investment
              </small>
            </div>

            <h3
              className="mt-3 mb-0 d-flex align-items-center"
              style={{
                fontSize: "25px",
                fontWeight: 650,
                color: "#1F2937",
              }}
            >
              <MdCurrencyRupee size={24} style={{ marginRight: "2px" }} />
              {totalInvestment.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div
            className="rounded-4 shadow-sm border-0 h-100 p-4"
            style={{
              background: "#F8FCFC",
              transition: "all 0.3s ease",
              cursor: "default",
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
              <FaCoins size={28} style={{ color: "#F4B400" }} />

              <small
                className="text-muted"
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Current Value
              </small>
            </div>

            <h3
              className="mt-3 mb-0 d-flex align-items-center"
              style={{
                fontSize: "25px",
                fontWeight: 650,
                color: "#1F2937",
              }}
            >
              <MdCurrencyRupee size={24} style={{ marginRight: "2px" }} />
              {totalCurrentValue.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div
            className="rounded-4 shadow-sm border-0 h-100 p-4"
            style={{
              background: "#F8FCFC",
              transition: "all 0.3s ease",
              cursor: "default",
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
              <FaChartLine
                size={28}
                className={totalProfit >= 0 ? "text-success" : "text-danger"}
              />

              <small
                className="text-muted"
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Overall Profit / Loss
              </small>
            </div>

            <h3
              className={`mt-3 mb-0 d-flex align-items-center ${
                totalProfit >= 0 ? "text-success" : "text-danger"
              }`}
              style={{
                fontSize: "25px",
                fontWeight: 650,
              }}
            >
              <MdCurrencyRupee size={24} style={{ marginRight: "2px" }} />
              {totalProfit.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>
      

      <div className="bg-white rounded shadow-sm p-4">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Avg Price</th>
              <th>Current Price</th>
              <th>Investment</th>
              <th>Current Value</th>
              <th>Profit / Loss</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {holdings.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-5">
                  No Holdings Found
                </td>
              </tr>
            ) : (
              holdings.map((stock) => {
                const investment = stock.quantity * stock.avgPrice;

                const currentValue = stock.quantity * stock.currentPrice;

                const profitLoss = currentValue - investment;

                return (
                  <tr key={stock._id}>
                    <td className="fw-semibold">{stock.stock}</td>

                    <td>{stock.quantity}</td>

                    <td>
                      <MdCurrencyRupee />
                      {stock.avgPrice.toLocaleString()}
                    </td>

                    <td>
                      <MdCurrencyRupee />
                      {stock.currentPrice.toLocaleString()}
                    </td>

                    <td>
                      <MdCurrencyRupee />
                      {investment.toLocaleString()}
                    </td>

                    <td>
                      <MdCurrencyRupee />
                      {currentValue.toLocaleString()}
                    </td>

                    <td
                      className={
                        profitLoss >= 0
                          ? "text-success fw-bold"
                          : "text-danger fw-bold"
                      }
                    >
                      <MdCurrencyRupee />
                      {profitLoss.toLocaleString()}
                    </td>

                    <td>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => openTradeModal(stock, "BUY")}
                      >
                        Buy
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => openTradeModal(stock, "SELL")}
                      >
                        Sell
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {selectedStock && (
        <TradeModal
          show={showModal}
          onClose={closeTradeModal}
          mode={tradeMode}
          stock={selectedStock}
          onSubmit={handleTrade}
        />
      )}
    </div>
  );
}

export default Holdings;
