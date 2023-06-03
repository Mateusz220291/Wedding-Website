import React from "react";
import { Link as LinkS } from "react-scroll";
import { ScrollDownBTN } from "../Button/ScrollButton";
import "./Hero.css";

function HeroSection({ scrollToNextSection }) {
  return (
    <div className="hero-container">
      <p>Pobieramy się!</p>
      <h1>Kinga & Mateusz</h1>
      <p className="text">Ciesz się z nami tą chwilą</p>
      <h2>7 września 2023</h2>
      <div className="hero-btns">
        <LinkS
          id="RouterNavLink"
          to="le"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <ScrollDownBTN handleClick={scrollToNextSection}></ScrollDownBTN>
        </LinkS>
      </div>
    </div>
  );
}

export default HeroSection;
