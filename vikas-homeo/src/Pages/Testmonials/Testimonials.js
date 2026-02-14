import React from "react";
import "./Testimonials.css";

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

import bgImage from "../../asessts/background/bg-testimonials.jpg"; // your background image

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  review1, review2, review3, review4, review5,
  review6, review7, review8, review9, review10, review11
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      {/* Background */}
      <div
        className="testimonials-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Content */}
      <div className="testimonials-content">

        <p className="subtitle">TESTIMONIAL</p>
        <h2 className="title">What They Say</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <img src={img} alt="review" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}
