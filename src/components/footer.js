import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/home">
              <li>Home</li>
              </Link>
              <li>News</li>
              <Link to="/fullTeam">
              <li>Team</li>
              </Link>
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
