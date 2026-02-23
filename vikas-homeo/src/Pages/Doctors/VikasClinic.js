import React from "react";
import "./VikasClinic.css";
import { useNavigate } from "react-router-dom";

export default function VikasClinic() {
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

        <h1>Dr. Vikas Ballipalli</h1>
        <p className="doctor-role">
          Founder of Dr vikas homoeopathy and naturopathy clinic
        </p>
        <p className="credits-role">
          Homoeopathic Physician & Holistic Health Specialist
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
              Dr. Vikas Ballipalli is a highly respected Homoeopathic Physician
              with extensive experience in providing safe, natural, and
              effective treatment for a wide range of acute and chronic health
              conditions. He completed his M.D. in Homoeopathy and has dedicated
              his professional career to helping patients achieve long-term
              healing through gentle and holistic methods. His approach focuses
              on understanding each patient as a whole, including their physical
              health, emotional well-being, lifestyle, and individual
              constitution.
            </p>
          </div>
        </div>

        {/* FULL WIDTH PARAGRAPHS */}

        <div className="vikas-full-text">
          <p>
            Dr. Vikas believes that true healing begins by identifying and
            treating the root cause of disease rather than simply suppressing
            symptoms. He carefully studies each case in detail, taking into
            account the patient’s medical history, lifestyle factors, and unique
            health patterns. This individualized approach allows him to select
            the most appropriate remedy to stimulate the body's natural healing
            response, resulting in safe, effective, and lasting recovery.
          </p>

          <p>
            Over the years, he has successfully treated patients suffering from
            various conditions such as skin diseases, allergies, asthma, thyroid
            disorders, hormonal imbalances, autoimmune diseases, digestive
            problems, migraines, anxiety, infertility, and many other chronic
            illnesses. His treatments are gentle, non-toxic, and suitable for
            patients of all age groups, including infants, children, adults, and
            elderly individuals.
          </p>
          <p>
            Dr. Vikas is deeply committed to preventive healthcare and patient
            education. He guides patients on maintaining a healthy lifestyle
            through proper diet, stress management, and natural therapies. His
            goal is not only to treat illness but also to improve overall
            health, strengthen the immune system, and enhance quality of life.
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
