import React, { useEffect, useState } from "react";
import "../styles/ViewBooking.css";
import { toast } from "react-toastify";

export default function ViewBooking() {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editId, setEditId] = useState(null);

  const [editData, setEditData] = useState({
    fullName: "",
    email: "",
    phone: "",
    status: "",
  });

  /* ================= FETCH BOOKINGS ================= */
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {

      setLoading(true);

      const res = await fetch(
        "https://shakhiyafishresort-backend.onrender.com/api/bookings/book"
      );

      const data = await res.json();

      setBookings(
        Array.isArray(data)
          ? data
          : data.bookings || []
      );

    } catch (error) {

      console.log(error);

      toast.error("Failed to load bookings");

    } finally {

      setLoading(false);

    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this booking?"
    );

    if (!confirmDelete) return;

    try {

      const res = await fetch(
        `https://shakhiyafishresort-backend.onrender.com/api/bookings/book/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Booking deleted");

      fetchBookings();

    } catch (error) {

      console.log(error);

      toast.error("Delete failed");

    }
  };

  /* ================= START EDIT ================= */
  const handleEdit = (booking) => {

    setEditId(booking._id);

    setEditData({
      fullName: booking.fullName || "",
      email: booking.email || "",
      phone: booking.phone || "",
      status: booking.status || "",
    });
  };

  /* ================= CANCEL EDIT ================= */
  const cancelEdit = () => {

    setEditId(null);

    setEditData({
      fullName: "",
      email: "",
      phone: "",
      status: "",
    });
  };

  /* ================= SAVE EDIT ================= */
  const saveEdit = async (id) => {

    try {

      const res = await fetch(
        `https://shakhiyafishresort-backend.onrender.com/api/bookings/book/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(editData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Booking updated");

      setEditId(null);

      fetchBookings();

    } catch (error) {

      console.log(error);

      toast.error("Update failed");

    }
  };

  /* ================= STATUS STYLE ================= */
  const getStatusClass = (status) => {

    switch (status) {

      case "pending":
        return "vb-status vb-pending";

      case "confirmed":
        return "vb-status vb-confirmed";

      case "cancelled":
        return "vb-status vb-cancelled";

      default:
        return "vb-status";
    }
  };

  return (
    <div className="vb-wrapper">

      <h2 className="vb-title">
        Booking Management
      </h2>

      {loading ? (

        <p className="vb-loading">
          Loading bookings...
        </p>

      ) : bookings.length === 0 ? (

        <p className="vb-empty">
          No bookings found
        </p>

      ) : (

        <div className="vb-table-wrapper">

          <table className="vb-table">

            <thead>

              <tr>
                <th>Customer</th>
                <th>Phone</th>
                <th>Room Type</th>
                <th>Room No</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr key={booking._id}>

                  {/* CUSTOMER */}
                  <td>

                    {editId === booking._id ? (

                      <div className="vb-edit-group">

                        <input
                          type="text"
                          value={editData.fullName}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              fullName: e.target.value,
                            })
                          }
                        />

                        <input
                          type="email"
                          value={editData.email}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              email: e.target.value,
                            })
                          }
                        />

                      </div>

                    ) : (

                      <div>

                        <div className="vb-name">
                          {booking.fullName}
                        </div>

                        <small>
                          {booking.email}
                        </small>

                      </div>

                    )}

                  </td>

                  {/* PHONE */}
                  <td>

                    {editId === booking._id ? (

                      <input
                        type="text"
                        className="vb-phone-input"
                        value={editData.phone}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            phone: e.target.value,
                          })
                        }
                      />

                    ) : (
                      booking.phone
                    )}

                  </td>

                  {/* ROOM TYPE */}
                  <td>
                    {booking.roomType?.name}
                  </td>

                  {/* ROOM NUMBER */}
                  <td>
                    {booking.room?.roomNumber}
                  </td>

                  {/* CHECK IN */}
                  <td>
                    {new Date(
                      booking.checkIn
                    ).toLocaleDateString()}
                  </td>

                  {/* CHECK OUT */}
                  <td>
                    {new Date(
                      booking.checkOut
                    ).toLocaleDateString()}
                  </td>

                  {/* PRICE */}
                  <td>
                    Rs. {booking.totalPrice}
                  </td>

                  {/* STATUS */}
                  <td>

                    {editId === booking._id ? (

                      <select
                        className="vb-select"
                        value={editData.status}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            status: e.target.value,
                          })
                        }
                      >
                        <option value="pending">
                          Pending
                        </option>

                        <option value="confirmed">
                          Confirmed
                        </option>

                        <option value="cancelled">
                          Cancelled
                        </option>

                      </select>

                    ) : (

                      <span
                        className={getStatusClass(
                          booking.status
                        )}
                      >
                        {booking.status}
                      </span>

                    )}

                  </td>

                  {/* ACTIONS */}
                  <td>

                    {editId === booking._id ? (

                      <div className="vb-btn-group">

                        <button
                          className="vb-save-btn"
                          onClick={() =>
                            saveEdit(booking._id)
                          }
                        >
                          Save
                        </button>

                        <button
                          className="vb-cancel-btn"
                          onClick={cancelEdit}
                        >
                          Cancel
                        </button>

                      </div>

                    ) : (

                      <div className="vb-btn-group">

                        <button
                          className="vb-edit-btn"
                          onClick={() =>
                            handleEdit(booking)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="vb-delete-btn"
                          onClick={() =>
                            handleDelete(booking._id)
                          }
                        >
                          Delete
                        </button>

                      </div>

                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}