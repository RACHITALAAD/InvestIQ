import React, { useEffect, useState } from "react";
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
      <div className="container-fluid p-4">
        <h3>Loading Holdings...</h3>
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
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">My Holdings</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body">
              <small className="text-muted">Total Investment</small>

              <h4 className="fw-bold mt-2">
                <MdCurrencyRupee />
                {totalInvestment.toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body">
              <small className="text-muted">Current Value</small>

              <h4 className="fw-bold mt-2 text-primary">
                <MdCurrencyRupee />
                {totalCurrentValue.toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body">
              <small className="text-muted">Overall Profit / Loss</small>

              <h4
                className={`fw-bold mt-2 ${
                  totalProfit >= 0 ? "text-success" : "text-danger"
                }`}
              >
                <MdCurrencyRupee />
                {totalProfit.toLocaleString()}
              </h4>
            </div>
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
