import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/top-section.css";

export default function TopSection() {
  const navigate = useNavigate();

  return (
    <section className="ats-wrapper-sweet">

      {/* OVERLAY */}
      <div className="ats-overlay-sweet"></div>

      {/* CONTENT */}
      <div className="ats-content">

        <span className="ats-tag">
          Luxury Resort Experience
        </span>

        <h1 className="ats-title">
          Suite Room
        </h1>

        <p className="ats-subtitle">
          A perfect blend of elegance, comfort, and serenity.
          Enjoy a peaceful stay surrounded by nature with premium facilities,
          modern interiors, and a relaxing atmosphere.
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