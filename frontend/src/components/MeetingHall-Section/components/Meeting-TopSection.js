import React from "react";


import "../styles/Meeting-TopSection.css";

export default function MeetingHallTopSection() {



  return (

    <section className="mh-wrapper">

      {/* OVERLAY */}
      <div className="mh-overlay"></div>

      {/* CONTENT */}
      <div className="mh-content">

        <span className="mh-tag">
          Corporate & Event Space
        </span>

        <h1 className="mh-title">
          Meeting Hall
        </h1>

        <p className="mh-subtitle">

          A modern and professional meeting space
          designed for seminars, workshops,
          corporate events, business discussions,
          and team meetings for up to 30 guests.

        </p>

        {/* <button
          className="mh-btn"
          onClick={() => navigate("/booknow")}
        >
          Book Meeting Hall
        </button> */}

      </div>

      {/* SCROLL */}
      <div className="mh-scroll">
        <span></span>
      </div>

    </section>
  );
}