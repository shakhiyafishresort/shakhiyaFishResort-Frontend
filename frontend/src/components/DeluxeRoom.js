import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TopSection from '../pages/DeluxeRoom/components/top-section';
import DescriptionDeluxe from '../pages/DeluxeRoom/components/DescriptionDeluxe';
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function DeluxeRoom() {       
    return (
        <div>
            <Navbar />
            <TopSection />
            <DescriptionDeluxe />
            <ChatbotFloatingButton />
            <Footer />  
        </div>
    );
}