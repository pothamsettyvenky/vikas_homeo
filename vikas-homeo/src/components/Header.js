import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "../asessts/logo.jpeg";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  // Toggle submenu only on mobile
  const handleMobileToggle = (menu) => {
    if (!mobileOpen) return;
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Navigate + close mobile menu
  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
    setActiveMenu(null);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="header-left">
        <div className="logo" onClick={() => handleNavigate("/")}>
          <img src={Logo} alt="Vikas Homeopathy Clinic" />
        </div>
      </div>
      

      {/* Navigation */}
      <nav className={`nav ${mobileOpen ? "mobile-open" : ""}`}>
        <ul className="menu">
          <li className="menu-item" onClick={() => handleNavigate("/")}>
            Home
          </li>

          {/* ABOUT */}
          <li
            className="menu-item has-dropdown"
            onMouseEnter={() => !mobileOpen && setActiveMenu("about")}
            onMouseLeave={() => !mobileOpen && setActiveMenu(null)}
            onClick={() => handleMobileToggle("about")}
          >
            <span className="menu-label">About</span>
            {activeMenu === "about" && (
              <ul className="dropdown">
                <li onClick={() => handleNavigate("/about/vikas-homeopathy")}>
                  Vikas Homeopathy Clinic
                </li>
                <li onClick={() => handleNavigate("/about/dr-vikas")}>
                  Dr. Vikas Ballipalli
                </li>
                <li onClick={() => handleNavigate("/about/dr-sandhya")}>
                  Dr. Sandhya Ballipalli
                </li>
                <li onClick={() => handleNavigate("/gallery")}>Gallery</li>
              </ul>
            )}
          </li>

          {/* PATIENTS */}
          <li
            className="menu-item has-dropdown"
            onMouseEnter={() => !mobileOpen && setActiveMenu("patients")}
            onMouseLeave={() => !mobileOpen && setActiveMenu(null)}
            onClick={() => handleMobileToggle("patients")}
          >
            <span className="menu-label">Patient’s Corner</span>
            {activeMenu === "patients" && (
              <ul className="dropdown">
                <li onClick={() => handleNavigate("/faqs")}>FAQs</li>
                <li onClick={() => handleNavigate("/feedback")}>
                  Patient Feedback
                </li>
                <li onClick={() => handleNavigate("/reviews")}>
                  Google Reviews
                </li>
                <li onClick={() => handleNavigate("/case-history")}>
                  Case History Forms
                </li>
              </ul>
            )}
          </li>

          <li
            className="menu-item"
            onClick={() => handleNavigate("/treatments")}
          >
            Our Treatments
          </li>

          {/* EDUCATION */}
          <li
            className="menu-item has-dropdown"
            onMouseEnter={() => !mobileOpen && setActiveMenu("education")}
            onMouseLeave={() => !mobileOpen && setActiveMenu(null)}
            onClick={() => handleMobileToggle("education")}
          >
            <span className="menu-label">Education & Research</span>
            {activeMenu === "education" && (
              <ul className="dropdown">
                <li onClick={() => handleNavigate("/education")}>Upcoming</li>
              </ul>
            )}
          </li>

          {/* MEDIA */}
          <li
            className="menu-item has-dropdown"
            onMouseEnter={() => !mobileOpen && setActiveMenu("media")}
            onMouseLeave={() => !mobileOpen && setActiveMenu(null)}
            onClick={() => handleMobileToggle("media")}
          >
            <span className="menu-label">Media</span>
            {activeMenu === "media" && (
              <ul className="dropdown">
                <li onClick={() => handleNavigate("/awards")}>Awards</li>
                <li onClick={() => handleNavigate("/news")}>News</li>
              </ul>
            )}
          </li>
          <li
            className="menu-item"
            onClick={() => handleNavigate("/treatments")}
          >
            Contact Form
          </li>
          <li
            className="menu-item"
            onClick={() => handleNavigate("/treatments")}
          >
            Homeopathy kit
          </li>

          {/* Mobile only */}
          <li className="menu-item mobile-only">
  <button
    className="mobile-appointment-btn"
    onClick={() => handleNavigate("/appointment")}
  >
    Book Appointment
  </button>
</li>
        </ul>
      </nav>

      {/* Desktop button */}
      
      <div className="contact-btn">
        <button onClick={() => handleNavigate("/appointment")}>
          Book Appointment
        </button>
      </div>

      {/* Hamburger (mobile only) */}
      <div
        className="hamburger"
        onClick={() => {
          setMobileOpen(!mobileOpen);
          setActiveMenu(null);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
