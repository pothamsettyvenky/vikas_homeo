import { useEffect, useRef } from "react";
import "./AppointmentStrip.css";

export default function AppointmentStrip() {
  const stripRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stripRef.current.classList.add("animate");
        }
      },
      { threshold: 0.25 },
    );

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="appointment-strip" ref={stripRef}>
      <div className="appointment-wrapper">
        <div className="appointment-box emergency">
          <h3>Please Call Us at</h3>
          <span className="phone">+91 73968 03203</span>
           <span className="phone">+91 80960 50488</span>
        </div>

        <div className="appointment-box hours">
          <h3>Opening Hours</h3>

          <div className="hours-item">
            {/* <span className="dot"></span> */}
            <div className="hours-text">
              <strong>Mon–Sat:</strong>
              <p>
                9:30 am–1:30 pm | <br />
                5:30 pm–9:00 pm
              </p>
            </div>
          </div>

          <div className="hours-item">
            {/* <span className="dot"></span> */}
            <div className="hours-text">
              <strong>Sunday:</strong>
              <p>9:30 am–1:30 pm</p>
            </div>
          </div>
        </div>

        <div className="appointment-box form">
          <h3>Book an Appointment</h3>
          <p>
            Fill the form and our team will schedule the appointment for you
          </p>

          <div className="form-grid">
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Phone" />
            <input type="email" placeholder="Email" />

            <select>
              <option value="">Select Treatment</option>
              <option value="homeopathy">Homeopathy</option>
              <option value="naturopathy">Naturopathy</option>
              <option value="acupuncture">Acupuncture</option>
              <option value="cupping">Cupping Therapy</option>
              <option value="diet">Diet & Nutrition</option>
            </select>

            <input type="date" />
          </div>

          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </section>
  );
}
