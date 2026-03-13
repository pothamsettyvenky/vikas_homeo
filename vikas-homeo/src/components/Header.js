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
    if (path.includes("#")) {

    const [page, hash] = path.split("#");

    navigate(page);

    setTimeout(() => {

      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

    }, 300);

  } else {

    navigate(path);
setMobileOpen(false);
    setActiveMenu(null);
  }
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
                    Our Clinic
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
                  <li onClick={() => handleNavigate("/patient-feedback")}>
                    Patient Feedback
                  </li>
                  {/* <li onClick={() => handleNavigate("/case-history")}>
                    Case History Form
                  </li> */}
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
             <li
              className="menu-item"
              onClick={() => handleNavigate("/Contact")}
            >
              Contact
            </li>

          </ul>
        </nav>

        {/* BOOK BUTTON */}
        <div className="contact-btn">
          <button onClick={() => handleNavigate("/Contact#appointment")}>
            Book Appointment
          </button>
        </div>

      </div>

    </header>
  );
}
