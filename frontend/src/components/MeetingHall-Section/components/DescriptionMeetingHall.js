import React, { useEffect } from "react";

import {
  FaWifi,
  FaDesktop,
  FaUsers,
  FaCoffee,
  FaChalkboardTeacher,
  FaParking,
  FaMicrophone,
  FaSnowflake,
  FaUtensils,
} from "react-icons/fa";

import "../styles/DescriptionMeetingHall.css";

export default function DescriptionMeetingHall() {

  /* ================= SCROLL ANIMATION ================= */

  useEffect(() => {

    const elements =
      document.querySelectorAll(".mh-animate");

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
        Meeting Hall | Corporate Event Space Nepal
      </title>

      <meta
        name="description"
        content="
        Professional meeting hall and conference venue
        for seminars, workshops, training programs,
        business meetings, and corporate events in Nepal.
        "
      />

      <meta
        name="keywords"
        content="
        meeting hall Nepal,
        conference hall Nepal,
        corporate hall Butwal,
        seminar hall Nepal,
        business meeting venue,
        event hall Nepal,
        training hall Nepal,
        workshop venue Nepal
        "
      />

      <section className="dmh-wrapper">

        {/* ================= SECTION 1 ================= */}

        <div className="dmh-section">

          <div className="dmh-image-box mh-animate left">

            <img
              src="/images/Meeting-1.jpeg"
              alt="Meeting Hall"
            />

          </div>

          <div className="dmh-content mh-animate right">

            <span className="dmh-tag">
              Professional Environment
            </span>

            <h2 className="dmh-title">
              Modern Meeting Hall
            </h2>

            <p className="dmh-text">

              Our modern meeting hall is designed
              for seminars, workshops, training programs,
              business meetings, and corporate events.

              With comfortable seating capacity
              for up to 30 guests, the hall offers
              a peaceful and professional atmosphere
              ideal for productive discussions
              and successful events.

              The hall is available for only
              <strong> Rs. 3000 per day</strong>,
              making it an affordable and premium
              choice for corporate and private gatherings.

            </p>

            <div className="dmh-features">

              <div className="dmh-feature">
                <FaUsers />
                <span>30 People Capacity</span>
              </div>

              <div className="dmh-feature">
                <FaWifi />
                <span>High-Speed WiFi</span>
              </div>

              <div className="dmh-feature">
                <FaDesktop />
                <span>Presentation Setup</span>
              </div>

              <div className="dmh-feature">
                <FaSnowflake />
                <span>Air Conditioned</span>
              </div>

            </div>

            {/* PRICE */}

            <div className="dmh-price-box">

              <span className="dmh-price-label">
                Starting Price
              </span>

              <h3 className="dmh-price">
                Rs. 3000
              </h3>

              <p className="dmh-price-text">
                Full Day Meeting Hall Booking
              </p>

            </div>

          </div>

        </div>

        {/* ================= SECTION 2 ================= */}

        <div className="dmh-section reverse">

          <div className="dmh-content mh-animate left">

            <span className="dmh-tag">
              Premium Facilities
            </span>

            <h2 className="dmh-title">
              Everything You Need For Events
            </h2>

            <p className="dmh-text">

              Our conference hall includes modern
              presentation systems, comfortable seating,
              premium sound setup, and refreshment services
              to ensure a smooth experience for all guests.

              Whether it's a business presentation,
              team discussion, or private workshop,
              we provide all essential facilities
              for professional gatherings.

            </p>

            <div className="dmh-features">

              <div className="dmh-feature">
                <FaMicrophone />
                <span>Sound System</span>
              </div>

              <div className="dmh-feature">
                <FaCoffee />
                <span>Tea & Coffee</span>
              </div>

              <div className="dmh-feature">
                <FaParking />
                <span>Free Parking</span>
              </div>

              <div className="dmh-feature">
                <FaChalkboardTeacher />
                <span>Training Setup</span>
              </div>

            </div>

          </div>

          <div className="dmh-image-box mh-animate right">

            <img
              src="/images/Meeting-2.jpeg"
              alt="Conference Hall"
            />

          </div>

        </div>

        {/* ================= SECTION 3 ================= */}

        <div className="dmh-section">

          <div className="dmh-image-box mh-animate left">

            <img
              src="/images/Meeting-3.jpeg"
              alt="Corporate Event Hall"
            />

          </div>

          <div className="dmh-content mh-animate right">

            <span className="dmh-tag">
              Business & Networking
            </span>

            <h2 className="dmh-title">
              Perfect For Corporate Gatherings
            </h2>

            <p className="dmh-text">

              Host your meetings and networking events
              in a calm and luxurious environment.

              Our resort meeting hall combines
              professionalism with comfort,
              helping guests focus, connect,
              and collaborate in an inspiring setting.

            </p>

            <div className="dmh-features">

              <div className="dmh-feature">
                <FaUtensils />
                <span>Food Service</span>
              </div>

              <div className="dmh-feature">
                <FaUsers />
                <span>Corporate Events</span>
              </div>

              <div className="dmh-feature">
                <FaCoffee />
                <span>Refreshments</span>
              </div>

              <div className="dmh-feature">
                <FaWifi />
                <span>Business Ready</span>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}