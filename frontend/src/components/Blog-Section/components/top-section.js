import React from "react";
import "../styles/top-section.css";

export default function TopSection() {
  return (
    <section className="ats-wrapper-blog">

      {/* Overlay */}
      <div className="ats-overlay-blog"></div>

      {/* Content */}
      <div className="ats-content">
        <h1 className="ats-title">Blog</h1>
        <p className="ats-subtitle">
          Experience luxury, nature, and comfort in one place
        </p>
      </div>

    </section>
  );
}