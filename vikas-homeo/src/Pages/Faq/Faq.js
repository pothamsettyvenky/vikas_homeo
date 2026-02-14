import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "Is homeopathy a steroid?",
    answer:
      "No. Homeopathy medicines are natural and do not contain steroids. They work by stimulating the body's healing system."
  },
  {
    question:
      "Is homeopathy safe for pregnant women and infants or children?",
    answer:
      "Yes, homeopathy is safe for pregnant women, infants, and children. It helps manage post-partum complaints and supports overall health."
  },
  {
    question: "How long does homeopathy treatment take?",
    answer:
      "Treatment duration depends on the condition, severity, and individual response."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="faq-section">
    <div className = "faq-heading">
            <p className = "faq-subtitle"> 
            FAQ</p>
             <h2 className="faq-title">Frequently Ask Questions</h2>
    </div>

     

      <div className="faq-container">

        {faqData.map((item, index) => (
          <div key={index} className="faq-item">

            <div className="faq-question">

              <span>{item.question}</span>

              <button
                className={`faq-icon ${
                  openIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {openIndex === index ? "⌃" : "?"}
              </button>

            </div>

            <div
              className={`faq-answer ${
                openIndex === index ? "show" : ""
              }`}
            >
              {item.answer}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
