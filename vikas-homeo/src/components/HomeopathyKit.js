import { useState } from "react";
import "./HomeopathyKit.css";

import Travelkit from "../asessts/kit/travelkit.png";
import Homekit from "../asessts/kit/homekit.png";
// import travelBasic from "../assets/kits/travel-basic.jpg";
// import travelEco from "../assets/kits/travel-eco.jpg";

export default function HomeopathyKit() {
  const [activeTab, setActiveTab] = useState("family");

  const kitData = {
    family: {
      title: "Family Kit",
      description:
        "A natural first aid solution for over 20 common ailments. Safe for all ages and easy to use.",
      kits: [
        {
          name: "Basic Kit",
          price: "₹1499",
          image: Homekit,
          features: [
            "20+ common remedies",
            "Portable and easy to use",
            "Safe for all ages",
            "Quick home solution",
          ],
        },
        {
          name: "Eco-Friendly Kit",
          price: "₹2499",
          image: Homekit,
          features: [
            "Eco premium storage box",
            "German made remedies",
            "Long shelf life",
            "Premium packaging",
          ],
        },
      ],
    },

    travel: {
      title: "Travel Kit",
      description:
        "Travel confidently with safe and effective homeopathic remedies.",
      kits: [
        {
          name: "Basic Kit",
          price: "₹699",
          image: Travelkit,
          features: [
            "Compact size",
            "Travel safe remedies",
            "Lightweight",
            "Easy to carry",
          ],
        },
        {
          name: "Eco-Friendly Kit",
          price: "₹999",
          image: Travelkit,
          features: [
            "Eco travel case",
            "German remedies",
            "Durable case",
            "Premium design",
          ],
        },
      ],
    },
  };

  const current = kitData[activeTab];

  return (
    <section className="kit-page">
      <div className="kit-header">
        <h1>Homeopathy Kits</h1>
        <p>
          Premium German-made homeopathic remedies for safe and effective care.
        </p>
      </div>

      <div className="kit-tabs">
        <button
          className={`kit-tab ${activeTab === "family" ? "active" : ""}`}
          onClick={() => setActiveTab("family")}
        >
          Family Kit
        </button>

        <button
          className={`kit-tab ${activeTab === "travel" ? "active" : ""}`}
          onClick={() => setActiveTab("travel")}
        >
          Travel Kit
        </button>
      </div>

      <div className="kit-grid">
        {current.kits.map((kit, index) => (
          <div className="kit-card" key={index}>
            {/* IMAGE */}
            <div className="kit-image">
              <img src={kit.image} alt={kit.name} />
            </div>

            <div className="kit-card-inner">
              <h3>{kit.name}</h3>

              <div className="kit-price">{kit.price}</div>

              <ul className="kit-features">
                {kit.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button className="kit-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
