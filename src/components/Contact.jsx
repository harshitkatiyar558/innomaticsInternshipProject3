import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="form-input"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="form-input"
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="form-textarea"
        />
        <button type="submit" className="form-button">Send</button>
      </form>
      <div className="social-links">
        <a href="www.linkedin.com/in/harshitskatiyar" target="_blank" rel="noopener noreferrer" className="social-link">
          LinkedIn
        </a>
        <a href="https://github.com/harshitkatiyar558" target="_blank" rel="noopener noreferrer" className="social-link">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;