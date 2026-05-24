import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 text-center">
      <h1 className="mb-4 fw-bold" style={{fontSize: "2rem"}}>Start Your Investment Journey Today</h1>
       <p
        className="text-muted mb-4"
        style={{
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        Smart investing tools designed for modern investors.
      </p>
      <button
        className="btn btn-primary px-4 py-2"
        style={{ backgroundColor: "#387ed1" ,border: "none" , fontSize: "1rem" , borderRadius: "8px"}}
      >
        Create Free Account
      </button>
    </div>
  );
}

export default OpenAccount;
