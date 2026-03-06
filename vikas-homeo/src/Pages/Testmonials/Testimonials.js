import React from "react";
import useSociableKit from "../../components/useSociableKit";
import "./Testimonials.css";
import bgImage from "../../asessts/background/bg-testimonials.jpg";

export default function Testimonials() {

  useSociableKit();

  return (

    <section className="testimonials">

      <div
        className="testimonials-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="testimonials-content">

        <p className="subtitle">TESTIMONIAL</p>

        <h2 className="title">What Patients Say</h2>

        <div className="home-reviews">

          <div
            className="sk-ww-google-reviews"
            data-embed-id="25660621"
          ></div>

        </div>

        <a href="/patient-feedback" className="view-more-btn">
          View More Reviews
        </a>

      </div>

    </section>

  );
}