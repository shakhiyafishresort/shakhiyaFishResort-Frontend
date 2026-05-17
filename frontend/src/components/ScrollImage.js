import React, { useEffect, useState } from "react";
import "./Styles/ScrollImages.css";

export default function ScrollImage() {
  const slides = [
    {
      image: "/images/Super-Delux-1.jpeg",
      title: "Luxury Deluxe Room",
      subtitle: "Experience comfort, elegance and peaceful stay.",
      button: "Explore More",
    },
    {
      image: "/images/Delux-1.jpeg",
      title: "Super Deluxe Experience",
      subtitle: "Premium interiors with world-class hospitality.",
      button: "Explore More",
    },
    {
      image: "/images/Natural-View.jpeg",
      title: "Nature View Rooms",
      subtitle: "Beautiful nature view with luxury private stay.",
      button: "Explore More",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [slides.length]);

  return (
    <div
      className="slider"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      <div className="overlay">
        <div key={current} className="slide-content">
          <h1>{slides[current].title}</h1>
          <p>{slides[current].subtitle}</p>
          <button>{slides[current].button}</button>
        </div>
      </div>
    </div>
  );
}