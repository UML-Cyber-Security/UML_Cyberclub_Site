import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div class="footer-links">
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>College Links</h2>
              <Link
                to={{
                  pathname:
                    "https://www.uml.edu/research/areas/cybersecurity.aspx",
                }}
                target="_blank"
              >
                Cybersecurity Page
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.uml.edu/Catalog/Undergraduate/Sciences/Departments/Computer-Science/Degree-pathways/DP-CS-Cybersecurity-2020.aspx",
                }}
                target="_blank"
              >
                CS Undergraduate Option
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.uml.edu/catalog/graduate/fahss/security-studies/ms-cybersecurity.aspx",
                }}
                target="_blank"
              >
                Masters Degree
              </Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>CTFs</h2>
              <Link to={{ pathname: "https://www.tracelabs.org/"}} target="_blank">Trace Labs</Link>
              <Link to={{ pathname: "https://metactf.com/"}} target="_blank">MetaCTF</Link>
              <Link to={{ pathname: "https://www.hivestorm.org/"}} target="_blank">Hivestorm</Link>
            </div>
            <div class="footer-link-items">
              <h2>Knowledge</h2>
              <Link to={{ pathname: "https://youtu.be/U_P23SqJaDc"}} target="_blank">Cybersecurity for Beginners</Link>
              <Link to={{ pathname: "https://youtu.be/bPVaOlJ6ln0"}} target="_blank">Crash Course</Link>
            </div>
          </div>
        </div>
        <div className="social-media-wrap">
          <small className="website-rights">
            © UMass Lowell Cybersecurity Club - 2021
          </small>
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
