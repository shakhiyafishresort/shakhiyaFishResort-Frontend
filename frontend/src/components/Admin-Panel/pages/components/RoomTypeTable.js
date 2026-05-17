import React, { useEffect, useState } from "react";
import "../styles/RoomTypeTable.css";

import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

export default function RoomTypeTable() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    adults: "",
    children: "",
  });

  /* ================= FETCH ROOMS ================= */
  const fetchRooms = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://shakhiyafishresort-backend.onrender.com/api/roomtypes");
      const data = await res.json();

      console.log("ROOM API:", data);

      // SAFE NORMALIZATION
      const roomArray = Array.isArray(data)
        ? data
        : data.rooms || data.data || [];

      setRooms(roomArray);

    } catch (error) {
      console.log(error);
      toast.error("Failed To Load Rooms");
      setRooms([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this room type?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://shakhiyafishresort-backend.onrender.com/api/roomtypes/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error();

      toast.success("Room Deleted Successfully");

      fetchRooms();

    } catch (error) {
      console.log(error);
      toast.error("Delete Failed");
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (room) => {
    setEditingId(room._id);

    setEditData({
      name: room.name || "",
      description: room.description || "",
      image: room.image || "",
      price: room.price || "",
      adults: room.adults || "",
      children: room.children || "",
    });
  };

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= UPDATE ================= */
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(
        `https://shakhiyafishresort-backend.onrender.com/api/roomtypes/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editData),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Room Updated Successfully");

      setEditingId(null);

      fetchRooms();

    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  return (
    <div className="rtt-wrapper">

      <h2 className="rtt-title">All Room Types</h2>

      {/* LOADING */}
      {loading ? (
        <p className="rtt-loading">Loading Rooms...</p>
      ) : rooms.length === 0 ? (
        <p className="rtt-empty">No Room Types Found</p>
      ) : (
        <div className="rtt-table-wrapper">

          <table className="rtt-table">

            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Adults</th>
                <th>Children</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {rooms.map((room) => (

                <tr key={room._id}>

                  {/* IMAGE */}
                  <td>
                    {editingId === room._id ? (
                      <input
                        type="text"
                        name="image"
                        value={editData.image}
                        onChange={handleChange}
                        className="rtt-input"
                      />
                    ) : (
                      <img
                        src={
                          room.image?.startsWith("http")
                            ? room.image
                            : `https://shakhiyafishresort-backend.onrender.com${room.image}`
                        }
                        alt={room.name}
                        className="rtt-image"
                      />
                    )}
                  </td>

                  {/* NAME */}
                  <td>
                    {editingId === room._id ? (
                      <input
                        type="text"
                        name="name"
                        value={editData.name}
                        onChange={handleChange}
                        className="rtt-input"
                      />
                    ) : (
                      room.name
                    )}
                  </td>

                  {/* DESCRIPTION */}
                  <td>
                    {editingId === room._id ? (
                      <textarea
                        name="description"
                        value={editData.description}
                        onChange={handleChange}
                        className="rtt-textarea"
                      />
                    ) : (
                      room.description
                    )}
                  </td>

                  {/* PRICE */}
                  <td>
                    {editingId === room._id ? (
                      <input
                        type="number"
                        name="price"
                        value={editData.price}
                        onChange={handleChange}
                        className="rtt-input"
                      />
                    ) : (
                      `Rs. ${room.price}`
                    )}
                  </td>

                  {/* ADULTS */}
                  <td>
                    {editingId === room._id ? (
                      <input
                        type="number"
                        name="adults"
                        value={editData.adults}
                        onChange={handleChange}
                        className="rtt-input"
                      />
                    ) : (
                      room.adults
                    )}
                  </td>

                  {/* CHILDREN */}
                  <td>
                    {editingId === room._id ? (
                      <input
                        type="number"
                        name="children"
                        value={editData.children}
                        onChange={handleChange}
                        className="rtt-input"
                      />
                    ) : (
                      room.children
                    )}
                  </td>

                  {/* ACTIONS */}
                  <td className="rtt-actions">

                    {editingId === room._id ? (
                      <>
                        <button
                          className="rtt-save-btn"
                          onClick={() => handleUpdate(room._id)}
                        >
                          <FaSave />
                        </button>

                        <button
                          className="rtt-cancel-btn"
                          onClick={() => setEditingId(null)}
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="rtt-edit-btn"
                          onClick={() => handleEdit(room)}
                        >
                          <FaEdit />
                        </button>

                        <button
                          className="rtt-delete-btn"
                          onClick={() => handleDelete(room._id)}
                        >
                          <FaTrash />
                        </button>
                      </>
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