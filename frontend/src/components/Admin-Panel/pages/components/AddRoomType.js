import React, { useState, useEffect } from "react";
import "../styles/AddRoomType.css";
import RoomTypeTable from "./RoomTypeTable";
import { toast } from "react-toastify";

export default function AddRoomType() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    price: "",
    adults: "",
    children: "",
  });

  const [preview, setPreview] = useState("");

  /* ================= HANDLE TEXT INPUT ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= HANDLE IMAGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      setPreview(URL.createObjectURL(file));
    }
  };

  /* ================= CLEAN PREVIEW MEMORY ================= */
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sendData = new FormData();

      sendData.append("name", formData.name);
      sendData.append("description", formData.description);
      sendData.append("image", formData.image);
      sendData.append("price", formData.price);
      sendData.append("adults", formData.adults);
      sendData.append("children", formData.children);

      const res = await fetch("http://localhost:5000/api/roomtypes", {
        method: "POST",
        body: sendData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Room Type Added Successfully");

      setFormData({
        name: "",
        description: "",
        image: null,
        price: "",
        adults: "",
        children: "",
      });

      setPreview("");

    } catch (error) {
      console.log(error);
      toast.error("Failed To Add Room Type");
    }
  };

  return (
    <div className="art-wrapper">

      <div className="art-container">

        <h2 className="art-title">Add Room Type</h2>

        <form className="art-form" onSubmit={handleSubmit}>

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Room Type Name"
            className="art-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Room Description"
            className="art-textarea"
            value={formData.description}
            onChange={handleChange}
            required
          />

          {/* IMAGE UPLOAD */}
          <input
            type="file"
            accept="image/*"
            className="art-input"
            onChange={handleImageChange}
            required
          />

          {/* IMAGE PREVIEW */}
          {preview && (
            <div className="art-preview-wrapper">
              <img
                src={preview}
                alt="preview"
                className="art-preview-image"
              />
            </div>
          )}

          {/* PRICE */}
          <input
            type="number"
            name="price"
            placeholder="Room Price"
            className="art-input"
            value={formData.price}
            onChange={handleChange}
            required
          />

          {/* ADULTS + CHILDREN */}
          <div className="art-row">

            <input
              type="number"
              name="adults"
              placeholder="Adults"
              className="art-input"
              value={formData.adults}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="children"
              placeholder="Children"
              className="art-input"
              value={formData.children}
              onChange={handleChange}
              required
            />

          </div>

          {/* BUTTON */}
          <button type="submit" className="art-btn">
            Add Room Type
          </button>

        </form>

      </div>

      {/* TABLE */}
      <RoomTypeTable />

    </div>
  );
}