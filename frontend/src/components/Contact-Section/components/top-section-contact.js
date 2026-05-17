import React from "react";
import "../styles/top-section-contact.css";

export default function TopSection() {
  return (
    <section className="ats-wrapper-contact">

      {/* Overlay */}
      <div className="ats-overlay-contact"></div>

      {/* Content */}
      <div className="ats-content">
        <h1 className="ats-title">Contact Us</h1>
        <p className="ats-subtitle">
          Experience luxury, nature, and comfort in one place
        </p>
      </div>

    </section>
  );
}