import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
      subject,
    };
    fetch("./Server", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    });
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Ask me anything!</h3>
          <p className="contact__details">
            Send me an email or contact me through Linkedin
          </p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
              className="contact__form-input"
              placeholder="Insert your subject"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="btn"
          >
            Send Message
          </button>
        </form>
      </div>

      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </section>
  );
};

export default Contact;
