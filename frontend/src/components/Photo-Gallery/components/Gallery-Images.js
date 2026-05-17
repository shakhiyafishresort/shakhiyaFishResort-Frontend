import React, { useEffect } from "react";

import "../styles/Gallery-Images.css";

export default function GalleryImages() {

  /* ================= SCROLL ANIMATION ================= */

  useEffect(() => {

    const elements =
      document.querySelectorAll(".gi-animate");

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

    return () =>
      observer.disconnect();

  }, []);

  /* ================= GALLERY DATA ================= */

  const galleryImages = [

    {
      image:
        "/images/main-hotel.jpeg",
      title:
        "Luxury Resort View",
    },
    {
image:
"/images/Super-Delux-2.jpeg",
title:
"Suite Room",
    },

    {
      image:
        "/images/Delux-2.jpeg",
      title:
        "Premium Deluxe Room",
    },

    {
      image:
        "/images/Bg-Bar.jpeg",
      title:
        "Modern Hotel Interior",
    },

    {
      image:
        "/images/Bar-2.jpeg",
      title:
        "Restaurant & Dining",
    },

    {
      image:
        "/images/Bar-1.jpeg",
      title:
        "Relaxing Bar Area",
    },

  
    {
        image:
          "/images/Meeting-1.jpeg",
        title:
          "Spacious Meeting Hall",
    },
    {
        image:
        "/images/Natural-View.jpeg",
        title:
        "Nature & Serenity",
    },{
        image:
        "/images/Parking.jpeg",
        title:
        "Parking Area",
    },
    {
        image:
        "/images/Non-AC_Room-1.jpeg",
        title:
        "Non-A/C Room",
    },
    {
        image:
        "/images/AC-Room-2.jpeg",
        title:
        "A/C Room",
    },
    {
        image:
        "/images/Garden.jpeg",
        title:
        "Garden View",
    },
    {
        image:
        "/images/Garden-3.jpeg",
        title:
        "Best Viewing Point",
    }

  ];

  return (

    <section className="gi-wrapper">

      {/* ================= HEADING ================= */}

      <div className="gi-heading gi-animate">

        <span className="gi-tag">
          Resort Gallery
        </span>

        <h2>
          Explore Our Luxury Resort
        </h2>

        <p>
          Discover beautiful rooms,
          premium facilities,
          peaceful surroundings,
          and unforgettable experiences
          at Shakhiya Fish Resort.
        </p>

      </div>

      {/* ================= GALLERY GRID ================= */}

      <div className="gi-grid">

        {galleryImages.map(
          (item, index) => (

            <div
              className="gi-card gi-animate"
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gi-overlay">

                <h3>
                  {item.title}
                </h3>

              </div>

            </div>

          )
        )}

      </div>

    </section>
  );
}