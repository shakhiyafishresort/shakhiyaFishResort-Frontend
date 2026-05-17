import React, { useEffect } from "react";
import "../styles/Description-NonAc.css";

export default function DescriptionNonAc() {
  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".na-animate");

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
      <title>Non-AC Room | Budget Stay in Luxury Resort Nepal</title>

      <meta
        name="description"
        content="Stay in our comfortable and budget-friendly Non-AC rooms at Shakhiya Fish Resort. Enjoy clean rooms, natural ventilation, peaceful environment, and affordable luxury stay in Nepal."
      />

      <meta
        name="keywords"
        content="
        non ac room Nepal,
        budget hotel Nepal,
        cheap resort stay Nepal,
        Shakhiya Fish Resort,
        affordable room Nepal,
        hotel room Butwal,
        natural ventilation room,
        budget accommodation Nepal,
        resort stay Nepal,
        family budget room Nepal
        "
      />

      <section className="na-wrapper">

        {/* ================= SECTION 1 ================= */}
        <div className="na-section">

          <div className="na-image na-animate left">
            <img
              src="/images/non-AC_Room-1.jpeg"
              alt="Non AC Room Interior"
            />
          </div>

          <div className="na-content na-animate right">

            <span className="na-tag">Budget Comfort Stay</span>

            <h2 className="na-title">Affordable Non-AC Room</h2>

            <p className="na-text">
              Our Non-AC rooms are designed for travelers who want comfort at an
              affordable price. These rooms provide a peaceful and natural stay
              with fresh air ventilation, cozy beds, and clean interiors.
            </p>

            <p className="na-text">
              Perfect for solo travelers, students, and budget-conscious guests,
              our rooms ensure a relaxing stay without compromising on cleanliness
              and comfort.
            </p>

          </div>

        </div>

        {/* ================= SECTION 2 ================= */}
        <div className="na-section reverse">

          <div className="na-content na-animate left">

            <span className="na-tag">Natural Living Experience</span>

            <h2 className="na-title">Peaceful & Eco-Friendly Stay</h2>

            <p className="na-text">
              Experience a calm and refreshing environment surrounded by nature.
              Our Non-AC rooms are well-ventilated and designed to give you a
              natural living experience with modern basic facilities.
            </p>

            <p className="na-text">
              Enjoy warm hospitality, quiet surroundings, and a relaxing stay
              perfect for short or long visits at our resort.
            </p>

          </div>

          <div className="na-image na-animate right">
            <img
              src="/images/non-AC-Room-2.jpeg"
              alt="Peaceful Resort Room"
            />
          </div>

        </div>

      </section>
    </>
  );
}