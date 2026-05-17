import React, { useEffect } from "react";

import {
  FaWifi,
  FaTv,
  FaSnowflake,
  FaShower,
  FaParking,
  FaConciergeBell,
  FaBed,
  FaGlassCheers,
  FaCoffee,
} from "react-icons/fa";

import "../styles/Description-AcRoom.css";

export default function DescriptionAcRoom() {
  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".ar-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* ================= SEO ================= */}
      <title>AC Room | Luxury Resort Stay Nepal</title>

      <meta
        name="description"
        content="Stay in our premium AC Room with luxury comfort, air conditioning, modern interiors, free WiFi, hot shower, swimming pool access, and peaceful resort environment in Nepal."
      />

      <meta
        name="keywords"
        content="
          ac room Nepal,
          luxury hotel Nepal,
          resort room Nepal,
          Shakhiya Fish Resort,
          air conditioned room Nepal,
          hotel booking Butwal,
          premium stay Nepal,
          family hotel Nepal,
          resort with AC room,
          modern hotel Nepal
        "
      />

      <section className="ar-wrapper">

        {/* ================= SECTION 1 ================= */}
        <div className="ar-section">

          <div className="ar-image ar-animate left">
            <img
              src="/images/AC-Room-1.jpeg"
              alt="Luxury AC Room Interior"
            />
          </div>

          <div className="ar-content ar-animate right">

            <span className="ar-tag">Cool Comfort Experience</span>

            <h2 className="ar-title">Premium AC Room</h2>

            <p className="ar-text">
              Experience ultimate comfort in our fully air-conditioned AC Room.
              Designed with modern interiors, soft lighting, and relaxing ambiance,
              this room ensures a peaceful stay even during warm weather.
              Perfect for families, couples, and business travelers.
            </p>

            <div className="ar-features">
              <span><FaSnowflake /> Powerful AC</span>
              <span><FaWifi /> Free WiFi</span>
              <span><FaTv /> Smart TV</span>
              <span><FaCoffee /> Breakfast</span>
            </div>

          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className="ar-section reverse">

          <div className="ar-content ar-animate left">

            <span className="ar-tag">Luxury Facilities</span>

            <h2 className="ar-title">Comfort & Services</h2>

            <p className="ar-text">
              Enjoy 24/7 room service, hot shower bathroom, clean bedding,
              and a peaceful environment surrounded by nature.
              Every detail is designed for a premium hotel experience.
            </p>

            <div className="ar-features">
              <span><FaShower /> Hot Shower</span>
              <span><FaParking /> Free Parking</span>
              <span><FaConciergeBell /> Room Service</span>
              <span><FaBed /> Luxury Bed</span>
            </div>

          </div>

          <div className="ar-image ar-animate right">
            <img
              src="/images/AC-Room-2.jpeg"
              alt="Hotel AC Room Facilities"
            />
          </div>

        </div>

        {/* ================= SECTION 3 ================= */}
        <div className="ar-section">

          <div className="ar-image ar-animate left">
            <img
              src="/images/AC-Room-3.jpeg"
              alt="Resort Relax Environment"
            />
          </div>

          <div className="ar-content ar-animate right">

            <span className="ar-tag">Relax & Enjoy</span>

            <h2 className="ar-title">Peaceful Stay Experience</h2>

            <p className="ar-text">
              Surrounded by natural beauty, our AC Room offers a calm and refreshing stay.
              Enjoy sunrise views, fresh air, and a relaxing holiday atmosphere
              that makes your stay unforgettable.
            </p>

            <div className="ar-features">
              <span><FaGlassCheers /> Relax Zone</span>
              <span><FaCoffee /> Morning Tea</span>
              <span><FaSnowflake /> Cool Environment</span>
              <span><FaWifi /> Fast Internet</span>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}