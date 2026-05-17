import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import TopSection from './Blog-Section/components/top-section';
import BlogCards from './Blog-Section/components/BlogCards';
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function BlogSection() {
    return (
        <div>
            <NavBar />
            <TopSection />
            <BlogCards />
            <ChatbotFloatingButton />
            <Footer />  
        </div>
    );
}