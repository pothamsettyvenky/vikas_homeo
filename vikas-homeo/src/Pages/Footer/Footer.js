import { useNavigate } from "react-router-dom";
import "./Footer.css";
import Logo from "../../asessts/logo.jpeg";

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


          {/* LEFT COLUMN */}
          <div className="footer-left">

            <img
              src={Logo}
              alt="Vikas Homoeopathy"
              className="footer-logo"
              onClick={() => navigate("/")}
            />

            <p className="footer-desc">
              Safe, natural and holistic treatments focused on long-term healing,
              restoring balance and improving overall wellness.
            </p>

            <div className="footer-contact">

              <a href="tel:+917396803203">
                <FaPhoneAlt />
                +91 80960 50488
              </a>

              <a href="mailto:vikashomoeopathy@gmail.com">
                <FaEnvelope />
                vikashomoeopathy@gmail.com
              </a>

              <a
                href="https://www.google.com/maps/place/DR+VIKAS+HOMOEOPATHY+AND+NATUROPATHY+CLINIC/@15.8336397,80.3595303,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3a4a690036e01655:0xb1d342c67986b74d!2sDR.+VIKAS+HOMOEOPATHY+AND+NATUROPATHY+CLINIC!8m2!3d15.8336335!4d80.3621033!16s%2Fg%2F11x7t4n6kc!3m5!1s0x3a4a45f9f4bacaeb:0x69186a61b0dda8a8!8m2!3d15.8336346!4d80.3621052!16s%2Fg%2F11x7t8r7lq?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt />
                Venugopala Swamy Temple,<br />
                    Perala, Chirala,<br />
                    Andhra Pradesh 523157
              </a>

            </div>

          </div>


          {/* RIGHT COLUMN */}
          <div className="footer-right">

            <div>

              <h3 className="footer-heading">Quick Links</h3>

              <ul className="footer-links">

                <li onClick={() => navigate("/")}>
                  Home
                </li>

                <li onClick={() => navigate("/about/vikas-homeopathy")}>
                  About Clinic
                </li>

                <li onClick={() => navigate("/treatments")}>
                  Treatments
                </li>

                <li onClick={() => navigate("/gallery")}>
                 Gallery
                </li>

                <li onClick={() => navigate("/contact")}>
                  Contact
                </li>

              </ul>

            </div>


            <div>

              <h3 className="footer-heading">Follow Us</h3>

              <div className="footer-social">

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>


        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="footer-bottom">

        <div className="footer-bottom-content">

    <span>
      © {new Date().getFullYear()} Vikas Homoeopathy & Naturopathy Clinic.
      All Rights Reserved.
    </span>

    <div className="footer-legal-links">

      <span onClick={() => navigate("/privacy-policy")}>
        Privacy Policy
      </span>

      <span className="footer-divider">|</span>

      <span onClick={() => navigate("/Credits")}>
        Credits
      </span>

    </div>

  </div>

      </div>

    </footer>

  );

}
