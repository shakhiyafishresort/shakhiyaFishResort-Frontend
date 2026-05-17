import React, { useEffect } from "react";
import "../styles/Services.css";

import {
  FaChild,
  FaParking,
  FaBed,
  FaWifi,
} from "react-icons/fa";

export default function Services() {
  useEffect(() => {
    const items = document.querySelectorAll(".sv-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sv-active");
          } else {
            entry.target.classList.remove("sv-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FaChild />,
      title: "Children Park",
      desc: "Safe and fun play area for kids",
    },
    {
      icon: <FaParking />,
      title: "Free Parking",
      desc: "Spacious and secure parking area",
    },
    {
      icon: <FaBed />,
      title: "Accommodation",
      desc: "Comfortable luxury rooms",
    },
    {
      icon: <FaBed />,
      title: "Pond Villa",
      desc: "Premium villa experience on water",
    },
    {
      icon: <FaWifi />,
      title: "Free WiFi",
      desc: "High-speed internet everywhere",
    },
  ];

  return (
    <section className="sv-wrapper">

      <div className="sv-container">

        <div className="sv-heading sv-reveal">
          <h2 className="sv-title">Our Services</h2>
          <p className="sv-subtitle">
            We provide the best facilities for your comfortable stay
          </p>
        </div>

        <div className="sv-grid">

          {services.map((item, index) => (
            <div className="sv-card sv-reveal" key={index}>

              <div className="sv-icon">{item.icon}</div>

              <h3 className="sv-card-title">{item.title}</h3>

              <p className="sv-card-desc">{item.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}