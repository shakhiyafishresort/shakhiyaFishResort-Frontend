import React, { useEffect, useState } from "react";
import "./Styles/RoomsDetails.css";

import {
  FaUser,
  FaChild,
  FaMoneyBillWave,
  FaBed,
} from "react-icons/fa";

export default function RoomsDetails() {

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH ROOMS FROM BACKEND ================= */
  useEffect(() => {

    const fetchRooms = async () => {
      try {

        const res = await fetch(
          "https://shakhiyafishresort-backend.onrender.com/api/roomtypes"
        );

        const data = await res.json();

        setRooms(Array.isArray(data) ? data : []);

      } catch (error) {
        console.log("Error fetching rooms:", error);
        setRooms([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  /* ================= ANIMATION ================= */
  useEffect(() => {

    const elements = document.querySelectorAll(".rm-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rm-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, [rooms]);

  return (
    <div className="rm-wrapper">

      <h2 className="rm-heading rm-reveal">Our Rooms</h2>

      <p className="rm-sub rm-reveal">
        Choose your perfect stay experience
      </p>

      {/* ================= LOADING ================= */}
      {loading && (
        <p className="rm-loading">Loading rooms...</p>
      )}

      {/* ================= EMPTY ================= */}
      {!loading && rooms.length === 0 && (
        <p className="rm-empty">No rooms available</p>
      )}

      {/* ================= GRID ================= */}
      <div className="rm-grid">

        {rooms.map((room) => (

          <div className="rm-card rm-reveal" key={room._id}>

            <img
             
  src={`https://shakhiyafishresort-backend.onrender.com${room.image}`}
  alt={room.name}
/>
            

            <div className="rm-content">

              <h3>{room.name}</h3>

              <p>{room.description}</p>

              {/* INFO */}
              <div className="rm-info">
                <span>
                  <FaUser /> {room.adults} Adults
                </span>

                <span>
                  <FaChild /> {room.children} Children
                </span>
              </div>

              {/* PRICE */}
              <div className="rm-price">
                <FaMoneyBillWave /> Rs. {room.price} / night
              </div>

              {/* BOOK BUTTON */}
              <a href="/booknow" className="rm-book-link">

                <button className="rm-book-btn">
                  <FaBed /> Book Now
                </button>

              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}