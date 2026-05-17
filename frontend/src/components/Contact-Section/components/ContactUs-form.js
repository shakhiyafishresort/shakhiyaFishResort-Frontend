import React, { useState } from "react";

import "../styles/ContactUs-form.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { toast } from "react-toastify";

import { SiTiktok } from "react-icons/si";

export default function ContactForm() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Message sent successfully!");

      /* RESET FORM */
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cf-wrapper">

      <div className="cf-container">

        {/* LEFT SIDE */}
        <div className="cf-left">

          <h3 className="cf-left-title">
            Contact Information
          </h3>

          <div className="cf-info-item">
            <FaMapMarkerAlt className="cf-icon" />
            <p className="cf-text">
              Shakhiya Fish Resort <br />
              Suddhodhan 7 Manmateriya Bhaglapur,
              Rupandehi, Nepal
            </p>
          </div>

          <div className="cf-info-item">
            <FaPhoneAlt className="cf-icon" />
            <p className="cf-text">
              +977-9802685566
            </p>
          </div>

          <div className="cf-info-item">
            <FaEnvelope className="cf-icon" />
            <p className="cf-text">
              shakhiyafishresort@gmail.com
            </p>
          </div>

          {/* SOCIAL */}
          <div className="cf-social">
            <a href="https://www.facebook.com/profile.php?id=100085531920421" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/shakhiyafishresort" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@shakhiyafishresort" target="_blank" rel="noopener noreferrer">
              <SiTiktok />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="cf-right">

          <h2 className="cf-form-title">
            Get in Touch
          </h2>

          <form
            className="cf-form"
            onSubmit={handleSubmit}
          >

            <div className="cf-row">

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="cf-button"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}