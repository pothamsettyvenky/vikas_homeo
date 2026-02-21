import React, { useState } from "react";
import "./Contact.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import EmailForm from "../../components/EmailForm";
import AddressAutocomplete from "../../components/AddressAutocomplete";
import EmailSuccessPopup from "../../components/EmailSuccessPopup/EmailSuccessPopup";

export default function Contact() {

  const [addressData, setAddressData] = useState({
    address: "",
    lat: "",
    lng: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  function handleAddressSelect(data) {

    setAddressData({
      address: data.address,
      lat: data.lat,
      lng: data.lng
    });

  }

  return (

    <>
      <section className="contact-page">

        {/* TITLE */}

        <div className="contact-title-section">
          <h1>Contact Us</h1>
        </div>


        {/* CONTACT INFO */}

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
                    href="https://www.google.com/maps?q=15.833542,80.361158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card-link"
                  >
                    Venugopala Swamy Temple,<br />
                    Perala, Chirala,<br />
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
                  Mon–Sat:<br />
                  9:30 am–1:30 pm<br />
                  5:30 pm–9:00 pm
                </p>

                <p>
                  Sunday:<br />
                  9:30 am–1:30 pm
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* MAP */}

        <div className="contact-map-wrapper">

          <div className="contact-map">

            <iframe
              title="clinic-map"
              src="https://www.google.com/maps?q=15.833542,80.361158&z=17&output=embed"
              loading="lazy"
            />

          </div>

        </div>


        {/* FORM */}

        <div className="appointment-bg">

          <div className="appointment-overlay"></div>

          <div className="contact-form-section">

            <div className="contact-form">

              <EmailForm
                className="contact-form-inner"
                onSuccess={() => setShowPopup(true)}
                onError={() =>
                  alert("Failed to send email")
                }
              >

                <div className="form-row">

                  <input
                    name="name"
                    placeholder="Name"
                    required
                  />

                  <input
                    name="phone"
                    placeholder="Phone"
                    required
                  />

                </div>


                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />


                {/* ADDRESS AUTOCOMPLETE */}

                <AddressAutocomplete
                  onSelect={handleAddressSelect}
                />


                {/* hidden fields for EmailJS */}

                <input
                  type="hidden"
                  name="address"
                  value={addressData.address}
                />

                <input
                  type="hidden"
                  name="lat"
                  value={addressData.lat}
                />

                <input
                  type="hidden"
                  name="lng"
                  value={addressData.lng}
                />


                <select name="treatment" required>

                  <option value="">Select Treatment</option>

                  <option value="Homeopathy">
                    Homeopathy
                  </option>

                  <option value="Naturopathy">
                    Naturopathy
                  </option>

                  <option value="Acupuncture">
                    Acupuncture
                  </option>

                  <option value="Cupping Therapy">
                    Cupping Therapy
                  </option>

                  <option value="Diet & Nutrition">
                    Diet & Nutrition
                  </option>

                </select>


                <input
                  name="subject"
                  placeholder="Subject"
                  required
                />


                <textarea
                  name="message"
                  placeholder="Message"
                  required
                />


                <button type="submit">
                  Book Appointment
                </button>

              </EmailForm>

            </div>


            <div className="appointment-text">

              <h2>Book an Appointment</h2>

              <p>
                Please fill the form and our consultant
                will contact you shortly.
              </p>

            </div>

          </div>

        </div>


        {/* SOCIAL */}

        <div className="contact-social">

          <p>GET IN CONNECT</p>

          <h2>Follow our Social Media</h2>

          <div className="social-icons">

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <FaFacebookF className="social-icon" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com"
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


      {/* SUCCESS POPUP */}

      <EmailSuccessPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />

    </>
  );

}