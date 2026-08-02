import "./HomeopathyKits.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeopathyKits() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Pediatric Kit",
      sectionTitle: "Children Kit (Pediatric Kit)",
      image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482432/kit1_exxnnc.jpg",
      description: "Safe and gentle homoeopathic remedies for common childhood conditions.",
    },
    {
      label: "Travel Kit",
      sectionTitle: "Travel Kit",
      image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482432/kit3_x2rfov.jpg",
      description: "Compact homoeopathy medicine kit for travel care.",
    },
    {
      label: "First Aid Kit",
      sectionTitle: "First Aid Kit",
      image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482433/kit5_xjlkyu.jpg",
      description: "A kit of homoeopathy first aid medicines for all common ailments.",
    },
  ];

  const active = tabs[activeTab];

  const goToFullKit = (sectionTitle) => {
    // Redirect to the full kits page, scrolled to this specific kit section
    navigate("/Homeopathy_Kit", { state: { scrollTo: sectionTitle } });
  };

  return (
    <section className="kits-preview">
      <h2 className="section-title">Homoeopathy Kits</h2>
      <p className="kits-subtitle">
        Premium German-made homoeopathic remedies, curated for every need.
      </p>

      <div className="kits-tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`kits-tab-btn ${activeTab === i ? "active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="kits-preview-card">
        <div className="kits-preview-image">
          <img src={active.image} alt={active.label} />
        </div>
        <div className="kits-preview-details">
          <h3>{active.label}</h3>
          <p>{active.description}</p>
          <button
            className="kits-view-btn"
            onClick={() => goToFullKit(active.sectionTitle)}
          >
            View {active.label}
          </button>
        </div>
      </div>

      <button
        className="kits-viewall-btn"
        onClick={() => navigate("/Homeopathy_Kit")}
      >
        View All Kits
      </button>
    </section>
  );
}