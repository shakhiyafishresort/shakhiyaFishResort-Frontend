import React from "react";
import "../styles/top-section-room.css";

export default function TopSection() {
  return (
    <section className="ats-wrapper">

      {/* Overlay */}
      <div className="ats-overlay"></div>

      {/* Content */}
      <div className="ats-content">
        <h1 className="ats-title">Our Rooms</h1>
        <p className="ats-subtitle">
          Discover comfort, luxury, and peaceful stay experience
        </p>
      </div>

    </section>
  );
}