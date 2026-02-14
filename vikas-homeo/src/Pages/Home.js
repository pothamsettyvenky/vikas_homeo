import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import AppointmentStrip from "../components/AppointmentStrip";
import TreatmentsTabs from "../components/TreatmentsTabs";
import TherapyCards from "../components/TherapyCards";
import Testimonials from "./Testmonials/Testimonials";
import FAQ from "./Faq/Faq";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <section className="home-slider">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
        >
          {/* SLIDE 1 – HOMEOPATHY */}
          <SwiperSlide>
            <div className="custom-slide slide-hospital">
              <div className="slide-overlay"></div>
              <div className="slide-content left-text">
                <div className="slide-text">
                  <h1 className="title">
                    Vikas Homoeopathy & Naturopathy Clinic
                  </h1>
                  <p>
                    A trusted center for holistic healthcare, combining gentle,
                    natural, and effective homoeopathy with naturopathy and
                    wellness therapies to support balanced, long-term health.
                  </p>
                </div>
                <div className="slide-image">
                  {/* <img src="/images/hospital.jpg" alt="Vikas Homeopathy" /> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom-slide slide-healing">
              <div className="slide-overlay"></div>
              <div className="slide-content left-text">
                <div className="slide-text">
                  <h1 className="title">
                    Healing from the roots through homeopathy
                  </h1>
                  <p>
                    Using an integrated system of medicine improves patients
                    overall healing process enabling individuals to balance
                    body, mind and soul.
                  </p>
                </div>
                <div className="slide-image">
                  {/* <img src="/images/hospital.jpg" alt="Vikas Homeopathy" /> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom-slide slide-mental">
              <div className="slide-overlay"></div>
              <div className="slide-content left-text">
                <div className="slide-text">
                  <h1 className="title">Homoeopathy for metal health</h1>
                  <p>
                    Soothing the mind how Homoeopathy enhances emotional health
                    Homoeopathy offers a safe and effective approach to long
                    term wellness .
                  </p>
                </div>
                <div className="slide-image">
                  {/* <img src="/images/hospital.jpg" alt="Vikas Homeopathy" /> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom-slide slide-homeopathy">
              <div className="slide-overlay"></div>
              <div className="slide-content left-text">
                <div className="slide-text">
                  <h1>Homoeopathy</h1>
                  <p>
                    Natural and gentle treatment focused on addressing the root
                    cause of illness. Safe remedies that support the body’s
                    natural healing and long-term wellness.
                  </p>
                </div>
                <div className="slide-image">
                  {/* <img src="/images/homeopathy.jpg" alt="Homeopathy" /> */}
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 – NATUROPATHY */}
          <SwiperSlide>
            <div className="custom-slide slide-naturopathy">
              <div className="slide-overlay"></div>
              <div className="slide-content left-text">
                <div className="slide-text">
                  <h1>Naturopathy</h1>
                  <p>
                    Personalized diet plans based on natural foods and lifestyle
                    correction. Supports digestion, immunity, weight management,
                    and preventive care.
                  </p>
                </div>
                <div className="slide-image">
                  {/* <img src="/images/naturopathy.jpg" alt="Naturopathy" /> */}
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 – ACUPUNCTURE */}
          <SwiperSlide>
            <div className="custom-slide slide-acupuncture">
              <div className="slide-overlay"></div>
              <div className="slide-content left-text">
                <div className="slide-text">
                  <h1>Acupuncture</h1>
                  <p>
                    Effective therapy for pain relief, stress reduction, and
                    energy balance. Helps improve circulation, mobility, and
                    overall wellbeing.
                  </p>
                </div>
                <div className="slide-image">
                  {/* <img src="/images/acupuncture.jpg" alt="Acupuncture" /> */}
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 4 – DIET */}
          <SwiperSlide>
            <div className="custom-slide slide-diet">
              <div className="slide-overlay from-left"></div>
              <div className="slide-content right-text ">
                <div className="slide-text">
                  <h1>Diet & Nutrition</h1>
                  <p>
                    Personalized diet and nutrition guidance to support natural
                    healing and overall wellness. Focuses on balanced, wholesome
                    foods to improve digestion, boost immunity, manage weight,
                    and promote long-term health through sustainable eating
                    habits.
                  </p>
                </div>
                <div className="slide-image">
                  {/* <img src="/images/diet.jpg" alt="Diet" /> */}
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 5 – CUPPING */}
          <SwiperSlide>
            <div className="custom-slide slide-cupping">
              <div className="slide-overlay"></div>
              <div className="slide-content left-text">
                <div className="slide-text">
                  <h1>Cupping Therapy</h1>
                  <p>
                    Therapeutic cupping to improve blood flow and release muscle
                    tension. Helpful for pain relief, detoxification, and faster
                    recovery.
                  </p>
                </div>
                <div className="slide-image">
                  {/* <img src="/images/cupping.jpg" alt="Cupping" /> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom-slide slide-ozone">
              <div className="slide-overlay"></div>
              <div className="slide-content left-text">
                <div className="slide-text">
                  <h1>Ozone</h1>
                  <p>
                    A natural therapy that enhances oxygen delivery, strengthens
                    immunity, and supports faster healing. Helps improve
                    circulation, reduce inflammation, and promote overall
                    wellness safely and effectively..
                  </p>
                </div>
                <div className="slide-image">
                  {/* <img src="/images/cupping.jpg" alt="Cupping" /> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* DOCTOR SECTION */}
      <section className=" our-doctors ">
        <h2 className=" section-title ">Our Doctors</h2>
        <div className=" doctor-profile ">
          <div className="doctor-details">
            <h3 className="doctor-name"> Dr. Vikas Ballipalli</h3>
            <p className="doctor-qualifications">M.D (HOM), F,Hom</p>
            <p>
              Dr. Vikas is a dedicated homeopathic physician with a strong focus
              on holistic healing, personalized care, and long-term wellness.
            </p>
            <p>
              His clinical practice emphasizes understanding the root cause of
              illness and guiding patients toward sustainable health through
              natural therapies.
            </p>
            <button
              onClick={() => navigate("/about/dr-vikas")}
              className="read-more-btn"
            >
              {" "}
              Read Button{" "}
            </button>
          </div>
          <div className="doctor-portrait">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
              alt="Dr. Vikas"
            />
          </div>
        </div>
        <div className="doctor-profile reverse">
          <div className="doctor-details">
            <h3 className="doctor-name">Dr. Sandhya Ballipalli</h3>

            <p className="doctor-qualifications">
              Consultant Physician | Holistic Care Specialist
            </p>

            <p>
              Dr. Sandhya brings a compassionate and patient-centered approach
              to healthcare, with expertise in preventive medicine and lifestyle
              guidance.
            </p>

            <p>
              She believes in empowering patients through education, nutrition,
              and natural treatment approaches.
            </p>

            <button
              onClick={() => navigate("/about/dr-sandhya")}
              className="read-more-btn"
            >
              Read More
            </button>
          </div>

          <div className="doctor-portrait">
            <img
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
              alt="Dr. Sandhya"
            />
          </div>
        </div>
      </section>

      <AppointmentStrip />
      <TreatmentsTabs />
      <TherapyCards />
      <Testimonials />
      <FAQ />

      {/* FOOTER */}
    </div>
  );
}
