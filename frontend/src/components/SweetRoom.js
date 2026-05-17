import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TopSection from '../pages/SweetRoom/components/top-section';
import DescriptionSweetRoom from '../pages/SweetRoom/components/Description-SweetRoom';
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function SweetRoom() {       
    return (
        <div>
            <Navbar />
            <TopSection />
            <DescriptionSweetRoom />
            <ChatbotFloatingButton />
            <Footer />  
        </div>
    );
}   