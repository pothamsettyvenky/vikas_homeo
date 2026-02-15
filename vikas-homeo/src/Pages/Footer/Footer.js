import { useNavigate } from "react-router-dom";
import "./Footer.css";
import Logo from "../../asessts/background/bg-hosipital.png";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {

  const navigate = useNavigate();

  return (

    <footer className="footer">

      <div className="footer-glass">

        <div className="footer-container">


          {/* LEFT */}
          <div className="footer-section">

            <img
              src={Logo}
              alt="Vikas Homeopathy"
              className="footer-logo"
              onClick={() => navigate("/")}
            />

            <p className="footer-desc">
              Safe, natural and holistic treatments focused on long-term healing,
              restoring balance and improving overall wellness.
            </p>


            <div className="footer-contact">

              <a href="tel:+917396803203">
                <FaPhoneAlt /> +91 7396803203
              </a>

              <a href="mailto:vikashomoeopathy@gmail.com">
                <FaEnvelope /> vikashomoeopathy@gmail.com
              </a>

              <a
                href="https://www.google.com/maps/place/DR+VIKAS+HOMOEOPATHY+AND+NATUROPATHY+CLINIC/@15.833542,80.361158,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt /> Chirala, Andhra Pradesh
              </a>

            </div>

          </div>


          {/* CENTER */}
          <div className="footer-section">

            <h3>Quick Links</h3>

            <ul className="footer-links">

              <li onClick={() => navigate("/")}>Home</li>

              <li onClick={() => navigate("/about/vikas-homeopathy")}>
                About Clinic
              </li>

              <li onClick={() => navigate("/treatments")}>
                Treatments
              </li>

              <li onClick={() => navigate("/appointment")}>
                Book Appointment
              </li>

              <li onClick={() => navigate("/contact")}>
                Contact
              </li>

            </ul>

          </div>


          {/* RIGHT */}
          <div className="footer-section">

            <h3>Follow Us</h3>

            <div className="footer-social">

              <a href="www.facebook.com" className="social-circle">
                <FaFacebookF />
              </a>

              <a href="www.instagram.com" className="social-circle">
                <FaInstagram />
              </a>

              <a href="www.youtube.com" className="social-circle">
                <FaYoutube />
              </a>

              <a href="www.whatsapp.com" className="social-circle">
                <FaWhatsapp />
              </a>

            </div>

          </div>


        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        © {new Date().getFullYear()} Vikas Homoeopathy & Naturopathy Clinic.
        All Rights Reserved.

      </div>

    </footer>

  );

}
