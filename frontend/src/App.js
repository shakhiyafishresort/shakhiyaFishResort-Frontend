import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Rooms from "./components/Rooms-Section";
import Facility from "./components/Facility";
import ResultRooms from "./components/RoomResult";
import BookNow from "./components/BookNow-Section";
import AdminDashboard from "./components/AdminDashboard";
import DeluxeRoom from "./components/DeluxeRoom";
import SuperDeluxe from "./components/SweetRoom";
import AcRoom from "./components/AcRoom";
import NonAcRoom from "./components/NonAcRoom";
import BlogSection from "./components/BlogSection";
import BlogDetails from "./components/BlogDetails";
import MeetingHall from "./components/MeetingHall";
import Restro from "./components/Restro";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Gallery from "./components/Gallery";
function App() {
  return (
    <Router>
       <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/facilities" element={<Facility />} />
        <Route path="/results" element={<ResultRooms />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/deluxe-room" element={<DeluxeRoom />} />
        <Route path="/suite-room" element={<SuperDeluxe />} />
        <Route path="/ac-room" element={<AcRoom />} />
        <Route path="/non-ac-room" element={<NonAcRoom />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/login-admin-dashboard" element={<Login />} />
        <Route path="/admin/*" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/meeting-hall" element={<MeetingHall />} />
        <Route path="/restro" element={<Restro />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;