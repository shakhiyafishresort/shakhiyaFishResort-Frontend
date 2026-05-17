import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/top-section.css";

export default function TopSection() {
  const navigate = useNavigate();

  return (
    <section className="ats-wrapper-ac">

      {/* OVERLAY */}
      <div className="ats-overlay-ac"></div>

      {/* CONTENT */}
      <div className="ats-content">

        <span className="ats-tag">
          Comfort & Climate Control
        </span>

        <h1 className="ats-title">
          AC Room
        </h1>

        <p className="ats-subtitle">
          Experience a refreshing stay with fully air-conditioned comfort,
          modern interiors, peaceful ambiance, and premium hospitality.
          Perfect for relaxation, business stays, and family trips.
        </p>

        {/* BUTTON */}
        <button
          className="ats-btn"
          onClick={() => navigate("/booknow")}
        >
          Book Your Stay
        </button>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="ats-scroll">
        <span></span>
      </div>

    </section>
  );
}