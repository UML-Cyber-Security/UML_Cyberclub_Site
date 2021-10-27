import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <i className="fas fa-crow" style={{ marginRight: "10px" }} />
              UML Riverhawks
            </Link>
          </div>
          <small className="website-rights">© UMass Lowell Cybersecurity Club - 2021</small>
          <div className="social-icons">
            <Link
              aria-label="Discord"
              className="social-icon-link discord"
              to={{ pathname: "https://discord.gg/4fTjnZavQa" }}
              target="_blank"
            >
              <i className="fab fa-discord" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
