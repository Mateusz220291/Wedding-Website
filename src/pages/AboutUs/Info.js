import React from "react";
import "./Info.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Info() {
  return (
    <div className="container">
      <h3 className="ourName">Mateusz Mikła</h3>
      <p className="ourText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio
        obcaecati id est alias accusantium, quas mollitia voluptas adipisci
        dolore blanditiis.
      </p>
      <div className="socials">
        <a
          href="https://www.facebook.com/mateuszmikla"
          target="_blank"
          className="social"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a href="#" target="_blank" className="social" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Info;
