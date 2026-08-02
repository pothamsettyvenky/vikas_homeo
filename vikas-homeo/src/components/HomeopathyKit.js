import "./HomeopathyKit.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomeopathyKit() {
  const location = useLocation();
  const whatsappNumber = "918096050488";

  const handleWhatsApp = (kitName) => {
    const message = `Hello, I want to order the ${kitName}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const kits = [
    {
      title: "Children Kit (Pediatric Kit)",
      items: [
        {
          variant: "Basic Kit",
          price: "₹999",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482432/kit1_exxnnc.jpg",
          description: "Safe and gentle homoeopathic remedies for common childhood conditions.",
          features: ["Child safe", "Easy to use", "Quality homoeopathic medicines"]
        },
        {
          variant: "Eco-Friendly Kit",
          price: "₹1299",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482432/kit2_wymghl.jpg",
          description: "Safe gentle homoeopathic remedies for common childhood conditions",
          features: ["Child safe", "Eco-friendly packing", "Quality homoeopathic medicines"]
        }
      ]
    },
    {
      title: "First Aid Kit",
      items: [
        {
          variant: "Basic Kit",
          price: "₹1599",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482433/kit5_xjlkyu.jpg",
          description: "A kit of homoeopathy first aid medicines for all common ailments",
          features: ["First aid care", "Easy to carry", "Quality homoeopathy medicines"]
        },
        {
          variant: "Eco-Friendly Kit",
          price: "₹2349",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482433/kit6_kbypaj.jpg",
          description: "A kit of homoeopathy first aid medicines for all common ailments.",
          features: ["First aid care", "Easy to carry", "Eco-friendly packing"]
        }
      ]
    },
    {
      title: "Travel Kit",
      items: [
        {
          variant: "Basic Kit",
          price: "₹699",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482432/kit3_x2rfov.jpg",
          description: "Compact homoeopathy medicine kit for travel care.",
          features: ["Eco-friendly packing", "Travel safe", "Quick relief", "Quality homoeopathy medicines"]
        },
        {
          variant: "Eco-Friendly Kit",
          price: "₹999",
          image: "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1784482433/kit4_lqagut.jpg",
          description: "Compact homoeopathy medicine kit for travel care.",
          features: ["Eco-friendly packing", "Travel safe", "Quick relief", "Quality homoeopathy medicines"]
        }
      ]
    },
  ];

  // default: show all kits (0 = All). If redirected from home with a specific kit, preselect it.
  const findIndexByTitle = (title) => {
    const idx = kits.findIndex((k) => k.title === title);
    return idx === -1 ? "all" : idx;
  };

  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (location.state?.scrollTo) {
      setActiveFilter(findIndexByTitle(location.state.scrollTo));
      // scroll to top of the page/section once it renders
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  const visibleKits =
    activeFilter === "all" ? kits : [kits[activeFilter]];

  return (
    <section className="kit-page">
      <div className="kit-header">
        <h1>Homeopathy Kits</h1>
        <p>
          Premium German-made homeopathic remedies for safe and effective care.
        </p>
      </div>

      {/* FILTER TABS */}
      <div className="kit-filter-tabs">
        <button
          className={`kit-filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All Kits
        </button>
        {kits.map((section, index) => (
          <button
            key={section.title}
            className={`kit-filter-btn ${activeFilter === index ? "active" : ""}`}
            onClick={() => setActiveFilter(index)}
          >
            {section.title.includes("Pediatric") ? "Pediatric Kit" : section.title}
          </button>
        ))}
      </div>

      {visibleKits.map((section, index) => (
        <div className="kit-section" key={index}>
          <h2 className="kit-section-title">{section.title}</h2>

          <div className="kit-grid">
            {section.items.map((kit, i) => (
              <div className="kit-card" key={i}>
                <div className="kit-image">
                  <img src={kit.image} alt={kit.variant} />
                </div>

                <div className="kit-card-inner">
                  <h3>{kit.variant}</h3>
                  <p className="desc">{kit.description}</p>
                  <div className="kit-price">{kit.price}</div>

                  <ul className="kit-features">
                    {kit.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <button
                    className="kit-btn"
                    onClick={() =>
                      handleWhatsApp(section.title + " - " + kit.variant)
                    }
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}