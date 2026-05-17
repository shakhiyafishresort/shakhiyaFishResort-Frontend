import React, { useEffect } from "react";
import "./Styles/WelcomeMessage.css";

export default function WelcomeMessage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".wm-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wm-active");
          } else {
            entry.target.classList.remove("wm-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="wm-wrapper">
      <div className="wm-container">

        {/* IMAGE */}
        <div className="wm-image wm-reveal wm-left">
          <img src="/images/main-hotel.jpeg" alt="Sakhiya Fish Resort" />
        </div>

        {/* TEXT */}
        <div className="wm-text wm-reveal wm-right">

          <h2 className="wm-title">
            Welcome To <br />
            Shakhiya Fish Resort
          </h2>

          <p className="wm-description">
            Where Nature Meets Peace & Fresh Experience
          </p>

          <p className="wm-paragraph">
            Wander through serene natural ponds, enjoy the freshness of fish farming,
            and relax in our peaceful countryside environment. Shakhiya Fish Resort
            blends nature, water life, and comfort in a refreshing way.
            <br /><br />
            Enjoy fishing activities, family-friendly spaces, and a peaceful escape
            from city life. Come reconnect with nature and create unforgettable memories.
          </p>
<a href="/about">
          <button className="wm-button">Explore More</button>
        </a>
        </div>

      </div>
    </div>
  );
}