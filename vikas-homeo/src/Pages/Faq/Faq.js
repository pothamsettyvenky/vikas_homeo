import React, { useState } from "react";
import "./Faq.css";
import faqData from "../../data/faq.json"

export default function FAQ({ variant = "default" }) {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`faq-section faq-${variant}`}>

      <div className="faq-heading">
        <p className="faq-subtitle">FAQ</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>
      </div>

      <div className="faq-container">

        {faqData.faqs.map((item, index) => (
          <div key={index} className="faq-item">

            <div className="faq-question">

              <span>{item.question}</span>

              <button
                className={`faq-icon ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                {openIndex === index ? "⌃" : "+"}
              </button>

            </div>

            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              {item.answer}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}