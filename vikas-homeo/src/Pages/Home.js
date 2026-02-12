import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    
    <div className="home">

      {/* SLIDER */}
      {/* <section className="home-slider">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          loop
        >
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528" alt="" />
          </SwiperSlide>
        </Swiper>

        <div className="slider-text">
          <h1>Embrace Natural Healing</h1>
          <p>Your Health, Our Priority</p>
        </div>
      </section> */}
      {/* SLIDER */}
<section className="home-slider">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    loop
  >

    {/* SLIDE 1 – HOMEOPATHY */}
    <SwiperSlide>
      <div className="custom-slide slide-homeopathy">
        <div className="slide-overlay"></div>
        <div className="slide-content left-text">
          <div className="slide-text">
            <h1>Homeopathy</h1>
            <p>
              Natural and gentle treatment focused on addressing the root cause of illness. Safe remedies that support the body’s natural healing and long-term wellness.
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
              Personalized diet plans based on natural foods and lifestyle correction. Supports digestion, immunity, weight management, and preventive care.
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
              Effective therapy for pain relief, stress reduction, and energy balance. Helps improve circulation, mobility, and overall wellbeing.
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
        <div className="slide-overlay"></div>
        <div className="slide-content right-text">
          <div className="slide-text">
            <h1>Diet & Nutrition</h1>
            <p>
              Personalized diet and nutrition guidance to support natural healing and overall wellness. Focuses on balanced, wholesome foods to improve digestion, boost immunity, manage weight, and promote long-term health through sustainable eating habits.
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
              Therapeutic cupping to improve blood flow and release muscle tension. Helpful for pain relief, detoxification, and faster recovery.
            </p>
          </div>
          <div className="slide-image">
            {/* <img src="/images/cupping.jpg" alt="Cupping" /> */}
          </div>
        </div>
      </div>
    </SwiperSlide>

    {/* SLIDE 6 – HOSPITAL */}
    <SwiperSlide>
      <div className="custom-slide slide-hospital">
        <div className="slide-overlay"></div>
        <div className="slide-content left-text">
          <div className="slide-text">
            <h1>Vikas Homeopathy Clinic</h1>
            <p>
              A trusted center for holistic healthcare combining
              homeopathy, naturopathy, and wellness therapies.
            </p>
          </div>
          <div className="slide-image">
            {/* <img src="/images/hospital.jpg" alt="Vikas Homeopathy" /> */}
          </div>
        </div>
      </div>
    </SwiperSlide>

  </Swiper>
</section>


      {/* DOCTOR SECTION */}
      <section className="doctor-section">
        <div className="doctor-text">
          <h2>Dr. Vikas</h2>
          <p>
            Dr. Vikas is a dedicated homeopathic physician with a strong focus
            on holistic healing, personalized care, and long-term wellness.
          </p>
          <p>
            His approach emphasizes understanding the root cause of illness
            and guiding patients toward sustainable health.
          </p>
        </div>

        <div className="doctor-image">
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" alt="" />
        </div>
      </section>

      {/* CLINIC TEAM */}
      <section className="team-section">
        <h2>Clinic Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" alt="" />
            <h4>Doctor Name</h4>
            <p>Senior Consultant</p>
          </div>
          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54" alt="" />
            <h4>Doctor Name</h4>
            <p>Homeopathy Specialist</p>
          </div>
          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="" />
            <h4>Doctor Name</h4>
            <p>Clinical Assistant</p>
          </div>
        </div>
      </section>

      {/* CASE TAKING */}
      <section className="case-section">
        <h2>Case Taking</h2>
        <p>
          Case taking is the foundation of effective homeopathic treatment.
          Each patient is carefully evaluated to understand physical,
          emotional, and lifestyle factors.
        </p>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <p className="updating">Updating Soon</p>
      </section>

      {/* PATIENTS TALK */}
      <section className="testimonials-section">
        <h2>Patients Talk About Vikas Treatments</h2>
        <div className="testimonial">
          <p>
            “I experienced significant improvement after following the
            treatment plan. The care and attention were exceptional.”
          </p>
          <span>— Patient Name</span>
        </div>
        <div className="testimonial">
          <p>
            “The holistic approach helped me regain balance and confidence
            in my health.”
          </p>
          <span>— Patient Name</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Vikas Clinic. All rights reserved.</p>
      </footer>

    </div>
  );
}
