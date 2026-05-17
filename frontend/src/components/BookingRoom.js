import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Styles/BookingRoom.css";

export default function BookingRoom() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [promo, setPromo] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheck = async () => {
    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://shakhiyafishresort-backend.onrender.com/api/roomchecking/check-availability",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            checkIn,
            checkOut,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      // ✅ SEND EVERYTHING VIA URL
      navigate(
        `/results?checkIn=${checkIn}&checkOut=${checkOut}&promo=${promo}`
      );

    } catch (error) {
      console.log(error);
      toast.error("Failed to check availability");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-section">
      <h2>Book Now</h2>
      <p>Secure your seat & enjoy your stay</p>

      <div className="booking-form">

        <div className="input-box">
          <label>Check In</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label>Check Out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label>Promo Code</label>
          <input
            type="text"
            placeholder="Enter promo code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
          />
        </div>

        <button onClick={handleCheck} disabled={loading}>
          {loading ? "Checking..." : "Check Availability"}
        </button>

      </div>
    </div>
  );
}