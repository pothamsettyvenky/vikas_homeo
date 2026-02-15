import React, { useState } from "react";
import "./AllTreatments.css";

// import JSON data
import treatmentsData from "../../data/treatment.json";

// fallback image if needed
import defaultImg from "../../asessts/logo.jpeg";
import Testimonials from "../Testmonials/Testimonials";
import FAQ from "../Faq/Faq";

export default function AllTreatments() {
  // active tab state
  const [activeTab, setActiveTab] = useState("homeopathy");

  // select treatments based on tab
  const treatments =
    activeTab === "homeopathy"
      ? treatmentsData.homeopathy
      : treatmentsData.naturopathy;

  return (
    <section className="treatments-page">
      <div className="treatments-container">
        {/* SUBTITLE */}

        <p className="treatments-subtitle">OUR TREATMENTS</p>

        {/* TITLE */}

        <h2 className="treatments-title">Specialized Healing Solutions</h2>

        {/* TABS */}

        <div className="treatments-tabs">
          <button
            className={
              activeTab === "homeopathy" ? "tab-button active" : "tab-button"
            }
            onClick={() => setActiveTab("homeopathy")}
          >
            Homoeopathy
          </button>

          <button
            className={
              activeTab === "naturopathy" ? "tab-button active" : "tab-button"
            }
            onClick={() => setActiveTab("naturopathy")}
          >
            Naturopathy
          </button>
        </div>

        {/* TREATMENT CARDS */}

        <div className="treatments-grid">
          {treatments.map((treatment, index) => (
            <div key={index} className="treatment-card">
              {/* IMAGE */}

              <img
                src={treatment.image || defaultImg}
                alt={treatment.name}
                className="treatment-img"
                onError={(e) => {
                  e.target.src = defaultImg;
                }}
              />

              {/* CONTENT */}

              <div className="treatment-content">
                <h3 className="treatment-name">{treatment.name}</h3>

                <p className="treatment-description">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     <br/>
     <br/>
     <br/>
     <br/>
     <Testimonials />
      <FAQ/>
    </section>
     
  );
}
