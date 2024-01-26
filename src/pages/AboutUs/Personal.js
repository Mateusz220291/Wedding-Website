import React from "react";
import "./Personal.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Info({ ...props }) {
  return (
    <div className="personal-container">
      <h3 className="personal-name">{props.name}</h3>
      <p className="personal-text">{props.text}</p>
      <div className="personal-socials">
        <a
          href={props.facebook}
          target="_blank"
          className="personal-social"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href={props.instagram}
          target="_blank"
          className="personal-social"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Info;
