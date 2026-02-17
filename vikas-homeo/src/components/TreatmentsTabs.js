import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TreatmentsTabs.css";

import Anxitey from "../asessts/Treatments/Anxiety.jpg";
import Pcod from "../asessts/Treatments/Pcod.jpg";
import Autism from "../asessts/Treatments/Autism.jpg";
import Hemorrhoids from "../asessts/Treatments/Hemorrhoids.jpg";
import Prostate from "../asessts/Treatments/Prostate.png";
import Psorisas1 from "../asessts/Treatments/Psoriasis.svg";

import Obesity from "../asessts/Treatments/Obesity.jpg";
import Stress from "../asessts/Treatments/stress.jpg";
import Artithis from "../asessts/Treatments/Arthritis.png";
import Sciatia from "../asessts/Treatments/sciatica.jpg";
import Pain from "../asessts/Treatments/Pain.jpg";
import Spondy from "../asessts/Treatments/Spondylitis.jpg";

export default function TreatmentsTabs() {
  const [activeTab, setActiveTab] = useState("homeopathy");
  const [flippedCard, setFlippedCard] = useState(null);

  const navigate = useNavigate();

  const handleFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const homeopathy = [
    {
      title: "Anxiety",
      image: Anxitey,
      desc: "Gentle homeopathic remedies help calm the mind, reduce stress, and restore emotional balance naturally.",
    },
    {
      title: "Psoriasis",
      image: Psorisas1,
      desc: "Treats the root cause of skin inflammation and supports long-term relief with improved immunity.",
    },
    {
      title: "Prostate Enlargement",
      image: Prostate,
      desc: "Helps reduce urinary discomfort and supports prostate health safely and naturally.",
    },
    {
      title: "Autism",
      image: Autism,
      desc: "Supports behavioral balance and emotional stability through individualized holistic treatment.",
    },
    {
      title: "PCOD",
      image: Pcod,
      desc: "Helps regulate hormones and supports reproductive wellness naturally.",
    },
    {
      title: "Hemorrhoids",
      image: Hemorrhoids,
      desc: "Provides safe relief from pain and swelling while preventing recurrence naturally.",
    },
  ];

  const naturopathy = [
    {
      title: "Obesity",
      image: Obesity,
      desc: "Natural weight management through personalized diet and lifestyle correction.",
    },
    {
      title: "Pain Management",
      image: Pain,
      desc: "Drug-free therapies to reduce chronic pain and improve mobility.",
    },
    {
      title: "Arthritis",
      image: Artithis,
      desc: "Reduces joint inflammation and stiffness using natural healing methods.",
    },
    {
      title: "Spondylitis",
      image: Spondy,
      desc: "Improves spine flexibility and supports long-term spinal health.",
    },
    {
      title: "Sciatica",
      image: Sciatia,
      desc: "Relieves nerve compression pain and improves mobility naturally.",
    },
    {
      title: "Stress Management",
      image: Stress,
      desc: "Restores mental balance using holistic lifestyle and therapy techniques.",
    },
  ];

  const data = activeTab === "homeopathy" ? homeopathy : naturopathy;

  return (
    <section className="treatments-section">
      <h2 className="section-title">Our Treatments</h2>

      <p className="section-subtitle">
        We offer natural, holistic treatments focused on long-term healing and
        overall wellness.
      </p>

      <div className="tabs">
        <button
          className={activeTab === "homeopathy" ? "tab active" : "tab"}
          onClick={() => setActiveTab("homeopathy")}
        >
          Homeopathy
        </button>

        <button
          className={activeTab === "naturopathy" ? "tab active" : "tab"}
          onClick={() => setActiveTab("naturopathy")}
        >
          Naturopathy
        </button>
      </div>

      <div className="cards-grid">
        {data.map((item, index) => (
          <div
            key={index}
            className="flip-card"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`flip-card-inner ${
                flippedCard === index ? "flipped" : ""
              }`}
            >
              <div className="flip-card-front">
                <img
                  src={item.image}
                  alt={item.title}
                  className="treatment-image"
                />
                <h3>{item.title}</h3>
              </div>

              <div className="flip-card-back">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="view-all-btn"
        onClick={() => navigate("/treatments")}
      >
        View All Treatments
      </button>
    </section>
  );
}
