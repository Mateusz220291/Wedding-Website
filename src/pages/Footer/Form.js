import React from "react";
import "./Form.css";
// import { Button } from "./GlobalStyle";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import myLogo from "../images/Logo.png";

// import { animateScroll as scroll } from "react-scroll";
// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Form() {
  //   const toggleHome = () => {
  //     scroll.scrollToTop();
  //   };
  return (
    <div className="form-container">
      <div className="wrapper">
        <h3 className="contact-title">
          Potwierdź swoją obecność za pomocą poniższego formularza lub napisz do
          nas bezpośrednio na e-mail:
        </h3>
        <p className="text">mateuszmikla@wp.pl</p>
      </div>

      <form
        action="https://formspree.io/f/mrgrqpqa"
        method="POST"
        className="form"
      >
        <label for="name" className="form-label">
          IMIĘ i NAZWISKO
        </label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="imię i nazwisko"
          required="required"
          className="form-input"
        />
        <label for="email" className="form-label">
          EMAIL
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="email"
          required="required"
          className="form-input"
        />
        <label for="message" className="form-label">
          WIADOMOŚĆ
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="wiadomość"
          className="form-textarea"
        />
        <button type="submit" className="form-button">
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default Form;
