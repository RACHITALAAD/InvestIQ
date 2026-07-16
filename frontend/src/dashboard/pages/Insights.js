import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { getInsights } from "../../api/insights";

function Insights() {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      const response = await getInsights();
      setInsights(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container-fluid p-4">
        <h3>Loading Insights...</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1" style={{ fontSize: "1.6rem" }}>
          Insights
        </h2>

        <small className="text-muted">
          Analyze your portfolio performance and market trends
        </small>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-lg-3 col-md-6">
          <div
            className="card rounded-4 h-100"
            style={{
              border: "1px solid #E8F3F3",
              background: "#F8FCFC",
              transition: "all .3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 15px 30px rgba(53,128,130,.10)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div className="card-body">
              <small className="text-muted" style={{ fontWeight: 500 }}>
                Total Investment
              </small>

              <h4
                className="mt-2"
                style={{
                  fontWeight: 600,
                  color: "#1F2937",
                }}
              >
                <MdCurrencyRupee />
                {insights.investedAmount.toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div
            className="card rounded-4 h-100"
            style={{
              border: "1px solid #E8F3F3",
              background: "#F8FCFC",
              transition: "all .3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 15px 30px rgba(53,128,130,.10)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div className="card-body">
              <small className="text-muted" style={{ fontWeight: 500 }}>
                Portfolio Value
              </small>

              <h4
                className="mt-2"
                style={{
                  fontWeight: 600,
                  color: "#358082",
                }}
              >
                <MdCurrencyRupee />
                {insights.portfolioValue.toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div
            className="card rounded-4 h-100"
            style={{
              border: "1px solid #E8F3F3",
              background: "#F8FCFC",
              transition: "all .3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 15px 30px rgba(53,128,130,.10)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div className="card-body">
              <small className="text-muted" style={{ fontWeight: 500 }}>
                Profit / Loss
              </small>

              <h4
                className={`mt-2 ${
                  insights.totalProfit >= 0 ? "text-success" : "text-danger"
                }`}
                style={{ fontWeight: 600 }}
              >
                <MdCurrencyRupee />
                {insights.totalProfit.toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div
            className="card rounded-4 h-100"
            style={{
              border: "1px solid #E8F3F3",
              background: "#F8FCFC",
              transition: "all .3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 15px 30px rgba(53,128,130,.10)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div className="card-body">
              <small className="text-muted" style={{ fontWeight: 500 }}>
                Overall Return
              </small>

              <h4
                className={`mt-2 ${
                  insights.overallReturn >= 0 ? "text-success" : "text-danger"
                }`}
                style={{ fontWeight: 600 }}
              >
                {insights.overallReturn.toFixed(2)}%
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body">
          <h4 className="fw-bold mb-4" style={{ fontSize: "20px" }}>
            Holdings Performance
          </h4>

          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Stock</th>
                <th>Investment</th>
                <th>Current Value</th>
                <th>Profit / Loss</th>
              </tr>
            </thead>

            <tbody>
              {insights.holdingsPerformance.map((stock) => (
                <tr key={stock.stock}>
                  <td className="fw-semibold">{stock.stock}</td>

                  <td>
                    <MdCurrencyRupee />
                    {stock.investment.toLocaleString()}
                  </td>

                  <td>
                    <MdCurrencyRupee />
                    {stock.currentValue.toLocaleString()}
                  </td>

                  <td
                    className={
                      stock.profit >= 0
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    <MdCurrencyRupee />
                    {stock.profit.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body">
              <h4 className="fw-bold mb-4" style={{ fontSize: "20px" }}>Portfolio Statistics</h4>

              <div className="d-flex justify-content-between py-2 border-bottom">
                <span>Total Holdings</span>
                <strong>{insights.totalHoldings}</strong>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom">
                <span>Profitable Holdings</span>
                <strong className="text-success">
                  {insights.profitableStocks}
                </strong>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom">
                <span>Loss Making Holdings</span>
                <strong className="text-danger">{insights.lossStocks}</strong>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom">
                <span>Buy Orders</span>
                <strong>{insights.buyOrders}</strong>
              </div>

              <div className="d-flex justify-content-between py-2">
                <span>Sell Orders</span>
                <strong>{insights.sellOrders}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body">
              <h4 className="fw-bold mb-4" style={{ fontSize: "20px" }}>Performance Summary</h4>

              <div className="d-flex justify-content-between py-2 border-bottom">
                <span>Best Performer</span>

                <strong className="text-success">
                  {insights.bestPerformer
                    ? insights.bestPerformer.stock
                    : "No significant gain"}
                </strong>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom">
                <span>Return</span>

                <strong className="text-success">
                  {insights.bestPerformer
                    ? `${insights.bestPerformer.returnPercentage.toFixed(2)}%`
                    : "--"}
                </strong>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom">
                <span>Worst Performer</span>

                <strong className="text-danger">
                  {insights.worstPerformer
                    ? insights.worstPerformer.stock
                    : "No significant gain"}
                </strong>
              </div>

              <div className="d-flex justify-content-between py-2">
                <span>Return</span>

                <strong className="text-danger">
                  {insights.worstPerformer
                    ? `${insights.worstPerformer.returnPercentage.toFixed(2)}%`
                    : "--"}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
