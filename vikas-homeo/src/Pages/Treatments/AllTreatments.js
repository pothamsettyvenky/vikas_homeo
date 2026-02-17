import React, { useState } from "react";
import "./AllTreatments.css";

import treatmentsData from "../../data/treatment.json";

import defaultImg from "../../asessts/logo.jpeg";

import Testimonials from "../Testmonials/Testimonials";
import FAQ from "../Faq/Faq";

export default function AllTreatments() {

  const [activeTab, setActiveTab] = useState("homeopathy");

  const treatments =
    activeTab === "homeopathy"
      ? treatmentsData.homeopathy
      : treatmentsData.naturopathy;

  // function to safely get image
  const getImage = (imagePath) => {

    if (!imagePath) return defaultImg;

    // if image is from public folder
    if (imagePath.startsWith("/")) {
      return imagePath;
    }

    return defaultImg;
  };

  return (
    <section className="treatments-page">

      <div className="treatments-container">

        <p className="treatments-subtitle">
          OUR TREATMENTS
        </p>

        <h2 className="treatments-title">
          Specialized Healing Solutions
        </h2>


        {/* TABS */}

        <div className="treatments-tabs">

          <button
            className={
              activeTab === "homeopathy"
                ? "tab-button active"
                : "tab-button"
            }
            onClick={() => setActiveTab("homeopathy")}
          >
            Homoeopathy
          </button>

          <button
            className={
              activeTab === "naturopathy"
                ? "tab-button active"
                : "tab-button"
            }
            onClick={() => setActiveTab("naturopathy")}
          >
            Naturopathy
          </button>

        </div>


        {/* CARDS */}

        <div className="treatments-grid">

          {treatments.map((treatment, index) => (

            <div key={index} className="treatment-card">

              <img
                src={getImage(treatment.image)}
                alt={treatment.name}
                className="treatment-img"

                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImg;
                }}
              />

              <div className="treatment-content">

                <h3 className="treatment-name">
                  {treatment.name}
                </h3>

                <p className="treatment-description">
                  {treatment.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>


      <br /><br /><br /><br />

      <Testimonials />

      <FAQ />

    </section>
  );
}
