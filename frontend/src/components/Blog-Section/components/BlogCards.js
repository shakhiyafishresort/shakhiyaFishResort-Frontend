import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/BlogCards.css";

export default function BlogCards() {

  const [blogs, setBlogs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /* ================= FETCH BLOGS ================= */

  useEffect(() => {

    fetchBlogs();

  }, []);

  const fetchBlogs = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/api/blogs"
      );

      const data =
        await res.json();

      setBlogs(
        Array.isArray(data)
          ? data
          : []
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (

    <section className="blog-card-section">

      {/* ================= HEADING ================= */}

      <div className="blog-card-header">

        <span className="blog-small-title">
          Latest Resort Articles
        </span>

        <h2>
          Travel, Luxury & Resort Blogs
        </h2>

        <p>
          Explore travel tips, luxury room experiences,
          relaxing vacations, and resort lifestyle stories.
        </p>

      </div>

      {/* ================= LOADING ================= */}

      {loading ? (

        <div className="blog-loading">
          Loading Blogs...
        </div>

      ) : (

        <div className="blog-card-grid">

          {blogs.map((blog) => (

            <div
              className="blog-card"
              key={blog._id}
            >

              {/* IMAGE */}

              <div className="blog-card-image">

                <img
                  src={`http://localhost:5000${blog.featuredImage}`}
                  alt={blog.title}
                />

              </div>

              {/* CONTENT */}

              <div className="blog-card-content">

                {/* CATEGORY */}

                <span className="blog-category">

                  {blog.category}

                </span>

                {/* TITLE */}

                <h3>

                  {blog.title}

                </h3>

                {/* DESCRIPTION */}

                <p>

                  {blog.shortDescription}

                </p>

                {/* META */}

                <div className="blog-meta">

                  <span>
                    <FaUser />
                    {blog.author}
                  </span>

                  <span>
                    <FaCalendarAlt />
                    {
                      new Date(
                        blog.createdAt
                      ).toLocaleDateString()
                    }
                  </span>

                </div>

                {/* BUTTON */}

                <Link
                  to={`/blog/${blog.slug}`}
                  className="blog-read-btn"
                >

                  Read More

                  <FaArrowRight />

                </Link>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}