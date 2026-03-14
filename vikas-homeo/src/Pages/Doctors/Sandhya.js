import React from "react";
import "./Sandhya.css";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function Sandhya() {
  const navigate = useNavigate();

  const galleryImages = [
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175376/galleryy8_nolacq.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175370/gallery10_hl2dwt.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175369/gallery4_ry0rq8.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery1_rtrcj8.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175774/gallery11_jupuah.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773336376/gallery40_jqxotl.png",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773416476/sandy_oqbekz.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333879/gallery25_p6goy1.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333879/gallery23_o3ha5s.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176508/gallery14_vnijmm.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773334096/compressed_gallery34_tnqiqx.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333878/gallery16_bx15xr.jpg",
    // "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773416376/WhatsApp_Image_2026-03-13_at_7.05.44_AM_drqjtm.jpg",
    
    
    
  ];
  const SliderImages = [
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175376/galleryy8_nolacq.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175370/gallery10_hl2dwt.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175369/gallery4_ry0rq8.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery1_rtrcj8.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175774/gallery11_jupuah.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773416476/sandy_oqbekz.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333879/gallery25_p6goy1.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333879/gallery23_o3ha5s.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176508/gallery14_vnijmm.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773334096/compressed_gallery34_tnqiqx.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333878/gallery16_bx15xr.jpg",
    // "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773416376/WhatsApp_Image_2026-03-13_at_7.05.44_AM_drqjtm.jpg",
    
    
    
  ];
const handleNavigate = (path) => {
    if (path.includes("#")) {

    const [page, hash] = path.split("#");

    navigate(page);

    setTimeout(() => {

      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

    }, 300);

  } else {

    navigate(path);

  }
  };
  return (
    <section className="vikas-page">
      <div className="vikas-container">
        {/* TITLE */}

        <h1>Dr. Sandhya</h1>
        <p className="doctor-role">
          Co-Founder of Dr Vikas Homoeopathy and Naturopathy Clinic
        </p>
        <p className="vikas-role">
         Naturopathy Physician | Holistic Care Specialist
        </p>

        {/* IMAGE + PARAGRAPH */}

        <div className="vikas-intro">
          <div className="vikas-image">
            <img
              src="https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773416476/sandy_oqbekz.jpg"
              alt="Dr Vikas"
            />
            <button
              className="appointment-btn"
              onClick={() => handleNavigate("/contact#appointment")}
            >
              Book an Appointment
            </button>
          </div>

          <div className="vikas-text">
            <p>
             Dr. Sandhya is a dedicated naturopathy physician who completed her Bachelor of Naturopathy and Yogic Sciences (BNYS), a rigorous 5½-year medical degree from Care Yoga Naturopathy Medical College and Hospital. Her education provided extensive training in natural healing sciences, therapeutic yoga, clinical nutrition, and holistic patient care.

To further advance her clinical expertise, she completed a Fellowship in Advanced Acupuncture from National Institute of Naturopathy in Pune, where she gained specialized knowledge in traditional and modern acupuncture techniques for managing various acute and chronic health conditions. She is also a Certified Ozone Therapy Practitioner accredited by Ozone Forum of India in Mumbai, enabling her to incorporate advanced ozone-based therapies in her clinical practice
            </p>
          </div>
        </div>

        {/* FULL WIDTH PARAGRAPHS */}

        <div className="vikas-full-text">
          <p>
          Dr. Sandhya focuses on a holistic and patient-centered approach, addressing the root cause of disease rather than only managing symptoms. Her treatment methods combine evidence-based naturopathy therapies such as therapeutic diet planning, acupuncture, cupping therapy, and ozone therapy to support the body’s natural healing process.
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
           She has successfully treated numerous patients suffering from chronic pain conditions, including musculoskeletal pain, joint disorders, and lifestyle-related ailments. By integrating various naturopathy techniques and individualized treatment protocols, she helps patients achieve long-term relief, improved mobility, and better overall health.

Dr. Sandhya is committed to promoting natural healing, preventive healthcare, and sustainable lifestyle practices that empower patients to maintain optimal well-being.
          </p>
        </div>

        {/* GALLERY */}

        <h2 className="gallery-title">Gallery</h2>

      <div className="sandy-gallery-bg">

  {/* DESKTOP COLLAGE */}

  <div className="sandy-collage-grid sandy-desktop-gallery">

    {galleryImages[0] && (
      <img
        src={galleryImages[0]}
        className="collage-item sandy-item-large"
        alt="clinic"
      />
    )}

    {galleryImages.slice(1, 12).map((img, index) => (
      <img
        src={img}
        key={index}
        className={`sandy-collage-item sandy-item-${index + 1}`}
        alt="clinic"
      />
    ))}

  </div>


  {/* MOBILE / TABLET SLIDER */}

  <div className="gallery-slider">

    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={15}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      }}
    >

      {SliderImages.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} className="slider-image" alt="clinic" />
        </SwiperSlide>
      ))}

    </Swiper>

  </div>

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
