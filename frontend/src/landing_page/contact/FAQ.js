import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is InvestIQ?",
      answer:
        "InvestIQ is a virtual investment platform where you can manage funds, holdings, orders, and track your portfolio performance.",
    },
    {
      question: "Can I buy and sell stocks?",
      answer:
        "Yes. You can simulate buying and selling stocks using the available virtual balance.",
    },
    {
      question: "How can I track my investments?",
      answer:
        "Your dashboard provides ypur portfolio value, holdings, recent transactions, and performance insights in one place.",
    },
    {
      question: "Need additional help?",
      answer: "Use the contact form above to share your questions or feedback.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              fontSize: "23px",
              color: "#008080",
            }}
          >
            Frequently Asked Questions
          </h2>

          <p className="text-muted">
            Quick answers to commonly asked questions.
          </p>
        </div>

        <div
          className="accordion mx-auto"
          id="faqAccordion"
          style={{
            maxWidth: "850px",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              className="accordion-item border-0 shadow-sm rounded-4 mb-3 overflow-hidden"
              key={index}
            >
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  } fw-semibold`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                  style={{
                    backgroundColor: "#F7FBFB",
                    color: "#212529",
                    boxShadow: "none",
                  }}
                >
                  {faq.question}
                </button>
              </h2>

              <div
                id={`faq${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                data-bs-parent="#faqAccordion"
              >
                <div
                  className="accordion-body"
                  style={{
                    color: "#6c757d",
                    lineHeight: "1.7",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
