import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TopSection from '../pages/NonAcRoom/components/top-section';
import DescriptionNonAc from '../pages/NonAcRoom/components/Description-NonAc';
import ChatbotFloatingButton from './ChatFloatingButton/components/ChatFloatingButton';
export default function NonAcRoom() {   
    return (
        <div>
            <Navbar />
            <TopSection />

            <DescriptionNonAc />
            <ChatbotFloatingButton />
            <Footer />  
        </div>
    );
}   