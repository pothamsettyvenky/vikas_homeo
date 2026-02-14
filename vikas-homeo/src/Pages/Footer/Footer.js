import { useNavigate } from "react-router-dom";
import "./Footer.css";
import Logo from "../../asessts/background/bg-hosipital.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT — LOGO */}
        <div className="footer-section footer-left">
          <img
            src={Logo}
            alt="Vikas Homeopathy"
            className="footer-logo"
            onClick={() => navigate("/")}
          />

          <p className="footer-desc">
            Vikas Homoeopathy & Naturopathy Clinic provides safe, natural and
            holistic treatments focused on long-term healing and overall
            wellness.
          </p>
        </div>

        {/* CENTER — NAVIGATION */}
        <div className="footer-section footer-center">
          <h3>Quick Links</h3>

          <ul className="footer-links">
            <li onClick={() => navigate("/")}>Home</li>

            <li onClick={() => navigate("/about/vikas-homeopathy")}>
              About Clinic
            </li>

            <li onClick={() => navigate("/treatments")}>Treatments</li>

            <li onClick={() => navigate("/appointment")}>Book Appointment</li>

            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>

        {/* RIGHT — SOCIAL */}
        <div className="footer-section footer-right">
          <h3>Follow Us</h3>

          <div className="footer-social">
            <a href="#" target="_blank">
              Facebook
            </a>

            <a href="#" target="_blank">
              Instagram
            </a>

            <a href="#" target="_blank">
              YouTube
            </a>

            <a href="#" target="_blank">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Vikas Homoeopathy & Naturopathy Clinic. All
        Rights Reserved.
      </div>
    </footer>
  );
}
