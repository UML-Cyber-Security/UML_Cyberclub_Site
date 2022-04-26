import React from "react";
import { Button, Group } from '@mantine/core';
import { Link } from "react-router-dom";

import "./style.css";
import "../../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Welcome to the club!</h1>

      <h3>Official Cybersecurity Club @ University of Massachusetts Lowell</h3>
      <Group my="lg">
        <Link to="/about">
          <Button color="dark" size="md">Learn More</Button>
        </Link>
        <Button variant="filled" size="md" href="https://umasslowellclubs.campuslabs.com/engage/organization/cybersecurityclub" component="a">Join the club</Button>
      </Group>
    </div>
  );
}

export default HeroSection;
