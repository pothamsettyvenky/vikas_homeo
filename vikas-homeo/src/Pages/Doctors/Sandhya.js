import React from "react";
import "./VikasClinic.css";
import { useNavigate } from "react-router-dom";

export default function Sandhya() {
  const navigate = useNavigate();

  const galleryImages = [
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f",
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    "https://images.unsplash.com/photo-1584515933487-779824d29309",
  ];

  return (
    <section className="credits-page">
      <div className="credits-container">
        {/* TITLE */}

        <h1>Dr. Sandhya Ballipalli</h1>
        <p className="doctor-role">
          Co-Founder of Dr vikas homoeopathy and naturopathy clinic
        </p>
        <p className="credits-role">
         Consultant Physician | Holistic Care Specialist
        </p>

        {/* IMAGE + PARAGRAPH */}

        <div className="vikas-intro">
          <div className="vikas-image">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
              alt="Dr Vikas"
            />
            <button
              className="appointment-btn"
              onClick={() => navigate("/contact#appointment")}
            >
              Book an Appointment
            </button>
          </div>

          <div className="vikas-text">
            <p>
              Dr. Sandhya Ballipalli is a highly skilled and compassionate
              holistic healthcare specialist with extensive experience in
              Acupuncture, Ozone Therapy, Cupping Therapy, and Naturopathy. She
              is dedicated to helping patients achieve optimal health through
              safe, natural, and scientifically supported therapies. Her
               approach focuses on restoring balance in the body by stimulating
               the body's natural healing mechanisms and addressing the root
               causes of disease.
            </p>
          </div>
        </div>

        {/* FULL WIDTH PARAGRAPHS */}

        <div className="vikas-full-text">
          <p>
           She has successfully treated patients suffering from chronic
                pain, hormonal imbalance, stress-related disorders, fatigue, and
                metabolic conditions. Through her expertise in acupuncture, she
                helps improve energy flow, enhance circulation, and promote
                natural healing. Her ozone therapy treatments support immune
                system strengthening, detoxification, and faster tissue
                recovery.
          </p>

          <p>
            Dr. Sandhya specializes in cupping therapy, which is highly
            effective for pain management, muscle recovery, inflammation
            reduction, and improving blood circulation. Her treatments help
            patients suffering from back pain, neck pain, joint pain, migraines,
            and stress-related conditions. She uses advanced techniques that
            ensure safe and effective results while enhancing overall wellness.
          </p>
          <p>
            Dr. Sandhya believes that true healing occurs when the body, mind,
           and lifestyle are in harmony. She provides personalized treatment
             plans tailored to each patient’s individual needs. Her compassionate
             care, combined with modern holistic therapies, helps patients
             achieve lasting health, improved energy levels, and better quality
             of life.
          </p>
        </div>

        {/* GALLERY */}

        <h2 className="gallery-title">Clinic Gallery</h2>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt="Clinic" />
            </div>
          ))}
        </div>

        {/* BUTTONS */}

        <div className="vikas-buttons">
          <button className="gallery-btn" onClick={() => navigate("/gallery")}>
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
