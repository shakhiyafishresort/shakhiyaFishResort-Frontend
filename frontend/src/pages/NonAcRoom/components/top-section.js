import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/top-section.css";

export default function TopSection() {
  const navigate = useNavigate();

  return (
    <section className="ats-wrapper-nonac">

      {/* OVERLAY */}
      <div className="ats-overlay-nonac"></div>

      {/* CONTENT */}
      <div className="ats-content">

        <span className="ats-tag">
          Budget Friendly Comfort Stay
        </span>

        <h1 className="ats-title">
          Non-AC Room
        </h1>

        <p className="ats-subtitle">
          Enjoy a clean, comfortable, and budget-friendly stay in our Non-AC Room.
          Designed with natural ventilation, cozy interiors, and essential amenities,
          it is perfect for travelers who prefer simplicity, peace, and a homely
          resort experience surrounded by nature.
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