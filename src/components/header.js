import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
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
      </header>
    </>
  );
};

export default Header;
