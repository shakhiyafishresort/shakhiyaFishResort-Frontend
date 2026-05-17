import React from "react";
import "../styles/top-section.css";

export default function TopSection() {
  return (
    <section className="ats-wrapper-about">

      {/* Overlay */}
      <div className="ats-overlay-about"></div>

      {/* Content */}
      <div className="ats-content">
        <h1 className="ats-title">About Us</h1>
        <p className="ats-subtitle">
          Experience luxury, nature, and comfort in one place
        </p>
      </div>

    </section>
  );
}