import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="backdrop-color">
          <div className="content">
            <div className="icons">
              <FaInstagram />
              <FaTwitter />
              <FaMailBulk />
              <FaPhone />
            </div>
            <ul className="links">
              <li>Home</li>
              <li>News</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
            <p>© Marvel 2024</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
