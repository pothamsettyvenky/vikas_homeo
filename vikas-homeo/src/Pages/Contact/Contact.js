import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dubal8n",
        "template_2y08i23",
        form.current,
        "sr-EteUtO99BCzWtv",
      )
      .then(() => {
        alert("Appointment request sent successfully");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send email");
        console.log(error);
      });
  };

  return (
    <section className="contact-page">
      {/* TITLE */}

      <div className="contact-title-section">
        <h1>Contact Us</h1>
      </div>

      {/* GET IN TOUCH */}

      <div className="contact-container-wrapper">
        <div className="contact-container glass-panel">
          <div className="contact-left">
            <p className="contact-subtitle">GET IN TOUCH</p>

            <h2>We can Help You</h2>

            <div className="contact-line"></div>
          </div>

          <div className="contact-right">
            <div className="contact-card">
              <h3>Clinic Location</h3>

              <p>
                <a
                  href="https://www.google.com/maps/place/DR+VIKAS+HOMOEOPATHY+AND+NATUROPATHY+CLINIC/@15.833542,80.361158,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3a4a690036e01655:0xb1d342c67986b74d!2sDR.+VIKAS+HOMOEOPATHY+AND+NATUROPATHY+CLINIC!8m2!3d15.8336335!4d80.3621033!16s%2Fg%2F11x7t4n6kc!3m5!1s0x3a4a45f9f4bacaeb:0x69186a61b0dda8a8!8m2!3d15.833542!4d80.361158!16s%2Fg%2F11x7t8r7lq?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-card-link"
                >
                  Venugopala Swamy Temple,
                  <br />
                  Perala, Chirala,
                  <br />
                  Andhra Pradesh 523157
                </a>
              </p>
            </div>

            <div className="contact-card green-card">
              <h3>Email Us</h3>

              <p>
                <a
                  href="mailto:vikashomoeopathy@gmail.com"
                  className="contact-link"
                >
                  vikashomoeopathy@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-card highlight">
              <h3>Let's Talk</h3>

              <p>
                <a href="tel:+917396803203" className="contact-link">
                  +91 7396803203
                </a>
              </p>

              <p>
                <a href="tel:+918096050488" className="contact-link">
                  +91 8096050488
                </a>
              </p>
            </div>

            <div className="contact-card">
              <h3>Clinic Timings</h3>

              <p>
                Mon–Sat:
                <br />
                9:30 am–1:30 pm
                <br />
                5:30 pm–9:00 pm
              </p>

              <p>
                Sunday:
                <br />
                9:30 am–1:30 pm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}

      <div className="contact-map-wrapper">
        {/* Clickable overlay */}
        <a
          href="https://www.google.com/maps/place/DR+VIKAS+HOMOEOPATHY+AND+NATUROPATHY+CLINIC/@15.833542,80.361158,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3a4a690036e01655:0xb1d342c67986b74d!2sDR.+VIKAS+HOMOEOPATHY+AND+NATUROPATHY+CLINIC!8m2!3d15.8336335!4d80.3621033!16s%2Fg%2F11x7t4n6kc!3m5!1s0x3a4a45f9f4bacaeb:0x69186a61b0dda8a8!8m2!3d15.833542!4d80.361158!16s%2Fg%2F11x7t8r7lq?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="map-click-layer"
          aria-label="Open clinic location in Google Maps"
        ></a>

        {/* Embedded map */}
        <div className="contact-map">
          <iframe
            title="clinic-map"
            src="https://www.google.com/maps?q=15.833542,80.361158&z=17&output=embed"
            loading="lazy"
          />
        </div>
      </div>

      {/* APPOINTMENT */}

      <div className="appointment-bg">
        <div className="appointment-overlay"></div>

        <div className="contact-form-section">
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Name" required />

                <input type="text" name="phone" placeholder="Phone" required />
              </div>

              <input type="email" name="email" placeholder="Email" required />

              <select name="treatment" required>
                <option value="">Select Treatment</option>

                <option value="Homeopathy">Homeopathy</option>

                <option value="Naturopathy">Naturopathy</option>

                <option value="Acupuncture">Acupuncture</option>

                <option value="Cupping Therapy">Cupping Therapy</option>

                <option value="Diet & Nutrition">Diet & Nutrition</option>
              </select>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea name="message" placeholder="Message" required />

              <button type="submit">Book Appointment</button>
            </form>
          </div>

          <div className="appointment-text">
            <h2>Book an Appointment</h2>

            <p>
              Please fill the form and our consultant will contact you shortly.
            </p>
          </div>
        </div>
      </div>

      {/* SOCIAL */}

      <div className="contact-social">
        <p>GET IN CONNECT</p>

        <h2>Follow our Social Media</h2>
        <div className=" social-icons ">
          <a
            href="www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <FaFacebookF className="social-icon" />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <FaInstagram className="social-icon" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
