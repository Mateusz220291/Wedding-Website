import React from "react";
import "./Contact.css";
import mateuszImage from "./img/mateusz.jpg";
import kingaImage from "./img/kinga1.jpg";
import mariuszImage from "./img/mariusz2.jpg";
import karolinaImage from "./img/karolina1.jpg";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      role: "Panna Młoda - ",
      name: "Kinga",
      surname: "Krzaczyńska",
      phone: "726 760 246",
      picture: kingaImage,
    },
    {
      id: 2,
      role: "Pan Młody - ",
      name: "Mateusz",
      surname: "Mikła",
      phone: "607 252 434",
      picture: mateuszImage,
    },
    {
      id: 3,
      role: "Świadkowa - ",
      name: "Karolina",
      surname: "Juszczak",
      phone: "603 821 779",
      picture: karolinaImage,
    },
    {
      id: 4,
      role: "Świadek - ",
      name: "Mariusz",
      surname: "Mikła",
      phone: "694 132 136",
      picture: mariuszImage,
    },
  ];

  return (
    <div className="contact-section">
      <h2 className="subtitle">Bezpośredni kontakt:</h2>
      {contacts.map((contact) => (
        <div key={contact.id} className="contact">
          <img
            src={contact.picture}
            alt={`${contact.name} ${contact.surname}`}
            className="contact-picture"
          />
          <div className="contact-info">
            <div className="contact-name">
              {contact.role}
              {contact.name} {contact.surname}
            </div>
            <div className="contact-phone">{contact.phone}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
