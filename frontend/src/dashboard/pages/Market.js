import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { getMarketStocks } from "../../api/market";
import { buyStock } from "../../api/trade";
import TradeModel from "../components/TradeModel";

function Market() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("");
  const [marketCap, setMarketCap] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    fetchStocks();
  }, [page, sector, marketCap]);

  const fetchStocks = async () => {
    try {
      setLoading(true);

      const response = await getMarketStocks({
        page,
        search,
        sector,
        marketCap,
      });

      setStocks(response.data.stocks);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchStocks();
  };

  const openTradeModal = (stock) => {
    setSelectedStock(stock);
    setShowModal(true);
  };

  const closeTradeModal = () => {
    setShowModal(false);
  };

  const handleBuy = async (tradeData) => {
    try {
      await buyStock(tradeData);

      alert("Stock Purchased Successfully!");

      setShowModal(false);
    } catch (error) {
      alert(error.response?.data?.message || "Purchase Failed");
    }
  };

  if (loading) {
    return (
      <div className="container-fluid p-4">
        <h3>Loading Market...</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-2" style={{ fontSize: "25px" }}>
        Market
      </h2>

      <p
        className="text-muted mb-4"
        style={{
          fontSize: "16px",
          fontWeight: 400,
          color: "#6B7280",
          marginBottom: 0,
        }}
      >
        Browse available stocks and monitor current market prices
      </p>


      <div className="row mb-4">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Search Stock..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={sector}
            onChange={(e) => {
              setSector(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All Sectors</option>

            <option>Information Technology</option>
            <option>Banking</option>
            <option>Financial Services</option>
            <option>Energy</option>
            <option>Automobile</option>
            <option>Pharmaceuticals</option>
            <option>Healthcare</option>
            <option>FMCG</option>
            <option>Power</option>
            <option>Infrastructure</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={marketCap}
            onChange={(e) => {
              setMarketCap(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All Market Caps</option>

            <option>Large Cap</option>
            <option>Mid Cap</option>
            <option>Small Cap</option>
          </select>
        </div>

        {/* <div className="col-md-2">
          <button className="btn btn-primary w-100" onClick={handleSearch}>
            Search
          </button>
        </div> */}
        <div className="col-md-2">
          <button
            className="btn w-100 text-white"
            style={{
              backgroundColor: "#0b5061",
              borderColor: "#036d6d",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#006666";
              e.currentTarget.style.borderColor = "#006666";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#008080";
              e.currentTarget.style.borderColor = "#008080";
            }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>


      <div className="bg-white rounded shadow-sm">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Symbol</th>
              <th>Company</th>
              <th>Sector</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Change</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.symbol}>
                <td className="fw-bold">{stock.symbol}</td>

                <td>{stock.company}</td>

                <td>{stock.sector}</td>

                <td>{stock.marketCap}</td>

                <td>
                  <MdCurrencyRupee />

                  {stock.price.toLocaleString()}
                </td>

                <td
                  className={
                    stock.change >= 0
                      ? "text-success fw-bold"
                      : "text-danger fw-bold"
                  }
                >
                  {stock.change}%
                </td>

                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => openTradeModal(stock)}
                  >
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-secondary me-2"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <span className="align-self-center fw-bold">
          Page {page} of {totalPages}
        </span>

        <button
          className="btn btn-outline-secondary ms-2"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      <TradeModel
        show={showModal}
        onClose={closeTradeModal}
        mode="BUY"
        stock={selectedStock}
        onSubmit={handleBuy}
      />
    </div>
  );
}

export default Market;
