import React, { useState } from "react";
import "./Awards.css";

const images = [
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773334096/compressed_gallery34_tnqiqx.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773175368/gallery5_ztdfnq.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176507/gallery12_hd44oz.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176507/gallery11_pvcixy.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176508/gallery14_vnijmm.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773176508/gallery13_cbgzee.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773334067/compressed_gallery29_rhwiwt.jpg",
  "https://res.cloudinary.com/dwxbd1gg2/image/upload/v1773333888/gallery36_wdrf9g.jpg"
];

export default function Awards() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    if (window.innerWidth > 768) {
      setSelectedImage(img);
    }
  };

  return (

    <section className="awards-page">

      <div className="awards-container">

        <h1 className="awards-heading">
          Awards & Recognitions
        </h1>

        <div className="awards-grid">

          {images.map((img, index) => (

            <div
              key={index}
              className="awards-card"
              onClick={() => handleImageClick(img)}
            >

              <img src={img} alt="award" />

            </div>

          ))}

        </div>

      </div>

      {selectedImage && (

        <div className="awards-lightbox">

          <button
            className="awards-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="preview"
            className="awards-lightbox-image"
          />

        </div>

      )}

    </section>

  );

}