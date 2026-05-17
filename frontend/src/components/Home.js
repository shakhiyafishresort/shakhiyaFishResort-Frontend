import React from 'react';
import Navbar from './Navbar';
import ScrollImage from './ScrollImage';
import BookingRoom from './BookingRoom';
import WelcomeMessage from './WelcomeMessage';
import RoomsDetails from './RoomsDetails';
import Footer from './Footer';
import FindUsOn from './FindUsOn';
import FacilitiesDetails from "./Facilities-Section/components/FacilitiesDetails";
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function Home() {
  return (

    <div>
      <Navbar />
      <ScrollImage />
        <BookingRoom />
        <WelcomeMessage />
        <RoomsDetails />
        <FacilitiesDetails />
        <FindUsOn />
        <ChatbotFloatingButton />
      <Footer />
    </div>
  );
}