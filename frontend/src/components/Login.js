import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "./Styles/Login.css";

export default function Login() {

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const res = await fetch(
          "http://localhost:5000/api/auth/login",
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

        localStorage.setItem(
          "adminToken",
          data.token
        );

        localStorage.setItem(
          "adminInfo",
          JSON.stringify(
            data.admin
          )
        );

        toast.success(
          "Login Successful"
        );

        navigate("/admin");

      } catch (error) {

        toast.error(error.message);

      } finally {

        setLoading(false);

      }
    };

  return (

    <div className="login-container">

      <div className="login-card">

        {/* HEADER ADDED */}

        <div className="login-header">

          {/* LEFT LOGO */}
          <img
            src="/images/main-logo-removebg.png"
            alt="Logo"
            className="login-logo"
          />

          {/* CENTER TEXT */}
          <h2>
            Shakhiya Fish Resort
          </h2>

        </div>

        <p className="login-subtitle">
          Admin Panel Login
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

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
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}