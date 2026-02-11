import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    
    <div className="home">

      {/* SLIDER */}
      <section className="home-slider">
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
        </Swiper>

        <div className="slider-text">
          <h1>Embrace Natural Healing</h1>
          <p>Your Health, Our Priority</p>
        </div>
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
