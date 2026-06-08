import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Information</h2>

        <p className="text-muted">
          Reach out to us through any of the following channels.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="border rounded shadow-sm p-4 text-center h-100">
            <FaEnvelope size={35} className="text-primary mb-3" />

            <h5 className="fw-bold">Email</h5>

            <p className="text-muted mb-0">support@investiq.com</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded shadow-sm p-4 text-center h-100">
            <FaPhoneAlt size={35} className="text-primary mb-3" />

            <h5 className="fw-bold">Phone</h5>

            <p className="text-muted mb-0">+91 98765 43210</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded shadow-sm p-4 text-center h-100">
            <FaMapMarkerAlt size={35} className="text-primary mb-3" />

            <h5 className="fw-bold">Location</h5>

            <p className="text-muted mb-0">India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
