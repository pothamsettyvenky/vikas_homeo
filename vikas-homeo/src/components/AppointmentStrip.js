import React, { useEffect, useRef, useState } from "react";
import "./AppointmentStrip.css";
import AddressAutocomplete from "./AddressAutocomplete";
import EmailForm from "./EmailForm";
import EmailSuccessPopup from "./EmailSuccessPopup/EmailSuccessPopup";

export default function AppointmentStrip() {

  const stripRef = useRef();

  const [showPopup, setShowPopup] = useState(false);

  const [addressData, setAddressData] = useState({
    address: "",
    lat: "",
    lng: ""
  });

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stripRef.current.classList.add("animate");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(stripRef.current);

    return () => observer.disconnect();

  }, []);

  function handleAddressSelect(data) {

    setAddressData({
      address: data.address,
      lat: data.lat,
      lng: data.lng
    });

  }

  return (

    <>
      <section className="appointment-strip" ref={stripRef}>

        <div className="appointment-wrapper">

          {/* FORM */}

          <div className="appointment-box form">

            <h3>Book an Appointment</h3>

            <p>
              Fill the form and our team will schedule your appointment
            </p>

            <EmailForm
              className="form-grid"
              onSuccess={() => {
  setShowPopup(true);

  setAddressData({
    address: "",
    lat: "",
    lng: ""
  });
}}
              onError={() => alert("Failed to send email")}
            >

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

             <div className="date-field">
  <label>Select preferred appointment date</label>

  <input
    type="date"
    name="date"
    min={new Date().toISOString().split("T")[0]}
    required
  />
</div>

              <button type="submit" className="submit-btn">
                Submit
              </button>

            </EmailForm>

          </div>

          {/* HOURS */}

          <div className="appointment-box hours">

            <h3>Opening Hours</h3>

            <div className="hours-text">
              Mon–Sat: 9:30 am–1:30 pm<br />
              5:30 pm–9:00 pm
            </div>

            <div className="hours-text">
              Sunday: 9:30 am–1:30 pm
            </div>

          </div>

          {/* ADDRESS */}

          <div className="appointment-box address">

            <h3>Our Address</h3>

            <div className="address-text">

              Venugopala Swamy Temple,<br />
              Perala, Chirala,<br />
              Andhra Pradesh 523157

            </div>

          </div>

          {/* PHONE */}

          <div className="appointment-box emergency">

            <h3>Please Call Us</h3>

            <span className="phone">
              +91 80960 50488
            </span>

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