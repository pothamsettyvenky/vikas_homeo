import React from "react";
import useSociableKit from "../../components/useSociableKit";
import "./PatientFeedback.css";

export default function PatientFeedback() {

  useSociableKit();

  return (

    <section className="feedback">

      <div className="feedback-container">

        <h1 className="feedback-title">
          Patient Feedback
        </h1>

        <div
          className="sk-ww-google-reviews"
          data-embed-id="25660621"
        ></div>

      </div>

    </section>

  );

}