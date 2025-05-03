import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are filled
    if (!name || !email || !message) {
      setFormStatus("Please fill all fields.");
      return;
    }

    setIsSubmitting(true);
    setFormStatus("");

    // Sending email via EmailJS
    emailjs
      .sendForm(
        "service_4pm1fsm",
        "template_ig23k0v",
        e.target,
        "YMVxiXo4V4OyM9iaX"
      )
      .then(
        (result) => {
          setIsSubmitting(true);
          setFormStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setIsSubmitting(false);
          setFormStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-form-card">
        <h2><u>Contact Us</u></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name" // The name will be passed as 'name' to EmailJS template
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email" // The email will be passed as 'email' to EmailJS template
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message" // The message will be passed as 'message' to EmailJS template
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Send Message
          </button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
