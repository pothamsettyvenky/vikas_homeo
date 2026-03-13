import React, { useState } from "react";
import "./VikasHomoeo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";

export default function VikasHomoeo() {

  const navigate = useNavigate();

  /* CLOUDINARY IMAGES */

  const galleryImages = [
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175370/gallery10_hl2dwt.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175370/gallery9_llz90r.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175376/galleryy8_nolacq.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175369/gallery7_roemag.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333879/gallery25_p6goy1.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333879/gallery24_i8kvth.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery5_ztdfnq.jpg"
  ];

   const sliderImages = [
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175376/galleryy8_nolacq.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175370/gallery10_hl2dwt.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175369/gallery4_ry0rq8.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery1_rtrcj8.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175774/gallery11_jupuah.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176508/gallery14_vnijmm.jpg",
    
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
          <img src="https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery1_rtrcj8.jpg" alt="clinic" />
        </div>

        <div className="about-content">

          <p className="about-subtitle">
            Dr VIKAS
            <span className="subtitle-line">
              HOMOEOPATHY & NATUROPATHY CLINIC
            </span>
          </p>

          <h2 className="about-title">
            Pioneering Holistic Homeopathic Healing
          </h2>

          <p className="about-text">
            Dr Vikas Homoeopathy and Naturopathy Clinic provides safe,
            natural, and effective treatments using holistic homeopathic
            principles. We focus on identifying the root cause and providing
            personalized healing solutions for long-term wellness.
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


      {/* PHOTO GALLERY */}

      <div className="gallery-section">

        <p className="gallery-subtitle">
          OUR CLINIC
        </p>

        <h2 className="gallery-title">
          Photo Gallery
        </h2>

        <div className="gallery-bg">

          {/* DESKTOP COLLAGE */}

          <div className="collage-grid desktop-gallery">

            {galleryImages[0] && (
              <img
                src={galleryImages[0]}
                className="collage-item item-large"
                alt="clinic"
              />
            )}

            {galleryImages.slice(1, 7).map((img, index) => (

              <img
                src={img}
                key={index}
                className={`collage-item item-${index + 1}`}
                alt="clinic"
              />

            ))}

          </div>


          {/* MOBILE / TABLET SLIDER */}

          <div className="gallery-slider">

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={15}
              autoplay={{ delay: 1000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
            >

              {sliderImages.map((img, index) => (

                <SwiperSlide key={index}>
                  <img src={img} className="slider-image" alt="clinic" />
                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </div>


        {/* VIEW MORE BUTTON */}

        <div className="gallery-more">

          <button onClick={() => navigate("/gallery")}>
            View More Images →
          </button>

        </div>

      </div>

    </section>

  );

}