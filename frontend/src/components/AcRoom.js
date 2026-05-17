import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TopSection from '../pages/AcRoom/components/top-section';
import DescriptionAcRoom from '../pages/AcRoom/components/Description-AcRoom';
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function AcRoom() {       
    return (
        <div>
            <Navbar />
            <TopSection />
            <DescriptionAcRoom />
            <ChatbotFloatingButton />
            <Footer />  
        </div>
    );
}