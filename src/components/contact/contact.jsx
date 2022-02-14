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
  const handleSubmit = (e) => {
    setDone(false);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z89eu6c",
        "template_hd47lyk",
        formRef.current,
        "user_jBisT7Wa029MPwFdBLCFs"
      )
      .then(
        (result) => {
          setDone(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              placeholder="Name"
              name="from_name"
            />
            <input
              type="text"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              placeholder="Subject"
              name="user_subject"
            />
            <input
              type="text"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              placeholder="Email"
              name="user_email"
            />
            <textarea
              rows="5"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
          </form>
          {done && "Thank you for submitting..."}
        </div>
      </div>
    </div>
  );
};

export default Contact;
