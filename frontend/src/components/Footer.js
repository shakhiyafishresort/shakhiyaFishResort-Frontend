import React from "react";
import "./Styles/Footer.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="ft-wrapper">

      <div className="ft-container">

        {/* Section 1 */}
        <div className="ft-box">
          <h3>About Us</h3>

          <a href="https://maps.app.goo.gl/XVEtgZijFUfLMhxv5" target="_blank" rel="noreferrer">
            <p><FaMapMarkerAlt /> Shakhiya Fish Resort <br />
            Suddhodhan 7 Manmateriya Bhaglapur, Rupandehi, Nepal</p>
          </a>

          <a href="tel:+9779802685566">
            <p><FaPhoneAlt /> +977-9802685566</p>
          </a>

          <a href="mailto:shakhiyafishresort@gmail.com">
            <p><FaEnvelope /> shakhiyafishresort@gmail.com</p>
          </a>

        

          <div className="ft-social">
            <a href="https://www.facebook.com/profile.php?id=100085531920421" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/shakhiyafish?igsh=MTJxdTF4cG92bjVrdQ==" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.tiktok.com/@shakhiya.fish.resort" target="_blank" rel="noreferrer">
              <SiTiktok />
            </a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="ft-box">
          <h3>Rooms</h3>

          <ul>
            <li><a href="/deluxe-room">🏷 Deluxe Room</a></li>
            <li><a href="/suite-room">🏷 Suite Room</a></li>
            <li><a href="/ac-room">🏷 AC Room</a></li>
            <li><a href="/non-ac-room">🏷 Non-AC Room</a></li>
           
          </ul>
        </div>

        {/* Section 3 */}
        <div className="ft-box">
          <h3>Information</h3>

          <ul>
           <li><a href="/meeting-hall">Meeting Hall</a></li>
            <li><a href="/restro">Restro & Bar</a></li>
            <li><a href="/gallery">Photo Gallery</a></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="ft-box">
          <h3>Resources</h3>

          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/facilities">Facilities</a></li>
            {/* <li><a href="/promotion">Promotion</a></li> */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

      </div>

      <div className="ft-bottom">
        © 2026 Sakhiya Fish Resort. All Rights Reserved.
      </div>

    </footer>
  );
}