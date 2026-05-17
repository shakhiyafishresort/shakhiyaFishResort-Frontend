import React from "react";
import TopSection from "./Contact-Section/components/top-section-contact";
import ContactForm from "./Contact-Section/components/ContactUs-form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function Contact() {
    return (
        <div>
            <Navbar />
            <TopSection />
            <ContactForm />
            <ChatbotFloatingButton />
            <Footer />
        </div>
    );
}