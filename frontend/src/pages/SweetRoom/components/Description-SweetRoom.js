import React, { useEffect } from "react";

import {
  FaWifi,
  FaTv,
  FaCoffee,
  FaSwimmingPool,
  FaSnowflake,
  FaShower,
  FaBed,
  FaParking,
  FaConciergeBell,
  FaUtensils,
  FaGlassCheers,
  FaHotTub,
} from "react-icons/fa";

import "../styles/Description-SweetRoom.css";

export default function DescriptionSweetRoom() {

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".sw-animate");

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
      <title>Sweet Room | Luxury Resort Stay Nepal</title>

      <meta
        name="description"
        content="Stay in our Sweet Room designed with luxury comfort, modern interiors, swimming pool access, free WiFi, fine dining, and peaceful resort environment in Nepal."
      />

      <meta
        name="keywords"
        content="
        sweet room Nepal,
        luxury resort Nepal,
        hotel room Nepal,
        romantic stay Nepal,
        Shakhiya Fish Resort,
        premium hotel room,
        honeymoon room Nepal,
        best resort Butwal,
        luxury accommodation Nepal,
        family stay Nepal,
        resort with pool Nepal
        "
      />

      <section className="sw-wrapper">

        {/* ================= SECTION 1 ================= */}
        <div className="sw-section">

          <div className="sw-image sw-animate left">
            <img
              src="/images/Super-Delux-1.jpeg"
              alt="Sweet Room Luxury Interior"
            />
          </div>

          <div className="sw-content sw-animate right">

            <span className="sw-tag">Romantic Luxury Stay</span>

            <h2 className="sw-title">Suite Room Experience</h2>

            <p className="sw-text">
              Our Suite Room is specially designed for couples and travelers who
              want a cozy yet luxurious stay. With soft lighting, elegant interiors,
              premium bedding, and a peaceful atmosphere, it creates the perfect
              romantic escape surrounded by nature.
            </p>

            <div className="sw-features">
              <span><FaWifi /> High-Speed WiFi</span>
              <span><FaTv /> Smart TV</span>
              <span><FaCoffee /> Free Breakfast</span>
              <span><FaSnowflake /> Air Conditioned</span>
            </div>

          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className="sw-section reverse">

          <div className="sw-content sw-animate left">

            <span className="sw-tag">Premium Comfort</span>

            <h2 className="sw-title">Luxury Facilities & Relaxation</h2>

            <p className="sw-text">
              Enjoy world-class comfort with 24/7 room service, modern bathroom,
              hot shower, luxury furniture, and calm environment. Every detail is
              designed to give you a relaxing and premium resort experience.
            </p>

            <div className="sw-features">
              <span><FaSwimmingPool /> Swimming Pool</span>
              <span><FaShower /> Hot Shower</span>
              <span><FaParking /> Free Parking</span>
              <span><FaConciergeBell /> 24/7 Service</span>
            </div>

          </div>

          <div className="sw-image sw-animate right">
            <img
              src="/images/Super-Delux-2.jpeg"
              alt="Luxury Resort Facilities"
            />
          </div>

        </div>

        {/* ================= SECTION 3 ================= */}
        <div className="sw-section">

          <div className="sw-image sw-animate left">
            <img
              src="/images/Meeting-4.jpeg"
              alt="Resort Dining and Relaxation"
            />
          </div>

          <div className="sw-content sw-animate right">

            <span className="sw-tag">Dining & Experience</span>

            <h2 className="sw-title">Food, Nature & Luxury Moments</h2>

            <p className="sw-text">
              Enjoy delicious meals prepared by expert chefs with fresh ingredients.
              Surrounded by peaceful nature, our Sweet Room guests enjoy a calm
              and refreshing stay with unforgettable experiences.
            </p>

            <div className="sw-features">
              <span><FaUtensils /> Restaurant</span>
              <span><FaGlassCheers /> Romantic Setup</span>
              <span><FaCoffee /> Morning Breakfast</span>
              <span><FaBed /> Luxury Bedding</span>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}