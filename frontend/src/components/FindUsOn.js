import React, { useEffect } from "react";
import "./Styles/FindUsOn.css";

export default function FindUsOn() {
  useEffect(() => {
    const items = document.querySelectorAll(".fuo-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fuo-active");
          } else {
            entry.target.classList.remove("fuo-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const brands = [
    {
      name: "Booking.com",
      img: "/images/booking.png",
      link: "https://www.booking.com/searchresults.html?aid=356980&label=gog235jc-10CAsoqwFCG3Nha2hpeWEtZmlzaC1yZXNvcnQtcHZ0LWx0ZEgzWANoqwGIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AvKr4M8GwAIB0gIkMGUzYTVkY2ItYTZiMy00MTA5LWJiYjYtYTU0Y2U5MmU2MmMz2AIB4AIB&sid=b08a65c9a0f31cee11fa05de1d0c1b65&dest_id=-1021834&dest_type=city&srpvid=b2b41a39efd201d5&",
    },
    {
      name: "Agoda",
      img: "/images/agoda.png",
      link: "https://www.agoda.com/en-in/sakhiya-fish-resort-pvt-ltd/hotel/tilottama-np.html?cid=1844104&ds=BUIxOcnUn9UzOePl",
    },
    {
      name: "Basiyo",
      img: "/images/basiyo.png",
      link: "https://basiyo.com/property/sakhiya-fish-resort-manmateriya-chappiya",
    },
    // {
    //   name: "TripAdvisor",
    //   img: "/images/tripadvisor.png",
    //   link: "https://www.tripadvisor.com",
    // },
  ];

  return (
    <section className="fuo-wrapper">
      <div className="fuo-container">

        <div className="fuo-heading fuo-reveal">
          <h2 className="fuo-title">Find Us On</h2>
          <p className="fuo-subtitle">
            Book your stay through trusted travel platforms
          </p>
        </div>

        <div className="fuo-grid">
          {brands.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="fuo-card fuo-reveal"
              key={index}
            >
              <img
                src={item.img}
                alt={item.name}
                className="fuo-image"
              />

              <p className="fuo-brand-name">{item.name}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}