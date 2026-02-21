import React, { useEffect, useRef, useState } from "react";
import "./AppointmentStrip.css";
import emailjs from "@emailjs/browser"
import AddressAutocomplete from "./AddressAutocomplete";

export default function AppointmentStrip() {

  const stripRef = useRef();

  const sendEmails = (e) =>{
    emailjs.sendForm("service_dubal8n",
        "template_2y08i23",
        stripRef.current,
        "sr-EteUtO99BCzWtv",).then(()=>{
alert("Appointment request sent successfully");
        })
  }

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    address: "",
    lat: null,
    lng: null
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

  function handleChange(e) {

    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

  }

  function handleAddressSelect(data) {

    setFormData(prev => ({
      ...prev,
      address: data.address,
      lat: data.lat,
      lng: data.lng
    }));

  }

  function handleSubmit() {

    console.log("Appointment:", formData);

    alert("Appointment submitted successfully");

  }

  return (

    <section className="appointment-strip" ref={stripRef}>

      <div className="appointment-wrapper">

        {/* FORM */}

        <div className="appointment-box form">

          <h3>Book an Appointment</h3>

          <p>
            Fill the form and our team will schedule your appointment
          </p>

          <div className="form-grid">

            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <AddressAutocomplete
              onSelect={handleAddressSelect}
            />

            <select
              name="treatment"
              onChange={handleChange}
            >
              <option value="">Select Treatment</option>
              <option value="homeopathy">Homeopathy</option>
              <option value="naturopathy">Naturopathy</option>
              <option value="acupuncture">Acupuncture</option>
              <option value="cupping">Cupping Therapy</option>
              <option value="diet">Diet & Nutrition</option>
            </select>

            <input
              type="date"
              name="date"
              onChange={handleChange}
            />

          </div>

          <button
            className="submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>

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

        {/* CLINIC ADDRESS */}

        <div className="appointment-box address">

          <h3>Our Address</h3>

          <div className="address-text">

            Vikas Homoeo Clinic<br />
            Padmavathi Nagar<br />
            Nandyal, Andhra Pradesh<br />
            India

          </div>

        </div>

        {/* PHONE */}

        <div className="appointment-box emergency">

          <h3>Please Call Us</h3>

          <span className="phone">
            +91 73968 03203
          </span>

          <span className="phone">
            +91 80960 50488
          </span>

        </div>

      </div>

    </section>

  );

}