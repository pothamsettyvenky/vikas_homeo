import { useEffect, useRef } from "react";
import "./TherapyCards.css";

export default function TherapyCards() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="therapy-cards">

      {/* ACUPUNCTURE */}
      <div
        className="therapy-card acupuncture"
        ref={(el) => (cardsRef.current[0] = el)}
      >
        <div className="therapy-info from-left">
          <h2>Acupuncture</h2>
          <p>
            Experience effective pain relief and improved energy balance through
            precision-based acupuncture therapy.
          </p>
          <div className="divider"></div>
          <button>Contact Us Today</button>
        </div>
      </div>
       {/* DIET */}
      <div
        className="therapy-card diet right-align"
        ref={(el) => (cardsRef.current[1] = el)}
      >
        <div className="therapy-info from-right">
          <h2>Diet & Nutrition</h2>
          <p>
            Personalized diet and nutrition guidance to support natural healing
            and long-term wellness.
          </p>
          <div className="divider"></div>
          <button>Contact Us Today</button>
        </div>
      </div>

      {/* CUPPING */}
      <div
        className="therapy-card cupping"
        ref={(el) => (cardsRef.current[2] = el)}
      >
        <div className="therapy-info from-left">
          <h2>Cupping Therapy</h2>
          <p>
            Therapeutic cupping improves circulation, releases muscle tension,
            and supports natural detoxification.
          </p>
          <div className="divider"></div>
          <button>Contact Us Today</button>
        </div>
      </div>

     

    </section>
  );
}
