import React from "react";
import "../styles/top-section-facilities.css";

export default function TopSection() {
  return (
    <section className="ats-wrapper-facilities">

      {/* Overlay */}
      <div className="ats-overlay-facilities"></div>

      {/* Content */}
      <div className="ats-content">
        <h1 className="ats-title">Facilities</h1>
        <p className="ats-subtitle">
          Experience luxury, nature, and comfort in one place
        </p>
      </div>

    </section>
  );
}