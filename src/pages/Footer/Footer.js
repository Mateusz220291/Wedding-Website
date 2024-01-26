import React from "react";
import "./Footer.css";
import Contact from "./Contact";
import Accordion from "./Accordion";
import Form from "./Form";
import Countdown from "../../components/Counter/Counter";

function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-content">
        <h1 className="title">Pytania & Kontakt</h1>
        <h2 className="subtitle">
          W tej cześci zaprezentujemy najcześciej zadawane pytania i odpowiedzi.
          Jeżeli potrzebujecie więcej informacji zachęcamy do kontaktu poprzez
          formularz lub bezpośrednio telefonicznie.
        </h2>
        <div>
          <Accordion></Accordion>
        </div>

        <div className="footer-contacts">
          <Contact></Contact>
          <Form></Form>
        </div>
      </div>
      <div className="footer-time title">
        <p>Do zobaczenia za:</p>
        <Countdown />
      </div>
    </footer>
  );
}

export default Footer;
