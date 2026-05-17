import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/top-section.css";

export default function TopSectionRestro() {
  const navigate = useNavigate();

  return (
    <section className="rs-wrapper">

      {/* OVERLAY */}
      <div className="rs-overlay"></div>

      {/* CONTENT */}
      <div className="rs-content">

        <span className="rs-tag">
          Fine Dining & Luxury Bar
        </span>

        <h1 className="rs-title">
          Restro & Bar
        </h1>

        <p className="rs-subtitle">
          Experience premium dining, delicious cuisine,
          refreshing cocktails, live music, and luxury ambiance
          in one unforgettable place.
        </p>

        {/* BUTTON */}
        {/* <button
          className="rs-btn"
          onClick={() => navigate("/booknow")}
        >
          Book Now
        </button> */}

      </div>

      {/* SCROLL INDICATOR */}
      <div className="rs-scroll">
        <span></span>
      </div>

    </section>
  );
}