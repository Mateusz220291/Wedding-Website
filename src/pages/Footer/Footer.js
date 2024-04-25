import React from "react";
import "./Footer.css";
import Contact from "./Contact";
import Accordion from "./Accordion";
import Form from "./Form";

function Footer() {
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
        <p>Do zobaczenia za: x dni</p>
      </div>
    </footer>
  );
}

export default Footer;
