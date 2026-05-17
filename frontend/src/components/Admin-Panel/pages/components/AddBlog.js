import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

import "../styles/AddBlog.css";

export default function AddBlog() {

  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] =
    useState(false);

  const [editId, setEditId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      shortDescription: "",
      description: "",
      category: "",
      tags: "",
      hashtags: "",
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      author: "Admin",
      status: "published",
    });

  const [featuredImage, setFeaturedImage] =
    useState(null);

  /* ================= FETCH BLOGS ================= */

  useEffect(() => {

    fetchBlogs();

  }, []);

  const fetchBlogs = async () => {

    try {

      const res = await fetch(
        "https://shakhiyafishresort-backend.onrender.com/api/blogs"
      );

      const data = await res.json();

      setBlogs(
        Array.isArray(data)
          ? data
          : []
      );

    } catch (error) {

      toast.error("Failed to load blogs");

    }
  };

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  /* ================= HANDLE IMAGE ================= */

  const handleImage = (e) => {

    setFeaturedImage(
      e.target.files[0]
    );

  };

  /* ================= RESET ================= */

  const resetForm = () => {

    setFormData({
      title: "",
      shortDescription: "",
      description: "",
      category: "",
      tags: "",
      hashtags: "",
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      author: "Admin",
      status: "published",
    });

    setFeaturedImage(null);

    setEditId(null);

  };

  /* ================= EDIT BLOG ================= */

  const handleEdit = (blog) => {

    setEditId(blog._id);

    setFormData({
      title: blog.title || "",
      shortDescription:
        blog.shortDescription || "",
      description:
        blog.description || "",
      category:
        blog.category || "",
      tags:
        blog.tags?.join(", ") || "",
      hashtags:
        blog.hashtags?.join(", ") || "",
      metaTitle:
        blog.metaTitle || "",
      metaDescription:
        blog.metaDescription || "",
      keywords:
        blog.keywords?.join(", ") || "",
      author:
        blog.author || "Admin",
      status:
        blog.status || "published",
    });

  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const blogData =
        new FormData();

      Object.keys(formData).forEach(
        (key) => {
          blogData.append(
            key,
            formData[key]
          );
        }
      );

      if (featuredImage) {

        blogData.append(
          "featuredImage",
          featuredImage
        );

      }

      let url =
        "https://shakhiyafishresort-backend.onrender.com/api/blogs";

      let method = "POST";

      /* UPDATE */

      if (editId) {

        url = `${url}/${editId}`;

        method = "PUT";

      }

      const res = await fetch(url, {
        method,
        body: blogData,
      });

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message
        );
      }

      toast.success(
        editId
          ? "Blog Updated"
          : "Blog Added"
      );

      resetForm();

      fetchBlogs();

    } catch (error) {

      toast.error(
        error.message
      );

    } finally {

      setLoading(false);

    }
  };

  /* ================= DELETE ================= */

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this blog?"
      );

    if (!confirmDelete) return;

    try {

      const res = await fetch(
        `https://shakhiyafishresort-backend.onrender.com/api/blogs/${id}`,
        {
          method: "DELETE",
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
        "Blog Deleted"
      );

      fetchBlogs();

    } catch (error) {

      toast.error(
        error.message
      );

    }
  };

  return (

    <div className="add-blog-wrapper">

      {/* ================= HEADER ================= */}

      <div className="add-blog-header">

        <h2>
          Blog Management
        </h2>

        <p>
          Create and manage SEO blogs
          for your resort website
        </p>

      </div>

      {/* ================= FORM ================= */}

      <form
        className="add-blog-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label>
            Blog Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Enter blog title"
            value={formData.title}
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-group">

          <label>
            Short Description
          </label>

          <textarea
            name="shortDescription"
            rows="3"
            placeholder="Short description"
            value={
              formData.shortDescription
            }
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-group">

          <label>
            Full Description
          </label>

          <textarea
            name="description"
            rows="8"
            placeholder="Full blog content"
            value={
              formData.description
            }
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-group">

          <label>
            Category
          </label>

          <input
            type="text"
            name="category"
            placeholder="Travel, Resort..."
            value={
              formData.category
            }
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>
            Tags
          </label>

          <input
            type="text"
            name="tags"
            placeholder="luxury, resort"
            value={
              formData.tags
            }
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>
            Hashtags
          </label>

          <input
            type="text"
            name="hashtags"
            placeholder="#luxury"
            value={
              formData.hashtags
            }
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>
            Meta Title
          </label>

          <input
            type="text"
            name="metaTitle"
            value={
              formData.metaTitle
            }
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>
            Meta Description
          </label>

          <textarea
            name="metaDescription"
            rows="3"
            value={
              formData.metaDescription
            }
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>
            SEO Keywords
          </label>

          <input
            type="text"
            name="keywords"
            value={
              formData.keywords
            }
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>
            Featured Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

        </div>

        <button
          type="submit"
          className="blog-submit-btn"
        >

          {loading
            ? "Saving..."
            : editId
            ? "Update Blog"
            : "Publish Blog"}

        </button>

      </form>

      {/* ================= BLOG TABLE ================= */}

      <div className="blog-table-wrapper">

        <h3>
          All Blogs
        </h3>

        <table className="blog-table">

          <thead>

            <tr>

              <th>Image</th>

              <th>Title</th>

              <th>Category</th>

              <th>Status</th>

              <th>Views</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {blogs.map((blog) => (

              <tr key={blog._id}>

                {/* IMAGE */}

                <td>

                  <img
                    src={`https://shakhiyafishresort-backend.onrender.com${blog.featuredImage}`}
                    alt={blog.title}
                    className="blog-table-img"
                  />

                </td>

                {/* TITLE */}

                <td>

                  <div className="blog-title">
                    {blog.title}
                  </div>

                  <small>
                    {new Date(
                      blog.createdAt
                    ).toLocaleDateString()}
                  </small>

                </td>

                {/* CATEGORY */}

                <td>
                  {blog.category}
                </td>

                {/* STATUS */}

                <td>

                  <span
                    className={`blog-status ${blog.status}`}
                  >
                    {blog.status}
                  </span>

                </td>

                {/* VIEWS */}

                <td>
                  {blog.views}
                </td>

                {/* ACTION */}

                <td className="blog-actions">

                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEdit(blog)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(
                        blog._id
                      )
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}