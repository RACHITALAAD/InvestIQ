import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all the fields.");
      return;
    }

    alert("Thank you for reaching out! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      style={{
        background: "#F7FBFB",
        padding: "70px 0",
      }}
    >
      <div className="container d-flex justify-content-center">
        <div
          className="bg-white shadow-sm rounded-4 p-5"
          style={{
            maxWidth: "498px",
            width: "100%",
          }}
        >
          <div className="text-center mb-4">
            <h2
              className="fw-bold"
              style={{
                fontSize: "23px",
                color: "#008080",
              }}
            >
              Contact InvestIQ
            </h2>

            <p className="text-muted mb-0">
              Have a question or feedback? Fill out the form below
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>

              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>

              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Message</label>

              <textarea
                rows="5"
                className="form-control"
                name="message"
                placeholder="Write your message here...."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn w-100 fw-semibold"
              style={{
                backgroundColor: "#008080",
                color: "#fff",
                padding: "12px",
                border: "none",
                borderRadius: "10px",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
