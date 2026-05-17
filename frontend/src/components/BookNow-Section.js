import React, { useState } from "react";
import "./Styles/BookNow-Section.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingRoom from "./BookingRoom";

export default function BookNow() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  return (
    <div>
        <Navbar />
        <BookingRoom /> 
    <Footer />
      </div>
  );
}