import React, {
  useEffect,
  useState,
} from "react";

import "../styles/Overview.css";

export default function Overview() {

  const [stats, setStats] =
    useState({});

  const [recentBookings,
    setRecentBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /* ================= FETCH ================= */

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard =
    async () => {

      try {

        const res = await fetch(
          "https://shakhiyafishresort-backend.onrender.com/api/dashboard"
        );

        const data =
          await res.json();

        setStats(data.stats || {});

        setRecentBookings(
          data.recentBookings || []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  if (loading) {
    return (
      <div className="overview-loading">
        Loading Dashboard...
      </div>
    );
  }

  return (

    <div className="overview-container">

      <div className="overview-header">

        <h1>
          Hotel Dashboard
        </h1>

        <p>
          Welcome to hotel management admin panel
        </p>

      </div>

      {/* ================= STATS ================= */}

      <div className="overview-grid">

        <div className="overview-card">
          <h3>Total Bookings</h3>
          <span>
            {stats.totalBookings}
          </span>
        </div>

        <div className="overview-card">
          <h3>Pending</h3>
          <span>
            {stats.pendingBookings}
          </span>
        </div>

        <div className="overview-card">
          <h3>Confirmed</h3>
          <span>
            {stats.confirmedBookings}
          </span>
        </div>

        <div className="overview-card">
          <h3>Total Rooms</h3>
          <span>
            {stats.totalRooms}
          </span>
        </div>

        <div className="overview-card">
          <h3>Available Rooms</h3>
          <span>
            {stats.availableRooms}
          </span>
        </div>

        <div className="overview-card">
          <h3>Maintenance</h3>
          <span>
            {stats.maintenanceRooms}
          </span>
        </div>

        <div className="overview-card">
          <h3>Room Types</h3>
          <span>
            {stats.totalRoomTypes}
          </span>
        </div>

        <div className="overview-card revenue">
          <h3>Total Revenue</h3>
          <span>
            Rs. {stats.totalRevenue}
          </span>
        </div>

      </div>

      {/* ================= RECENT BOOKINGS ================= */}

      <div className="recent-bookings">

        <h2>
          Recent Bookings
        </h2>

        <table>

          <thead>
            <tr>
              <th>Customer</th>
              <th>Room</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>

            {recentBookings.map((b) => (

              <tr key={b._id}>

                <td>
                  {b.fullName}
                </td>

                <td>
                  {b.roomType?.name}
                </td>

                <td>
                  <span
                    className={`booking-status ${b.status}`}
                  >
                    {b.status}
                  </span>
                </td>

                <td>
                  Rs. {b.totalPrice}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}