import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DescriptionRestroBar from "./Restro-Section/components/DescriptionRestro";
import TopSectionRestro from "./Restro-Section/components/top-section";
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function Restro() {
  return (
    <div>
      <Navbar />
      <TopSectionRestro />
      <DescriptionRestroBar />
      <ChatbotFloatingButton />
      <Footer />
    </div>
  );
}