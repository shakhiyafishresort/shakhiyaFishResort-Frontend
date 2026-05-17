import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/BlogCards.css";

export default function BlogCards() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://shakhiyafishresort-backend.onrender.com/api/blogs"
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch blogs");
        }

        setBlogs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log(error);
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blog-card-section">

      {/* ================= HEADER ================= */}
      <div className="blog-card-header">
        <span className="blog-small-title">
          Latest Resort Articles
        </span>

        <h2>Travel, Luxury & Resort Blogs</h2>

        <p>
          Explore travel tips, luxury room experiences,
          relaxing vacations, and resort lifestyle stories.
        </p>
      </div>

      {/* ================= LOADING ================= */}
      {loading && (
        <div className="blog-loading">
          Loading Blogs...
        </div>
      )}

      {/* ================= ERROR ================= */}
      {!loading && error && (
        <div className="blog-error">
          {error}
        </div>
      )}

      {/* ================= EMPTY ================= */}
      {!loading && !error && blogs.length === 0 && (
        <div className="blog-empty">
          No blogs available
        </div>
      )}

      {/* ================= BLOG GRID ================= */}
      <div className="blog-card-grid">

        {blogs.map((blog) => (
          <div className="blog-card" key={blog._id}>

            {/* IMAGE */}
            <div className="blog-card-image">
              <img
                src={`https://shakhiyafishresort-backend.onrender.com${blog.featuredImage}`}
                alt={blog.title}
              />
            </div>

            {/* CONTENT */}
            <div className="blog-card-content">

              <span className="blog-category">
                {blog.category}
              </span>

              <h3>{blog.title}</h3>

              <p>{blog.shortDescription}</p>

              {/* META */}
              <div className="blog-meta">

                <span>
                  <FaUser />
                  {blog.author}
                </span>

                <span>
                  <FaCalendarAlt />
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>

              </div>

              {/* READ MORE */}
              <Link
                to={`/blog/${blog.slug}`}
                className="blog-read-btn"
              >
                Read More <FaArrowRight />
              </Link>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}