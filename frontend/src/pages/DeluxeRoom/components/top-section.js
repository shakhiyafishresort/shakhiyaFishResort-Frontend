import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/top-section.css";

export default function TopSection() {

  const navigate = useNavigate();

  return (

    <section className="ats-wrapper-delux">

      {/* OVERLAY */}

      <div className="ats-overlay-delux"></div>

      {/* CONTENT */}

      <div className="ats-content">

        <span className="ats-tag">
          Luxury Resort Experience
        </span>

        <h1 className="ats-title">
          Deluxe Room
        </h1>

        <p className="ats-subtitle">

          Experience luxury, nature,
          peace, and comfort in one unforgettable stay.

        </p>

        {/* BUTTON */}

        <button
          className="ats-btn"
          onClick={() => navigate("/booknow")}
        >
          Book Now
        </button>

      </div>

      {/* SCROLL INDICATOR */}

      <div className="ats-scroll">

        <span></span>

      </div>

    </section>
  );
}