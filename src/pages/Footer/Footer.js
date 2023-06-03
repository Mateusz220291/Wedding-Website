import React from "react";
import "./Footer.css";
import Contact from "./Contact";
import Accordion from "./Accordion";
import Form from "./Form";
import Countdown from "../Counter/Counter";
// import { Button } from "./GlobalStyle";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import myLogo from "../images/Logo.png";

// import { animateScroll as scroll } from "react-scroll";
// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  //   const toggleHome = () => {
  //     scroll.scrollToTop();
  //   };
  return (
    <footer className="footer-section" id="contact">
      <div>
        <h1 className="title">Pytania & Kontakt</h1>
      </div>
      <div className="content">
        <div className="questions">
          <Accordion></Accordion>
        </div>

        <div className="contacts">
          <Contact></Contact>
          <Form></Form>
        </div>
      </div>
      <div className="time title">
        <p>Do zobaczenia za:</p>
        <Countdown />
      </div>
    </footer>
  );
}

export default Footer;
