import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#F7FBFB",
      }}
    >
      <div className="container">
        <div
          className="bg-white shadow-sm rounded-4 text-center mx-auto p-5"
          style={{
            maxWidth: "850px",
          }}
        >
          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "23px",
              color: "#008080",
            }}
          >
            Ready to Get Started?
          </h2>

          <p
            className="text-muted mb-4"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Create your free InvestIQ account and start managing your portfolio
            with a simple and intuitive dashboard
          </p>

          <Link
            to="/signup"
            className="btn px-4 py-2 fw-semibold"
            style={{
              backgroundColor: "#008080",
              color: "#fff",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
