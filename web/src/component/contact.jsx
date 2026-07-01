import { useState } from "react";
import contactBg from "./assets/bg/review_bg.png";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="ct-section">
      {/* ── Left: Dark Image Panel ── */}
      <div
        className="ct-left"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="ct-left-overlay" />
        <div className="ct-left-content">
          <p className="ct-eyebrow">We'd Love to Hear From You</p>
          <h2 className="ct-headline">Get in Touch</h2>
          <p className="ct-subtext">
            Have a question, feedback, or special request?<br />
            Our team is here to help you.
          </p>

          <div className="ct-divider">
            <span className="ct-divider-line" />
            <svg className="ct-divider-gem" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="ct-divider-line" />
          </div>

          <div className="ct-info-row">
            <div className="ct-info-item">
              <span className="ct-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </span>
              <div>
                <span className="ct-info-label">Call Us</span>
                <span className="ct-info-value">+91 98765 43210</span>
              </div>
            </div>

            <div className="ct-info-item">
              <span className="ct-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <div>
                <span className="ct-info-label">Email Us</span>
                <span className="ct-info-value">hello@foodparadise.com</span>
              </div>
            </div>

            <div className="ct-info-item">
              <span className="ct-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </span>
              <div>
                <span className="ct-info-label">Opening Hours</span>
                <span className="ct-info-value">Mon – Sun: 11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Form Panel ── */}
      <div className="ct-right">
        <h3 className="ct-form-title">Send Us a Message</h3>
        <div className="ct-form-divider">
          <span className="ct-form-divider-line" />
          <svg className="ct-form-divider-gem" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <span className="ct-form-divider-line" />
        </div>

        {submitted ? (
          <div className="ct-success">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <p>Thank you! Your message has been sent. We'll be in touch soon.</p>
          </div>
        ) : (
          <form className="ct-form" onSubmit={handleSubmit} noValidate>
            <div className="ct-form-row">
              <div className="ct-field">
                <input
                  id="ct-fullName"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="ct-field">
                <input
                  id="ct-email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="ct-field">
              <input
                id="ct-phone"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            <div className="ct-field">
              <textarea
                id="ct-message"
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="ct-submit-btn" id="ct-submit">
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;

