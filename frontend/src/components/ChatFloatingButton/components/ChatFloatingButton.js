import React, { useState } from "react";
import "../Styles//ChatFloatingButton.css";

import {
  FaFacebookMessenger,
  FaWhatsapp,
  FaViber,
  FaComments,
} from "react-icons/fa";

const ChatbotFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">

      <div className={`chat-options ${isOpen ? "open" : ""}`}>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/9806914530"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-icon whatsapp"
        >
          <FaWhatsapp />
        </a>

        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/profile.php?id=100085531920421"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-icon facebook"
        >
          <FaFacebookMessenger />
        </a>

        {/* VIBER */}
        <a
          href="viber://chat?number=+9779806914530"
          onClick={(e) => {
            setTimeout(() => {
              window.location.href =
                "https://www.viber.com/download/";
            }, 1500);
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="chat-icon viber"
        >
          <FaViber />
        </a>

      </div>

      {/* TOGGLE BUTTON */}
      <button
        className="chatbot-button"
        onClick={handleToggle}
      >
        <FaComments />
      </button>

    </div>
  );
};

export default ChatbotFloatingButton;