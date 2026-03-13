import React, { useState } from "react";
import "./gallery.css";

const images = [
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175376/galleryy8_nolacq.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175370/gallery9_llz90r.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175774/gallery11_jupuah.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175370/gallery10_hl2dwt.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175369/gallery7_roemag.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175369/gallery4_ry0rq8.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery1_rtrcj8.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176508/gallery14_vnijmm.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery6_ydlazk.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery5_ztdfnq.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176508/gallery13_cbgzee.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery2_d3j1yx.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176508/gallery15_pw8cdm.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery3_pezfbk.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333880/gallery28_z5pq25.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333880/gallery27_zadzpr.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333879/gallery25_p6goy1.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333879/gallery24_i8kvth.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333879/gallery23_o3ha5s.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773416376/gallery41_uabql6.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773416476/sandy_oqbekz.jpg",
  
];

export default function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    if (window.innerWidth > 768) {
      setSelectedImage(img);
    }
  };

  return (

    <section className="gallery-page">

      <div className="gallery-container">

        <h1 className="gallery-heading">
          Clinic Photo Gallery
        </h1>

        <div className="gallery-grid">

          {images.map((img, index) => (

            <div
              key={index}
              className="gallery-items"
              onClick={() => handleImageClick(img)}
            >

              <img src={img} alt="clinic" />

            </div>

          ))}

        </div>

      </div>

      {selectedImage && (

        <div className="lightbox">

          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="preview"
            className="lightbox-image"
          />

        </div>

      )}

    </section>

  );

}