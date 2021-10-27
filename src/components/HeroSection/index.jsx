import React from "react";

import "./style.css";
import "../../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/public/videos/video-2.mp4" autoPlay loop muted />

      <h1>Welcome to the club!</h1>

      <h3>Official Cybersecurity club @ University of Massachusetts, Lowell</h3>
    </div>
  );
}

export default HeroSection;
