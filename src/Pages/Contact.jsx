import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Check, AlertCircle } from "lucide-react";
import "../Components/style/contact.css"

const API_URL = process.env.REACT_APP_API_URL;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    contact: "",
    productInterest: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState("unknown");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({
          name: "",
          businessName: "",
          email: "",
          contact: "",
          productInterest: "",
          message: "",
        });

        setStatus({
          submitted: true,
          success: true,
          message: data.message || "Message sent successfully!",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`Message from: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sales.raiyanglobal@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-container">
      <h2 className="title">Contact Us</h2>

      <div className="contact-grid">
        {/* LEFT SIDE */}
        <div>
          <h3 className="subtitle">Get in Touch</h3>

          {serverStatus === "offline" && !status.submitted && (
            <div className="alert alert-warning">
              <AlertCircle size={20} />
              <p>Server offline — your message will be sent manually.</p>
            </div>
          )}

          {/* STATUS MESSAGE */}
          {status.submitted ? (
            <div
              className={`alert ${status.success ? "alert-success" : "alert-error"
                }`}
            >
              {status.success ? <Check size={20} /> : <AlertCircle size={20} />}
              <p>{status.message}</p>

              {status.success && (
                <button
                  className="link-btn"
                  onClick={() =>
                    setStatus({ submitted: false, success: false, message: "" })
                  }
                >
                  Send another message
                </button>
              )}

              {!status.success && serverStatus === "offline" && (
                <button className="offline-btn" onClick={handleDirectEmail}>
                  Send via Email App
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-row">
                <div className="input-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Contact Number</label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Product Interest</label>
                <input
                  type="text"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {serverStatus === "offline" && (
                <button className="offline-btn" onClick={handleDirectEmail}>
                  Open Email App
                </button>
              )}
            </form>
          )}

          <p className="info-note">
            We'll respond as soon as possible. For urgent requests, call us.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className="subtitle">Contact Information</h3>

          <div className="info-block">
            <MapPin className="icons" />
            <div>
              <h4>Address</h4>
              <p>Versova, Andheri West, Mumbai 500061, Maharashtra</p>
            </div>
          </div>

          <div className="info-block">
            <Phone className="icons" />
            <div>
              <h4>Phone</h4>
              <p>+91 9920810651</p>
              <p>+91 8879917449</p>
              <p>+91 8928608614</p>
            </div>
          </div>

          <div className="info-block">
            <Mail className="icons" />
            <div>
              <h4>Email</h4>
              <p>sales.raiyanglobal@gmail.com</p>
            </div>
          </div>

          <div className="hours-box">
            <h3 className="subtitle">Business Hours</h3>
            <div className="hours-row">
              <span className="titles1">Mon–Fri:</span>
              <span>9:00 AM – 6:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="titles1">Saturday:</span>
              <span>10:00 AM – 4:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="titles1">Sunday:</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
