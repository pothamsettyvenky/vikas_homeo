import React from "react";
import "./Quote.css";

import quoteImg1 from "../../asessts/quotes/hippocrates.jpg";
import quoteImg2 from "../../asessts/quotes/modi.jpg";
import quoteImg3 from "../../asessts/quotes/gandhi.jpg";
import quoteImg4 from "../../asessts/quotes/samuel.jpg";
import quoteImg5 from "../../asessts/quotes/srisri.jpg";
import quoteImg6 from "../../asessts/quotes/par.jpg";
import quoteImg7 from "../../asessts/quotes/quoteImg7.jpg";
import quoteImg8 from "../../asessts/quotes/quoteImg8.jpg";

export default function Quotes() {

  const quotes = [

    {
      text: "Let food be the medicine and medicine be the food.",
      author: "Hippocrates",
      image: quoteImg1,
    },

    {
      text: "Holistic healthcare remains a very big attraction. Best doctors are moving towards homeopathy. There's a mood for holistic healthcare.",
      author: "Narendra Modi",
      image: quoteImg2,
    },

    {
      text: "Homeopathy cures a greater percentage of cases than any other method of treatment.",
      author: "Mahatma Gandhi",
      image: quoteImg3,
    },

    {
      text: "The highest ideal of cure is the speedy, gentle and enduring restoration of health.",
      author: "Samuel Hahnemann",
      image: quoteImg4,
    },

    {
      text: "A drop of homeopathic medicine can change the quality of your life.",
      author: "Sri Sri Ravi Shankar",
      image: quoteImg5,
    },

    {
      text: "The art of healing comes from nature, not from the physician.",
      author: "Paracelsus",
      image: quoteImg6,
    },{
  text: "Health is the greatest possession. Contentment is the greatest treasure.",
  author: "Lao Tzu",
  image: quoteImg7,
},

{
  text: "The doctor of the future will give no medicine, but will interest his patients in the care of the human frame, in diet and in the cause and prevention of disease.",
  author: "Thomas Edison",
  image: quoteImg8,
},



{
  text: "Wherever the art of medicine is loved, there is also a love of humanity.",
  author: "Hippocrates",
  image: quoteImg1,
},

  ];

  return (

    <section className="quotes-page">

      <div className="quotes-container">

        <h2 className="quotes-title">
          Wisdom of Natural Healing
        </h2>

        {quotes.map((quote, index) => (

          <div
            key={index}
            className={`quote-card ${index % 2 === 0 ? "left" : "right"}`}
          >

            <div className="quote-image">
              <img src={quote.image} alt={quote.author} />
            </div>

            <div className="quote-content">

              <p className="quote-text">
                “{quote.text}”
              </p>

              <p className="quote-author">
                — {quote.author}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}
