import React, { useEffect } from "react";

import {
  FaUtensils,
  FaGlassCheers,
  FaWineGlassAlt,
  FaCoffee,
  FaMusic,
  FaWifi,
  FaCocktail,
  FaHamburger,
  FaConciergeBell,
} from "react-icons/fa";

import "../styles/DescriptionRestro.css";



export default function DescriptionRestroBar() {

  /* ================= SCROLL ANIMATION ================= */

  useEffect(() => {

    const elements =
      document.querySelectorAll(".rb-animate");

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
        Restro & Bar | Luxury Dining Experience Nepal
      </title>

      <meta
        name="description"
        content="
        Enjoy premium dining, delicious food,
        refreshing beverages, cocktails, live music,
        and luxury restaurant experience at our resort Restro & Bar in Nepal.
        "
      />

      <meta
        name="keywords"
        content="
        restro bar Nepal,
        luxury restaurant Nepal,
        bar in Butwal,
        resort restaurant Nepal,
        fine dining Nepal,
        cocktails Nepal,
        live music restaurant,
        premium dining Nepal,
        family restaurant Nepal
        "
      />

      <section className="rb-wrapper">

        {/* ================= SECTION 1 ================= */}

        <div className="rb-section">

          <div className="rb-image-box rb-animate left">

            <img
              src="/images/Bar-1.jpeg"
              alt="Luxury Restaurant"
            />

          </div>

          <div className="rb-content rb-animate right">

            <span className="rb-tag">
              Fine Dining Experience
            </span>

            <h2 className="rb-title">
              Premium Restro Experience
            </h2>

            <p className="rb-text">

              Enjoy delicious cuisine prepared by expert chefs
              in a luxurious and peaceful environment.

              Our Restro offers local, continental,
              and international dishes with premium hospitality,
              elegant seating, and relaxing ambiance
              perfect for families, couples,
              and corporate guests.

            </p>

            <div className="rb-features">

              <div className="rb-feature">
                <FaUtensils />
                <span>Fine Dining</span>
              </div>

              <div className="rb-feature">
                <FaHamburger />
                <span>Multi Cuisine</span>
              </div>

              <div className="rb-feature">
                <FaCoffee />
                <span>Fresh Coffee</span>
              </div>

              <div className="rb-feature">
                <FaWifi />
                <span>Free WiFi</span>
              </div>

            </div>

          </div>

        </div>

        {/* ================= SECTION 2 ================= */}

        <div className="rb-section reverse">

          <div className="rb-content rb-animate left">

            <span className="rb-tag">
              Luxury Bar & Lounge
            </span>

            <h2 className="rb-title">
              Relax & Enjoy Premium Drinks
            </h2>

            <p className="rb-text">

              Experience a relaxing evening
              with premium beverages, cocktails,
              mocktails, and soft music
              in our stylish bar lounge.

              Whether you're enjoying
              a romantic dinner or a casual gathering,
              our Restro & Bar creates
              unforgettable moments.

            </p>

            <div className="rb-features">

              <div className="rb-feature">
                <FaCocktail />
                <span>Premium Cocktails</span>
              </div>

              <div className="rb-feature">
                <FaWineGlassAlt />
                <span>Luxury Lounge</span>
              </div>

              <div className="rb-feature">
                <FaMusic />
                <span>Soft Music</span>
              </div>

              <div className="rb-feature">
                <FaGlassCheers />
                <span>Party Space</span>
              </div>

            </div>

          </div>

          <div className="rb-image-box rb-animate right">

            <img
              src="/images/Bar-2.jpeg"
              alt="Luxury Bar"
            />

          </div>

        </div>

        {/* ================= SECTION 3 ================= */}

        <div className="rb-section">

          <div className="rb-image-box rb-animate left">

            <img
              src="/images/Bar-3.jpeg"
              alt="Restaurant Dining"
            />

          </div>

          <div className="rb-content rb-animate right">

            <span className="rb-tag">
              Food & Hospitality
            </span>

            <h2 className="rb-title">
              Taste Luxury With Every Meal
            </h2>

            <p className="rb-text">

              From breakfast to dinner,
              every dish is prepared
              with fresh ingredients
              and served with exceptional hospitality.

              Enjoy peaceful dining spaces,
              modern interiors,
              and unforgettable flavors
              with your friends and family.

            </p>

            <div className="rb-features">

              <div className="rb-feature">
                <FaConciergeBell />
                <span>Premium Service</span>
              </div>

              <div className="rb-feature">
                <FaUtensils />
                <span>Fresh Food</span>
              </div>

              <div className="rb-feature">
                <FaCoffee />
                <span>Breakfast</span>
              </div>

              <div className="rb-feature">
                <FaGlassCheers />
                <span>Luxury Experience</span>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}