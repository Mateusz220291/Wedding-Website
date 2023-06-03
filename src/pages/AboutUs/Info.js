import React from "react";
import "./Info.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Info({ ...props }) {
  return (
    <div className="card-container">
      <h3 className="ourName">{props.name}</h3>
      <p className="ourText">{props.text}</p>
      <div className="socials">
        <a
          href={props.facebook}
          target="_blank"
          className="about-social"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href={props.instagram}
          target="_blank"
          className="about-social"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Info;
