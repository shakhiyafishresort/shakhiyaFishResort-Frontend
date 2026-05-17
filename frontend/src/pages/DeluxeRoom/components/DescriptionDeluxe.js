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
} from "react-icons/fa";

import "../styles/DescriptionDeluxe.css";

export default function DescriptionDeluxe() {

  /* ================= SCROLL ANIMATION ================= */

  useEffect(() => {

    const elements =
      document.querySelectorAll(".dd-animate");

    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add("show");

            }

          });

        },

        {
          threshold: 0.2,
        }

      );

    elements.forEach((el) =>
      observer.observe(el)
    );

    return () => {

      elements.forEach((el) =>
        observer.unobserve(el)
      );

    };

  }, []);

  return (

    <>
      {/* ================= SEO ================= */}

      <title>
        Deluxe Luxury Room | Shakhiya Fish Resort
      </title>

      <meta
        name="description"
        content="
        Experience luxury deluxe rooms at Shakhiya Fish Resort with premium facilities, swimming pool, peaceful environment, free WiFi, breakfast, and modern comfort for unforgettable stays in Nepal.
        "
      />

      <meta
        name="keywords"
        content="
        deluxe room Nepal,
        luxury resort Nepal,
        Sakhiya Fish Resort,
        hotel booking Nepal,
        premium room Nepal,
        fish resort room,
        resort with swimming pool,
        luxury stay Nepal,
        hotel near Butwal,
        deluxe family room,
        honeymoon resort Nepal,
        modern resort room,
        best hotel Nepal,
        vacation room Nepal,
        peaceful resort Nepal
        "
      />

      <section className="dd-wrapper">

        {/* ================= FIRST SECTION ================= */}

        <div className="dd-section">

          {/* IMAGE LEFT */}

          <div className="dd-image-box dd-animate dd-left">

            <img
              src="/images/Delux-1.jpeg"
              alt="Luxury Deluxe Room"
            />

          </div>

          {/* CONTENT RIGHT */}

          <div className="dd-content dd-animate dd-right">

            <span className="dd-tag">
              Luxury Resort Experience
            </span>

            <h2 className="dd-title">
              Deluxe Luxury Room
            </h2>

            <p className="dd-text">

              Discover comfort, elegance, and peace in our
              beautifully designed Deluxe Room. Featuring
              premium interiors, cozy king-size beds,
              relaxing ambiance, and modern facilities,
              this room is crafted for unforgettable stays.

              Whether you're planning a romantic getaway,
              family vacation, or weekend escape,
              our Deluxe Room provides the perfect
              balance of luxury and comfort.

            </p>

            {/* FEATURES */}

            <div className="dd-features">

              <div className="dd-feature">
                <FaWifi />
                <span>Free WiFi</span>
              </div>

              <div className="dd-feature">
                <FaTv />
                <span>Smart TV</span>
              </div>

              <div className="dd-feature">
                <FaCoffee />
                <span>Breakfast Included</span>
              </div>

              <div className="dd-feature">
                <FaSnowflake />
                <span>Air Conditioning</span>
              </div>

            </div>

          </div>

        </div>

        {/* ================= SECOND SECTION ================= */}

        <div className="dd-section reverse-section">

          {/* CONTENT LEFT */}

          <div className="dd-content dd-animate dd-left">

            <span className="dd-tag">
              Premium Comfort
            </span>

            <h2 className="dd-title">
              Relax With Modern Facilities
            </h2>

            <p className="dd-text">

              Enjoy spacious interiors, modern washrooms,
              premium furniture, peaceful surroundings,
              and luxury amenities designed to elevate
              your resort experience.

              Our rooms are carefully designed to provide
              maximum comfort while maintaining a calm
              and elegant atmosphere for every guest.

            </p>

            {/* FEATURES */}

            <div className="dd-features">

              <div className="dd-feature">
                <FaSwimmingPool />
                <span>Swimming Pool</span>
              </div>

              <div className="dd-feature">
                <FaShower />
                <span>Hot Shower</span>
              </div>

              <div className="dd-feature">
                <FaParking />
                <span>Free Parking</span>
              </div>

              <div className="dd-feature">
                <FaBed />
                <span>Luxury Bedding</span>
              </div>

            </div>

          </div>

          {/* IMAGE RIGHT */}

          <div className="dd-image-box dd-animate dd-right">

            <img
              src="/images/Delux-2.jpeg"
              alt="Premium Resort Room"
            />

          </div>

        </div>

      </section>
    </>
  );
}