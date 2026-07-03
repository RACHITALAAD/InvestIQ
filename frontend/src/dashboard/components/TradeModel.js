import React, { useState, useEffect } from "react";
import { MdCurrencyRupee } from "react-icons/md";

function TradeModel({ show, onClose, mode, stock, onSubmit }) {
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (show && stock) {
      setQuantity("");
      setPrice(stock.price || stock.currentPrice || 0);
    }
  }, [show, stock]);

  if (!show || !stock) {
    return null;
  }

  const symbol = stock.symbol || stock.stock;

  const total = (Number(quantity) || 0) * (Number(price) || 0);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!quantity || Number(quantity) <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    onSubmit({
      stock: symbol,
      quantity: Number(quantity),
      price: Number(price),
    });
  };

  return (
    <>
      <div
        className="modal fade show"
        style={{
          display: "block",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{
              borderRadius: "18px",
            }}
          >
            <div className="modal-header">
              <h4 className="modal-title fw-bold">
                {mode === "BUY" ? "Buy Stock" : "Sell Stock"}
              </h4>

              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Stock</label>

                  <input className="form-control" value={symbol} disabled />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Quantity</label>

                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter quantity"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Current Market Price
                  </label>

                  <input
                    className="form-control"
                    value={`₹ ${Number(price).toLocaleString()}`}
                    disabled
                  />
                </div>

                <div className="alert alert-light d-flex justify-content-between">
                  <span className="fw-semibold">Total Amount</span>

                  <span className="fw-bold fs-5">
                    <MdCurrencyRupee />
                    {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={
                    mode === "BUY" ? "btn btn-success" : "btn btn-danger"
                  }
                >
                  {mode === "BUY" ? "Buy Stock" : "Sell Stock"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TradeModel;
