import React, { useState } from "react";
import "./VikasHomoeo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import clinicImg from "../../asessts/logo.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import review1 from "../../asessts/reviews/review1.png";
import review2 from "../../asessts/reviews/review2.png";
import review3 from "../../asessts/reviews/review3.png";
import review4 from "../../asessts/reviews/review4.png";
import review5 from "../../asessts/reviews/review5.png";
import review6 from "../../asessts/reviews/review6.png";
import review7 from "../../asessts/reviews/review7.png";
import review8 from "../../asessts/reviews/review8.png";
import review9 from "../../asessts/reviews/review9.png";
import review10 from "../../asessts/reviews/review10.png";
import review11 from "../../asessts/reviews/review11.png";

export default function VikasHomoeo() {
  const galleryImages = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10,
    review11,
  ];

  const [activeTab, setActiveTab] = useState("function");
  const [fade, setFade] = useState(true);

  const changeTab = (tab) => {
    setFade(false);

    setTimeout(() => {
      setActiveTab(tab);
      setFade(true);
    }, 150);
  };

  const tabData = {
    function: [
      "We take the consultations on a prior appointment basis only.",
      "We will get back to you within 2–3 working days.",
      "You will receive a call from our clinic front desk.",
      "Consultation fees must be paid to confirm your appointment.",
      "Appointments are provided as per payment sequence.",
      "Please send your case details before consultation.",
    ],

    person: [
      "The 1st consultation is the most important session.",
      "Please reach clinic at least 15 minutes early.",
      "Late arrival will result in rescheduling.",
      "Another date will be given based on availability.",
      "Paid amount is non-refundable.",
      "We follow strict clinic schedule.",
    ],

    online: [
      "Zoom link will be provided by front desk.",
      "Join at least 15 minutes before consultation.",
      "Keep phone silent during consultation.",
      "Ensure stable internet connection.",
      "Late joining will result in rescheduling.",
      "Paid amount is non-refundable.",
    ],
  };

  return (
    <section className="about-section">
      {/* TOP SECTION */}

      <div className="about-container">
        <div className="about-image">
          <img src={clinicImg} alt="clinic" />
        </div>

        <div className="about-content">
          <p className="about-subtitle">VIKAS HOMOEOPATHY</p>

          <h2 className="about-title">A Leading Visionary in Homeopathy</h2>

          <p className="about-text">
            Vikas Homeopathy provides safe, natural, and effective treatments
            using holistic homeopathic principles.We focus on identifying the
            root cause and providing personalized healing solutions for
            long-term wellness.We have successfully treated thousands of
            patients with excellent results.
          </p>
        </div>
      </div>

      {/* TABS */}

      <div className="about-tabs-section">
        <div className="tabs-header">
          <button
            className={activeTab === "function" ? "active" : ""}
            onClick={() => changeTab("function")}
          >
            HOW WE FUNCTION
          </button>

          <button
            className={activeTab === "person" ? "active" : ""}
            onClick={() => changeTab("person")}
          >
            IN PERSON CONSULTATION
          </button>

          <button
            className={activeTab === "online" ? "active" : ""}
            onClick={() => changeTab("online")}
          >
            ONLINE CONSULTATION
          </button>
        </div>

        <div className={`tabs-content ${fade ? "fade-in" : "fade-out"}`}>
          <ul>
            {tabData[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* COLLAGE GALLERY */}

      <div className="gallery-section">
        <p className="gallery-subtitle">OUR CLINIC</p>

        <h2 className="gallery-title">Photo Gallery</h2>

        {/* DESKTOP COLLAGE */}
        <div className="gallery-bg">
          <div className="collage-grid desktop-gallery">
            {galleryImages[0] && (
              <img
                src={galleryImages[0]}
                className="collage-item item-large"
                alt=""
              />
            )}

            {galleryImages.slice(1, 7).map((img, index) => (
              <img
                src={img}
                key={index}
                className={`collage-item item-${index + 1}`}
                alt=""
              />
            ))}
          </div>

          {/* MOBILE & TABLET SLIDER */}

          <div className="gallery-slider">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={15}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },

                600: {
                  slidesPerView: 2,
                },

                1024: {
                  slidesPerView: 2,
                },
              }}
            >
              {galleryImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} className="slider-image" alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="gallery-more">
          <a href="/gallery">View More Images →</a>
        </div>
      </div>
    </section>
  );
}
