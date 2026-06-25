import React, { useEffect } from "react";
import "../styles/FacilitiesDetails.css";

import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaUtensils,
  FaSpa,
  FaDumbbell,
  FaConciergeBell,
  FaChild,
  FaBed,
  FaCocktail,
  FaTv,
  FaCar,
} from "react-icons/fa";

export default function FacilitiesDetails() {
  useEffect(() => {
    const items = document.querySelectorAll(".fd-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fd-active");
          } else {
            entry.target.classList.remove("fd-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const facilities = [
    {
      icon: <FaBed />,
      title: "Luxury Accommodation",
      desc: "Spacious rooms with modern comfort and elegant design.",
    },
    {
      icon: <FaWifi />,
      title: "Free High-Speed WiFi",
      desc: "Stay connected with fast internet across the resort.",
    },
    {
      icon: <FaParking />,
      title: "Free Parking",
      desc: "Safe and secure parking for all guests.",
    },
    {
      icon: <FaUtensils />,
      title: "Restaurant & Dining",
      desc: "Enjoy delicious local and international cuisines.",
    },
    {
      icon: <FaCocktail />,
      title: "Bar & Lounge",
      desc: "Relax with drinks and a peaceful ambiance.",
    },
    {
      icon: <FaSpa />,
      title: "Spa & Wellness",
      desc: "Rejuvenate your body and mind with spa services.",
    },
    {
      icon: <FaDumbbell />,
      title: "Fitness Center",
      desc: "Well-equipped gym for your daily workouts.",
    },
    {
      icon: <FaConciergeBell />,
      title: "24/7 Room Service",
      desc: "Round-the-clock service for your convenience.",
    },
    {
      icon: <FaChild />,
      title: "Children Park",
      desc: "Safe and fun play area for kids.",
    },
    {
      icon: <FaTv />,
      title: "Entertainment",
      desc: "Smart TV and entertainment in every room.",
    },
    {
      icon: <FaCar />,
      title: "Airport Pickup",
      desc: "Convenient transport service for guests.",
    },
  ];

  return (
    <section className="fd-wrapper">
      <div className="fd-container">

        <div className="fd-heading fd-reveal">
          <h2 className="fd-title">Our Facilities</h2>
          <p className="fd-subtitle">
            Enjoy world-class services designed for your comfort and relaxation
          </p>
        </div>

        <div className="fd-grid">
          {facilities.map((item, index) => (
            <div className="fd-card fd-reveal" key={index}>

              <div className="fd-icon">{item.icon}</div>

              <h3 className="fd-card-title">{item.title}</h3>

              <p className="fd-card-desc">{item.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}