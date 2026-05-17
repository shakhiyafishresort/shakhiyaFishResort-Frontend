import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopSection from "./Facilities-Section/components/top-section-facilities";
import FacilitiesDetails from "./Facilities-Section/components/FacilitiesDetails";
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function Facility() {
  return (
    <div>
      <Navbar />
      <TopSection />
      <FacilitiesDetails />
      <ChatbotFloatingButton />
      <Footer />
    </div>
  );
}