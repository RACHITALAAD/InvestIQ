import React from "react";

function FAQ() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Frequently Asked Questions</h2>
      </div>

      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              How do I create an account?
            </button>
          </h2>

          <div
            id="faq1"
            className="accordion-collapse collapse show"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Click on Get Started and complete the signup process.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
            >
              Can I upgrade my plan later?
            </button>
          </h2>

          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, you can switch plans anytime from your account settings.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
            >
              Is my portfolio data secure?
            </button>
          </h2>

          <div
            id="faq3"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              InvestIQ uses secure authentication and protected account access.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
