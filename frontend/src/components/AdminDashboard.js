import React from "react";

import {
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddRoomType from "./Admin-Panel/pages/components/AddRoomType";

import AddRooms from "./Admin-Panel/pages/components/AddRooms";

import ViewBooking from "./Admin-Panel/pages/components/ViewBooking";

import Overview from "./Admin-Panel/pages/components/Overview";
import AddBlog from "./Admin-Panel/pages/components/AddBlog";
import Register from "./Login-Section/components/Register";
import ViewContact from "./Admin-Panel/pages/components/ViewContact";
import "./Styles/AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminInfo");
  navigate("/login-admin-dashboard");
};

  return (

    <div className="admin-wrapper">

      {/* ================= SIDEBAR ================= */}

      <div className="admin-sidebar">

        {/* LOGO */}

        <div className="admin-logo">

          <h2>
            🏨 Resort Admin
          </h2>

        </div>

        {/* MENU */}

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive
              ? "admin-link active"
              : "admin-link"
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="/admin/room-types"
          className={({ isActive }) =>
            isActive
              ? "admin-link active"
              : "admin-link"
          }
        >
          Manage Room Types
        </NavLink>

        <NavLink
          to="/admin/rooms"
          className={({ isActive }) =>
            isActive
              ? "admin-link active"
              : "admin-link"
          }
        >
          Manage Rooms
        </NavLink>
        <NavLink
          to="/admin/blogs"
          className={({ isActive }) =>
            isActive              ? "admin-link active"
              : "admin-link"
          }
        >
          Manage Blogs
        </NavLink>

        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            isActive
              ? "admin-link active"
              : "admin-link"
          }
        >
          Bookings
        </NavLink>
        <NavLink
          to="/admin/register"
          className={({ isActive }) =>
            isActive
              ? "admin-link active"
              : "admin-link"
          }
        >
          Add Admin
        </NavLink>
        <NavLink
          to="/admin/view-contact"
          className={({ isActive }) =>
            isActive
              ? "admin-link active"
              : "admin-link"
          }
        >
          View Contact Messages
        </NavLink>
        <button
  onClick={handleLogout}
  className="admin-link logout-btn"
>
  Logout
</button>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="admin-content">

        <Routes>

          <Route
            path="/"
            element={<Overview />}
          />

          <Route
            path="/room-types"
            element={<AddRoomType />}
          />

          <Route
            path="/rooms"
            element={<AddRooms />}
          />

          <Route
            path="/bookings"
            element={<ViewBooking />}
          />

          <Route
            path="/blogs"
            element={<AddBlog />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/view-contact"
            element={<ViewContact />}
          />

        </Routes>

      </div>

    </div>
  );
}