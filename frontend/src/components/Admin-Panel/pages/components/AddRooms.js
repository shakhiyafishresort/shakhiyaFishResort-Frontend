import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../styles/AddRooms.css";

export default function AddRooms() {

  const [roomNumber, setRoomNumber] = useState("");
  const [roomType, setRoomType] = useState("");

  const [roomTypes, setRoomTypes] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [editId, setEditId] = useState(null);

  const [editStatus, setEditStatus] =
    useState("");

  /* ================= FETCH ================= */

  useEffect(() => {

    fetchRoomTypes();

    fetchRooms();

  }, []);

  const fetchRoomTypes = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/api/roomtypes"
      );

      const data = await res.json();

      setRoomTypes(
        Array.isArray(data)
          ? data
          : data.roomTypes || []
      );

    } catch (error) {

      toast.error("Failed to load room types");

    }
  };

  const fetchRooms = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/api/roomnumbers"
      );

      const data = await res.json();

      setRooms(
        Array.isArray(data)
          ? data
          : data.rooms || []
      );

    } catch (error) {

      toast.error("Failed to load rooms");

    }
  };

  /* ================= ADD ROOM ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch(
        "http://localhost:5000/api/roomnumbers",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            roomNumber,
            roomType,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Room Added");

      setRoomNumber("");

      setRoomType("");

      fetchRooms();

    } catch (error) {

      toast.error("Failed to add room");

    }
  };

  /* ================= DELETE ROOM ================= */

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this room?"
      );

    if (!confirmDelete) return;

    try {

      const res = await fetch(
        `http://localhost:5000/api/roomnumbers/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Room Deleted");

      fetchRooms();

    } catch (error) {

      toast.error("Delete Failed");

    }
  };

  /* ================= EDIT ================= */

  const handleEdit = (room) => {

    setEditId(room._id);

    setEditStatus(room.status);

  };

  const cancelEdit = () => {

    setEditId(null);

    setEditStatus("");

  };

  /* ================= SAVE ================= */

  const saveStatus = async (id) => {

    try {

      const res = await fetch(
        `http://localhost:5000/api/roomnumbers/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            status: editStatus,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Room Updated");

      setEditId(null);

      setEditStatus("");

      fetchRooms();

    } catch (error) {

      toast.error("Update Failed");

    }
  };

  return (

    <div className="add-room-wrapper">

      <div className="room-header">

        <h2>
          Room Number Management
        </h2>

        <p>
          Manage hotel rooms and maintenance status
        </p>

      </div>

      {/* ================= FORM ================= */}

      <form
        onSubmit={handleSubmit}
        className="add-room-form"
      >

        <input
          type="text"
          placeholder="Room Number"
          value={roomNumber}
          onChange={(e) =>
            setRoomNumber(e.target.value)
          }
          required
        />

        <select
          value={roomType}
          onChange={(e) =>
            setRoomType(e.target.value)
          }
          required
        >

          <option value="">
            Select Room Type
          </option>

          {roomTypes.map((type) => (

            <option
              key={type._id}
              value={type._id}
            >
              {type.name}
            </option>

          ))}

        </select>

        <button type="submit">
          Add Room
        </button>

      </form>

      {/* ================= TABLE ================= */}

      <div className="room-table-wrapper">

        <table className="room-table">

          <thead>

            <tr>

              <th>Room Number</th>

              <th>Room Type</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {rooms.map((room) => (

              <tr key={room._id}>

                <td>
                  {room.roomNumber}
                </td>

                <td>
                  {room.roomType?.name}
                </td>

                {/* STATUS */}

                <td>

                  {editId === room._id ? (

                    <select
                      value={editStatus}
                      onChange={(e) =>
                        setEditStatus(
                          e.target.value
                        )
                      }
                    >

                      <option value="available">
                        Available
                      </option>

                      <option value="maintenance">
                        Maintenance
                      </option>

                    </select>

                  ) : (

                    <span
                      className={`status-room status-${room.status}`}
                    >
                      {room.status}
                    </span>

                  )}

                </td>

                {/* ACTIONS */}

                <td className="room-actions">

                  {editId === room._id ? (

                    <>

                      <button
                        className="save-btn"
                        onClick={() =>
                          saveStatus(room._id)
                        }
                      >
                        Save
                      </button>

                      <button
                        className="cancel-btn"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>

                    </>

                  ) : (

                    <>

                      <button
                        className="edit-btn"
                        onClick={() =>
                          handleEdit(room)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(room._id)
                        }
                      >
                        Delete
                      </button>

                    </>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}