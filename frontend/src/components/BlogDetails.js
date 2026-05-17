import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { FaUser, FaCalendarAlt } from "react-icons/fa";

import "./Styles/BlogDetails.css";

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH BLOG ================= */

  useEffect(() => {
  const fetchBlog = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/blogs/${slug}`
      );

      const data = await res.json();
      setBlog(data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  }, [slug]);

  

  if (loading) {
    return <div className="bd-loading">Loading Blog...</div>;
  }

  if (!blog) {
    return <div className="bd-loading">Blog Not Found</div>;
  }

  return (
    <>
      <Navbar />

      <div className="bd-wrapper">

        {/* ================= HERO ================= */}
        <div className="bd-hero">

          <img
            src={`http://localhost:5000${blog.featuredImage}`}
            alt={blog.title}
          />

          <div className="bd-overlay"></div>

          <div className="bd-hero-content">

            <span className="bd-category">
              {blog.category}
            </span>

            <h1 className="bd-title">
              {blog.title}
            </h1>

            <div className="bd-meta">

              <span>
                <FaUser /> {blog.author}
              </span>

              <span>
                <FaCalendarAlt />{" "}
                {new Date(blog.createdAt).toDateString()}
              </span>

            </div>

          </div>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="bd-content">

          <p>{blog.description}</p>

        </div>

        {/* ================= CTA ================= */}
        <div className="bd-cta">

          <h3>Experience Luxury Stay With Us</h3>

          <p>
            Book your room now and enjoy premium comfort, nature view,
            and unforgettable hospitality experience.
          </p>

          <button onClick={() => navigate("/booknow")}>
            Book Now
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}