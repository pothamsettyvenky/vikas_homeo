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
      { threshold: 0.25 }
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
          <h3>Emergency?</h3>
          <p>Please Call Us at</p>
          <span className="phone">+91 73968 03203</span>
        </div>

        <div className="appointment-box hours">
          <h3>Opening Hours</h3>

          <div className="hours-item">
            <span className="dot"></span>
            <div>
              <strong>Dwarakanagar</strong>
              <p>10 AM - 8 PM</p>
            </div>
          </div>

          <div className="hours-item">
            <span className="dot"></span>
            <div>
              <strong>Gopalapatnam</strong>
              <p>9 AM - 10 AM, 9 PM - 10 PM</p>
            </div>
          </div>

          <div className="hours-item">
            <span className="dot"></span>
            <div>
              <strong>Sunday</strong>
              <p>On Appointments Based Only</p>
            </div>
          </div>
        </div>

        <div className="appointment-box form">
          <h3>Book an Appointment</h3>
          <p>Fill the form and our team will schedule the appointment for you</p>

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
