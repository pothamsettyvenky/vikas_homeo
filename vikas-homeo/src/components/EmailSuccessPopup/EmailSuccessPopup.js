import React, { useEffect } from "react";
import "./EmailSuccessPopup.css";

export default function EmailSuccessPopup({ show, onClose }) {

  useEffect(() => {

    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);

  }, [show, onClose]);

  if (!show) return null;

  return (

    <div className="popup-overlay">

      <div className="popup-box">

        <div className="popup-icon">✓</div>

        <h3>Email Sent Successfully</h3>

        <p>
          Your request has been sent to<br />
          <strong>
            Dr Vikas Homoeopathy and Naturopathy Clinic
          </strong>
        </p>

        <button onClick={onClose}>
          OK
        </button>

      </div>

    </div>

  );

}