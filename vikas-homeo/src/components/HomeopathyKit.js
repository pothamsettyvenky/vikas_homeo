import { useState } from "react";
import "./HomeopathyKit.css";

import Travelkit from "../asessts/kit/travelkit.png";
import Homekit from "../asessts/kit/homekit.png";
// import travelBasic from "../assets/kits/travel-basic.jpg";
import travelEco from "../asessts/kit/eco_freindly.png";

export default function HomeopathyKit() {
  const [activeTab, setActiveTab] = useState("family");

  const kitData = {
    family: {
      title: "Basic Kit",
      kits: [
        {
          name: "Children Kit",
          price: "₹999",
          image: Homekit,
          description:
            "Safe and gentle remedies for common childhood conditions.",
          features: [
             "Child safe",
          "Gentle remedies",
          "Fever relief",
          "Easy use"
          ],
        },
        {
          name: "First Aid Kit",
          price: "₹1299",
          image: travelEco,
           description: "Natural emergency kit for injuries, pain, and acute conditions.",
        features: [
          "Injury relief",
          "Pain support",
          "Quick recovery",
          "Emergency care"
          ],
        },
        {
           name: "Travel Kit",
        price: "₹699",
          image: travelEco,
           description: "Compact homeopathic kit for safe and effective travel care.",
        features: [
          "Compact size",
          "Travel safe",
          "Easy carry",
          "Quick relief"
          ],
        },
        {
          name: "Family Kit",
        price: "₹1499",
          image: travelEco,
          description: "Complete homeopathy kit for everyday family health care.",
        features: [
          "Family safe",
          "Daily care",
          "Common remedies",
          "Easy use"
          ],
        },
      ],
    },

    travel: {
      title: "Eco-Friendly Kit",
      description:
        "Travel confidently with safe and effective homeopathic remedies.",
      kits: [
        {
          name: "Children Kit",
        price: "₹1499",
          image: Travelkit,
          description: "Premium eco-friendly pediatric homeopathy kit.",
        features: [
          "German remedies",
          "Eco storage",
          "Premium quality",
          "Child safe"
          ],
        },
        {
          name: "First Aid Kit",
        price: "₹1999",
          image: Travelkit,
          description: "Premium eco-friendly emergency homeopathy kit.",
        features: [
          "German remedies",
          "Eco storage",
          "Emergency care",
          "Durable case"
          ],
        },
        {
           name: "Travel Kit",
        price: "₹999",
          image: Travelkit,
            description: "Eco-friendly premium kit for travel health support.",
        features: [
          "Eco case",
          "German remedies",
          "Travel friendly",
          "Premium quality"
          ],
        },
        {
           name: "Family Kit",
        price: "₹2499",
          image: Travelkit,
           description: "Premium eco-friendly complete family care kit.",
        features: [
          "German remedies",
          "Eco storage",
          "Family safe",
          "Long shelf"
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
              <h3 className="desc">{kit.description}</h3>

              <div className="kit-price">{kit.price}</div>

              <ul className="kit-features">
                {kit.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button className="kit-btn">Call Us to Orderc</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
