import React from "react";
import "./VikasClinic.css";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function VikasClinic() {
  const navigate = useNavigate();

   const galleryImages = [
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175376/galleryy8_nolacq.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175370/gallery10_hl2dwt.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175369/gallery4_ry0rq8.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery1_rtrcj8.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175774/gallery11_jupuah.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773336376/gallery40_jqxotl.png",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333888/gallery36_wdrf9g.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333879/gallery23_o3ha5s.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176508/gallery14_vnijmm.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333880/gallery27_zadzpr.jpg",
     "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333878/gallery16_bx15xr.jpg",
    "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333880/gallery26_xvg6f9.jpg",
    
    
    
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

        <h1>Dr. Vikas Ballipalli</h1>
        <p className="doctor-role">
          Founder of Dr Vikas Homoeopathy and Naturopathy Clinic
        </p>
        <p className="vikas-role">
          Homoeopathic Physician & Holistic Health Specialist
        </p>

        {/* IMAGE + PARAGRAPH */}

        <div className="vikas-intro">
          <div className="vikas-image">
            <img
              src="https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773334345/compressed_gallery32_vzyjep.jpg"
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
              Dr. Vikas Ballipalli is a highly respected Homoeopathic Physician
              with extensive experience in providing safe, natural, and
              effective treatment for a wide range of acute and chronic health
              conditions. He completed his Homoeopathy in Maharajas institute of Homoeopathic Medical Sciences in Vizianagaram and has dedicated
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

        <h2 className="gallery-title">Gallery</h2>

        <div className="vikas-gallery-bg">

  {/* DESKTOP COLLAGE */}

  <div className="vikas-collage-grid vikas-desktop-gallery">

    {galleryImages[0] && (
      <img
        src={galleryImages[0]}
        className="collage-item vikas-item-large"
        alt="clinic"
      />
    )}

    {galleryImages.slice(1, 12).map((img, index) => (
      <img
        src={img}
        key={index}
        className={`vikas-collage-item vikas-item-${index + 1}`}
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
