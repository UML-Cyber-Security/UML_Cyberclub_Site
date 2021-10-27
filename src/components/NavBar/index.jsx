import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          {/* NAVBAR LOGO  */}
          <Link to="/" className="navbar-logo">
            <i
              class="fas fa-crow"
              style={{ marginRight: "12px", color: "lightblue" }}
            />
            UMass Lowell Cyber Club
          </Link>

          {/* HAMBURGER MENU ICON - OPEN AND CLOSE NAVBAR */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* LIST OF LINKS  */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* HOME  */}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            {/* ABOUT  */}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            {/* EVENTS  */}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
