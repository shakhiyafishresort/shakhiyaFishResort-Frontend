import React, { useState } from "react";

import { toast } from "react-toastify";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "../styles/Register.css";

export default function Register() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  /* ================= SUBMIT ================= */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const res = await fetch(
          "https://shakhiyafishresort-backend.onrender.com/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify(
              formData
            ),
          }
        );

        const data =
          await res.json();

        if (!res.ok) {
          throw new Error(
            data.message
          );
        }

        toast.success(
          "Admin Added Successfully"
        );

        setFormData({
          name: "",
          email: "",
          password: "",
        });

      } catch (error) {

        toast.error(error.message);

      } finally {

        setLoading(false);

      }
    };

  return (

    <div className="register-container">

      <h2>Add Admin</h2>

      <form
        onSubmit={handleSubmit}
        className="register-form"
      >

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* PASSWORD WITH TOGGLE */}
        <div className="password-box">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={handleChange}
            required
          />

          <span
            className="eye-icon"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
          >
            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </span>

        </div>

        <button type="submit">
          {loading
            ? "Adding..."
            : "Add Admin"}
        </button>

      </form>

    </div>
  );
}