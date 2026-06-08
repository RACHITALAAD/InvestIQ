import React from "react";

function ContactForm() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="border rounded shadow-sm p-5">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Send Us a Message</h2>

              <p className="text-muted">
                Have a question or feedback? We'd love to hear from you.
              </p>
            </div>

            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Full Name</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Message</label>

                <textarea
                  rows="6"
                  className="form-control"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2"
                  style={{
                    backgroundColor: "#387ed1",
                    border: "none",
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
