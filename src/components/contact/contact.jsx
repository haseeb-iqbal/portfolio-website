import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendingError, setSendingError] = useState(false);
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_email: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setValidationErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setDone(false);
      setSending(true);
      setSendingError(false);
      emailjs
        .sendForm(
          "service_64cnrwy",
          "template_wdlte5q",
          formRef.current,
          "-os34IA9CTHn9QjSs"
        )
        .then(
          (result) => {
            setDone(true);
            console.log(result.text);
            setSending(false);
          },
          (error) => {
            console.log(error.text);
            setSending(false);
            setSendingError(true);
          }
        );
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.sender_name.trim()) {
      errors.sender_name = "Your name is required";
    }

    if (!data.sender_email.trim()) {
      errors.sender_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.sender_email)) {
      errors.sender_email = "Email is invalid";
    }

    if (!data.message.trim()) {
      errors.message = "A message is required";
    }

    return errors;
  };

  const formRef = useRef();
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            {/* <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 1234 556 75
            </div> */}
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              a.haseeb19@gmail.com
            </div>
            {/* <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              +1 1234 556 75
            </div> */}
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Let me know the details of your project
            and I will respond at my earliest convenience. I am also open for
            any general inquiries. Looking forward to speaking to you!
          </p>
          {done ? (
            "Thank you for your message! I will be in contact shortly"
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              {validationErrors.sender_name && (
                <p className="error-message">{validationErrors.sender_name}</p>
              )}
              <input
                type="text"
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "white",
                }}
                placeholder="Name"
                name="sender_name"
                value={formData.sender_name}
                onChange={handleFormChange}
              />
              {validationErrors.sender_email && (
                <p className="error-message">{validationErrors.sender_email}</p>
              )}
              <input
                type="text"
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "white",
                }}
                placeholder="Email"
                name="sender_email"
                value={formData.sender_email}
                onChange={handleFormChange}
              />
              {validationErrors.message && (
                <p className="error-message">{validationErrors.message}</p>
              )}
              <textarea
                rows="5"
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "white",
                }}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
              />

              <button disabled={sending}>Submit</button>
            </form>
          )}

          {sendingError &&
            "Sorry but this doesn't seem to be working at the moment. Please try again later or contact me directly on my email address"}
        </div>
      </div>
    </div>
  );
};

export default Contact;
