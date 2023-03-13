import React from "react";
import "./About.css";
import Info from "./Info";

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-container">
        <h1 className="introText">Kilka słów o nas</h1>
        <p className="subTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          deserunt'.
        </p>
        <div className="flex-wrapper">
          <div className="info">
            <Info></Info>
          </div>
          <div className="picture">
            <img
              src={require("./img/frame.png")}
              alt="flower"
              className="heart-overlay"
            ></img>
            <img
              src={require("./img/we.jpg")}
              alt="we"
              className="round-foto"
            ></img>
          </div>
          <div className="info">
            <Info></Info>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
