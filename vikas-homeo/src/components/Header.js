import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "../asessts/logo.jpeg";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const handleMobileToggle = (menu) => {
    if (!mobileOpen) return;
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
    setActiveMenu(null);
  };

  return (
    <header className="header">

      {/* ROW 1 → LOGO */}
      <div className="header-top">
        <div className="logo" onClick={() => handleNavigate("/")}>
          <img src={Logo} alt="Vikas homoeopathy Clinic" />
        </div>
      </div>

      {/* ROW 2 */}
      <div className="header-bottom">

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

        {/* NAVIGATION */}
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
              About
              {activeMenu === "about" && (
                <ul className="dropdown">
                  <li onClick={() => handleNavigate("/about/vikas-homeopathy")}>
                    Vikas homoeopathy Clinic
                  </li>
                  <li onClick={() => handleNavigate("/about/dr-vikas")}>
                    Dr. Vikas Ballipalli
                  </li>
                  <li onClick={() => handleNavigate("/about/dr-sandhya")}>
                    Dr. Sandhya Ballipalli
                  </li>
                  <li onClick={() => handleNavigate("/quotes")}>
                    Quotes
                  </li>
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
              Patient’s Corner
              {activeMenu === "patients" && (
                <ul className="dropdown">
                  <li onClick={() => handleNavigate("/faqs")}>FAQs</li>
                  <li onClick={() => handleNavigate("/feedback")}>
                    Patient Feedback
                  </li>
                  <li onClick={() => handleNavigate("/case-history")}>
                    Case History Form
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

            {/* MEDIA */}
            <li
              className="menu-item has-dropdown"
              onMouseEnter={() => !mobileOpen && setActiveMenu("media")}
              onMouseLeave={() => !mobileOpen && setActiveMenu(null)}
              onClick={() => handleMobileToggle("media")}
            >
              Media
              {activeMenu === "media" && (
                <ul className="dropdown">
                  <li onClick={() => handleNavigate("/awards")}>Awards</li>
                  <li onClick={() => handleNavigate("/news")}>News</li>
                  <li onClick={() => handleNavigate("/gallery")}>Gallery</li>
                </ul>
              )}
            </li>

            <li
              className="menu-item"
              onClick={() => handleNavigate("/Homeopathy_Kit")}
            >
              homoeopathy Kit
            </li>

          </ul>
        </nav>

        {/* BOOK BUTTON */}
        <div className="contact-btn">
          <button onClick={() => handleNavigate("/appointment")}>
            Book Appointment
          </button>
        </div>

      </div>

    </header>
  );
}
