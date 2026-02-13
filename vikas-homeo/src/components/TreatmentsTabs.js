import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TreatmentsTabs.css";

export default function TreatmentsTabs() {
  const [activeTab, setActiveTab] = useState("homeopathy");
  const navigate = useNavigate();

  return (
    <section className="treatments-section">
      <h2 className="section-title">Our Treatments</h2>
      <p className="section-subtitle">
        We offer natural, holistic treatments focused on long-term healing and
        overall wellness.
      </p>

      {/* Tabs */}
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

      {/* HOMEOPATHY */}
      {activeTab === "homeopathy" && (
        <>
          <div className="cards-grid">
            <div className="treatment-card">
              <div className="icon">✋</div>
              <h3>Psoriasis</h3>
              <p>Natural treatment that addresses the root cause and reduces recurrence.</p>
            </div>

            <div className="treatment-card">
              <div className="icon">🧠</div>
              <h3>Migraine / Headaches</h3>
              <p>Effective relief from chronic headaches without dependency on painkillers.</p>
            </div>

            <div className="treatment-card">
              <div className="icon">🩺</div>
              <h3>Piles (Haemorrhoids)</h3>
              <p>Safe and gentle treatment that relieves pain, bleeding, and discomfort.</p>
            </div>

            <div className="treatment-card">
              <div className="icon">🌿</div>
              <h3>Warts</h3>
              <p>Non-invasive treatment that removes warts by strengthening immunity.</p>
            </div>

            <div className="treatment-card">
              <div className="icon">🧴</div>
              <h3>Pityriasis</h3>
              <p>Holistic care for skin conditions with long-lasting improvement.</p>
            </div>

            <div className="treatment-card">
              <div className="icon">🌬️</div>
              <h3>Sinusitis</h3>
              <p>Reduces sinus inflammation, congestion, and recurrent infections.</p>
            </div>
          </div>

          <button
            className="view-all-btn"
            onClick={() => navigate("/treatments")}
          >
            View All Treatments
          </button>
        </>
      )}

      {/* NATUROPATHY */}
      {activeTab === "naturopathy" && (
        <>
          <div className="cards-grid">
            <div className="treatment-card">
              <div className="icon">🧬</div>
              <h3>PCOS</h3>
              <p>Diet and lifestyle-based support to improve hormonal balance naturally.</p>
            </div>

            <div className="treatment-card">
              <div className="icon">🦋</div>
              <h3>Thyroid Disorders</h3>
              <p>Nutritional and lifestyle guidance to support thyroid health.</p>
            </div>

            <div className="treatment-card">
              <div className="icon">❤️</div>
              <h3>Blood Pressure</h3>
              <p>Natural methods to regulate blood pressure and reduce complications.</p>
            </div>

            <div className="treatment-card">
              <div className="icon">⚖️</div>
              <h3>Obesity-related Hormonal Imbalance</h3>
              <p>Customized diet plans to improve metabolism and hormonal health.</p>
            </div>

            <div className="treatment-card">
              <div className="icon">🥗</div>
              <h3>Gall Bladder Stones</h3>
              <p>Diet and lifestyle support to manage symptoms and prevent recurrence.</p>
            </div>

            <div className="treatment-card">
              <div className="icon">💧</div>
              <h3>Nephrolithiasis (Kidney Stones)</h3>
              <p>Natural dietary guidance to reduce stone formation and pain.</p>
            </div>
          </div>

          <button
            className="view-all-btn"
            onClick={() => navigate("/treatments")}
          >
            View All Treatments
          </button>
        </>
      )}
    </section>
  );
}
