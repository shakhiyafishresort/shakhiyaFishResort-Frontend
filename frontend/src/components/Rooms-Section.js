import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopSection from "./Room-Section/components/top-section-room";
import BookingRoom from "./BookingRoom";
import RoomsDetails from "./RoomsDetails";
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function Rooms() {
  return (
    <div>
      <Navbar />
      <TopSection />
        <BookingRoom />
        <RoomsDetails />
        <ChatbotFloatingButton />
        
      <Footer />
    </div>
  );
}