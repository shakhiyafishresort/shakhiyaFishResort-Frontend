import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Styles/RoomResult.css";

import {
  FaUser,
  FaChild,
  FaMoneyBillWave,
  FaTimes,
} from "react-icons/fa";

import { toast } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ResultRooms() {
  const location = useLocation();

  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialRequest: "",
  });

  const queryParams = new URLSearchParams(location.search);

  const checkIn = queryParams.get("checkIn");
  const checkOut = queryParams.get("checkOut");
  const promo = queryParams.get("promo");

  /* FETCH ROOMS */
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "http://localhost:5000/api/roomchecking/check-availability",
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

        setRooms(data.availableRooms || []);
      } catch (err) {
        toast.error("Failed to load rooms");
        setRooms([]);
      } finally {
        setLoading(false);
      }
    };

    if (checkIn && checkOut) fetchRooms();
  }, [checkIn, checkOut]);

  /* UNIQUE ROOM TYPES */
  const uniqueRooms = Array.from(
    new Map(
      rooms.map((room) => [
        room.roomType._id,
        room.roomType,
      ])
    ).values()
  );

  /* FORM CHANGE */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* BOOK ROOM */
  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      setBookingLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/bookings/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            specialRequest: formData.specialRequest,

            roomType: selectedRoom._id, // IMPORTANT

            checkIn,
            checkOut,
            totalPrice: selectedRoom.price,
            promoCode: promo,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Booking Successful");

      setSelectedRoom(null);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        specialRequest: "",
      });

    } catch (err) {
      toast.error("Booking Failed");
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <section className="rr-wrapper">

        <h2 className="rr-heading">Available Rooms</h2>

        <p className="rr-sub">
          {uniqueRooms.length > 0
            ? `Rooms available from ${checkIn} to ${checkOut}`
            : "No rooms available"}
        </p>

        {loading ? (
          <div className="rr-loading">Loading...</div>
        ) : (
          <div className="rr-grid">

            {uniqueRooms.map((room) => (
              <div className="rr-card" key={room._id}>

                <div className="rr-img-box">
                  <img
                    src={`http://localhost:5000${room.image}`}
                    alt={room.name}
                  />
                </div>

                <div className="rr-content">

                  <h3 className="rr-title">{room.name}</h3>

                  <p className="rr-desc">{room.description}</p>

                  <div className="rr-info">
                    <span><FaUser /> {room.adults} Adults</span>
                    <span><FaChild /> {room.children} Children</span>
                  </div>

                  <div className="rr-price">
                    <FaMoneyBillWave /> Rs. {room.price}
                  </div>

                  <button
                    className="rr-btn"
                    onClick={() => setSelectedRoom(room)}
                  >
                    Book This Room
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* MODAL */}
      {selectedRoom && (
        <div className="rr-modal-overlay">
          <div className="rr-modal">

            <button
              className="rr-close"
              onClick={() => setSelectedRoom(null)}
            >
              <FaTimes />
            </button>

            <h2>Book {selectedRoom.name}</h2>

           <form className="rr-form" onSubmit={handleBooking}>

  <input
    className="rr-input"
    name="fullName"
    placeholder="Full Name"
    onChange={handleChange}
    required
  />

  <input
    className="rr-input"
    name="email"
    placeholder="Email"
    onChange={handleChange}
    required
  />

  <input
    className="rr-input"
    name="phone"
    placeholder="Phone"
    onChange={handleChange}
    required
  />

  <textarea
    className="rr-textarea"
    name="specialRequest"
    placeholder="Special Request"
    onChange={handleChange}
  />

  <button className="rr-submit-btn" type="submit">
    {bookingLoading ? "Booking..." : "Confirm Booking"}
  </button>

</form>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}