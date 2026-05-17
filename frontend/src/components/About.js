import React from "react";
import Navbar from "./Navbar";
import TopSection from "./About-Section/components/top-section";
import Services from "./About-Section/components/Services";
import BookingRoom from "./BookingRoom";
import WelcomeMessage from "./WelcomeMessage";
import Footer from "./Footer";
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function About() {
  return (
    <div>
      <Navbar />
      <TopSection />
      <BookingRoom />
      <WelcomeMessage />
        <Services />
        <ChatbotFloatingButton />
      <Footer />
    </div>
  );
}   