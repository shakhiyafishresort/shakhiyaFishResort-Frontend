import React, { useEffect, useState } from "react";

import "../styles/ViewContact.css";

export default function ViewContact() {

  const [contacts, setContacts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /* ================= FETCH CONTACTS ================= */

  const fetchContacts = async () => {
    try {

      const res = await fetch(
        "https://shakhiyafishresort-backend.onrender.com/api/contact"
      );

      const data = await res.json();

      setContacts(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  /* ================= DELETE CONTACT ================= */

  const handleDelete = async (id) => {
    try {

      await fetch(
        `https://shakhiyafishresort-backend.onrender.com/api/contact/${id}`,
        {
          method: "DELETE",
        }
      );

      setContacts(
        contacts.filter(
          (item) => item._id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="view-contact-wrapper">

      <h2>Contact Messages</h2>

      {/* LOADING */}
      {loading && (
        <p>Loading messages...</p>
      )}

      {/* EMPTY */}
      {!loading &&
        contacts.length === 0 && (
          <p>No messages found</p>
        )}

      {/* TABLE */}
      {!loading &&
        contacts.length > 0 && (
          <table className="contact-table">

            <thead>

              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {contacts.map(
                (item) => (
                  <tr key={item._id}>

                    <td>
                      {item.firstName}{" "}
                      {item.lastName}
                    </td>

                    <td>
                      {item.email}
                    </td>

                    <td>
                      {item.phone}
                    </td>

                    <td>
                      {item.subject}
                    </td>

                    <td>
                      {item.message}
                    </td>

                    <td>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(
                            item._id
                          )
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>
        )}

    </div>
  );
}