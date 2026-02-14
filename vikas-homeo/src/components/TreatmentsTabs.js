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
          {/* HOMEOPATHY */}
          {activeTab === "homeopathy" && (
            <>
              <div className="cards-grid">
                <div className="treatment-card">
                  <div className="icon">🧠</div>
                  <h3>Anxiety</h3>
                  <p>
                    Gentle homeopathic remedies help calm the mind, reduce
                    stress, and restore emotional balance naturally without
                    dependency.
                  </p>
                </div>

                <div className="treatment-card">
                  <div className="icon">🌿</div>
                  <h3>Psoriasis</h3>
                  <p>
                    Treats the root cause of skin inflammation and supports
                    long-term relief with improved immunity and skin health.
                  </p>
                </div>

                <div className="treatment-card">
                  <div className="icon">🩺</div>
                  <h3>Prostate Enlargement</h3>
                  <p>
                    Helps reduce urinary discomfort, improves bladder function,
                    and supports prostate health safely and naturally.
                  </p>
                </div>

                <div className="treatment-card">
                  <div className="icon">🧩</div>
                  <h3>Autism</h3>
                  <p>
                    Supports behavioral balance, emotional stability, and
                    overall well-being through individualized holistic
                    treatment.
                  </p>
                </div>

                <div className="treatment-card">
                  <div className="icon">🧬</div>
                  <h3>PCOD</h3>
                  <p>
                    Helps regulate hormonal balance, improve menstrual health,
                    and support natural reproductive wellness.
                  </p>
                </div>

                <div className="treatment-card">
                  <div className="icon">🩹</div>
                  <h3>Hemorrhoids</h3>
                  <p>
                    Provides safe and effective relief from pain, swelling, and
                    bleeding while preventing recurrence naturally.
                  </p>
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
        </>
      )}

      {/* NATUROPATHY */}
      {activeTab === "naturopathy" && (
        <>
          {/* NATUROPATHY */}
          {activeTab === "naturopathy" && (
            <>
              <div className="cards-grid">
                <div className="treatment-card">
                  <div className="icon">⚖️</div>
                  <h3>Obesity</h3>
                  <p>
                    Natural weight management through personalized diet, detox,
                    and lifestyle correction programs.
                  </p>
                </div>

                <div className="treatment-card">
                  <div className="icon">💆</div>
                  <h3>Pain Management</h3>
                  <p>
                    Drug-free therapies to reduce chronic pain and improve
                    mobility and overall quality of life.
                  </p>
                </div>

                <div className="treatment-card">
                  <div className="icon">🦴</div>
                  <h3>Arthritis</h3>
                  <p>
                    Helps reduce joint inflammation, stiffness, and pain using
                    natural and supportive healing methods.
                  </p>
                </div>

                <div className="treatment-card">
                  <div className="icon">🧍</div>
                  <h3>Spondylitis</h3>
                  <p>
                    Improves spine flexibility, reduces inflammation, and
                    supports long-term spinal health.
                  </p>
                </div>

                <div className="treatment-card">
                  <div className="icon">⚡</div>
                  <h3>Sciatica</h3>
                  <p>
                    Relieves nerve compression pain and improves mobility
                    through targeted natural therapies.
                  </p>
                </div>

                <div className="treatment-card">
                  <div className="icon">🧘</div>
                  <h3>Stress Management</h3>
                  <p>
                    Restores mental and physical balance using holistic
                    techniques and lifestyle guidance.
                  </p>
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
        </>
      )}
    </section>
  );
}
