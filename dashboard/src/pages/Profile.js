import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Profile() {
  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Profile</h2>

      <div className="bg-white rounded shadow-sm p-5">
        <div className="text-center">
          <FaUserCircle size={120} className="text-primary mb-3" />

          <h3 className="fw-bold">Rachita Laad</h3>

          <p className="text-muted">Investor & Portfolio Manager</p>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-md-6 mb-3">
            <h6 className="text-muted">Email</h6>

            <p className="fw-semibold">rachita@example.com</p>
          </div>

          <div className="col-md-6 mb-3">
            <h6 className="text-muted">Mobile</h6>

            <p className="fw-semibold">+91 98765 43210</p>
          </div>

          <div className="col-md-6 mb-3">
            <h6 className="text-muted">Risk Preference</h6>

            <p className="fw-semibold">Moderate</p>
          </div>

          <div className="col-md-6 mb-3">
            <h6 className="text-muted">Member Since</h6>

            <p className="fw-semibold">June 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
