import { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = new useNavigate();
  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  // Helper: toggle submenu on mobile
  const handleMobileToggle = (menu) => {
    if (!mobileOpen) return;
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="header-left">
        <div className="logo">
          <img src="/logo.png" alt="Vikas Clinic" />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`nav ${mobileOpen ? "mobile-open" : ""}`}>
        <ul className="menu">
          <li className="menu-item" onClick={() =>navigate("/")}>
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
                <li onClick={() => navigate("/about/vikas-Homeopathy")}>
                  Vikas Clinic
                </li>
                <li>Dr. Vikas</li>
                <li>Clinic Team</li>
                <li>Gallery</li>
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
                <li>FAQs</li>
                <li>Patient Feedback Video</li>
              </ul>
            )}
          </li>

          <li className="menu-item">Gurukul</li>

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
                <li>Upcoming</li>
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
                <li>Awards</li>
                <li>News</li>
              </ul>
            )}
          </li>

          {/* Mobile contact */}
          <li className="menu-item mobile-only">Contact Us</li>
        </ul>
      </nav>

      {/* Desktop contact */}
      <div className="contact-btn desktop-only">
        <button>Contact Us</button>
      </div>

      {/* Hamburger */}
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
