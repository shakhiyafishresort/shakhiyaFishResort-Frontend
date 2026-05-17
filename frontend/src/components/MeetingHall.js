import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import MeetingHallTopSection from "./MeetingHall-Section/components/Meeting-TopSection";
import DescriptionMeetingHall from "./MeetingHall-Section/components/DescriptionMeetingHall";
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function MeetingHall() {
  return (
    <div>
      <NavBar />
      <MeetingHallTopSection />
      <DescriptionMeetingHall />
      <ChatbotFloatingButton />
      <Footer />
    </div>
  );
}