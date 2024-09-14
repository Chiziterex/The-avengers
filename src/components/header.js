import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaMailBulk, FaPhone } from "react-icons/fa";

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [header, setHeader] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const changeMargin = () => {
    if (window.scrollY >= 40) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  };

  window.addEventListener('scroll', changeMargin);

  return (
    <>
      <header className={header ? "scroll" : ""}>
        <img
          src="https://i.pinimg.com/736x/9a/4b/c6/9a4bc6e595168f93e120c88fe3886514.jpg"
          alt="avengers logo"
        ></img>

        <ul className="links">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/fullNews">
            <li>News</li>
          </Link>
          <Link to="/fullTeam">
            <li>Team</li>
          </Link>
          <li>Contact</li>
        </ul>

        <div id="menu-icon" onClick={toggleSidebar}>
        {isSidebarActive ? "✖" : "≡"}
        </div>

        <ul className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/fullNews">
            <li>News</li>
          </Link>
          <Link to="/fullTeam">
            <li>Team</li>
          </Link>
          <li>Contact</li>
          <div className="icons">
              <FaInstagram />
              <FaTwitter />
              <FaMailBulk />
              <FaPhone />
            </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
