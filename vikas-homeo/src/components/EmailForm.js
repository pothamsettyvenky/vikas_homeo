import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function EmailForm({
  children,
  className = "",
  onSuccess,
  onError
}) {

  const formRef = useRef();

  const sendEmail = async (e) => {

    e.preventDefault();

    try {

      await emailjs.sendForm(
        "service_dubal8n",
        "template_2y08i23",
        formRef.current,
        "sr-EteUtO99BCzWtv"
      );

      if (onSuccess) onSuccess();

      formRef.current.reset();

    } catch (error) {

      console.error(error);

      if (onError) onError();

    }

  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className={className}
    >
      {children}
    </form>
  );

}