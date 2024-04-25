import React from "react";
import "./Contact.css";
import PawełImage from "./img/Paweł.jpg";
import AlicjaImage from "./img/Alicja1.jpg";
import mariuszImage from "./img/mariusz2.jpg";
import karolinaImage from "./img/karolina1.jpg";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      role: "Panna Młoda - ",
      name: "Alicja",
      surname: "K",
      phone: "000 000 000",
      picture: AlicjaImage,
    },
    {
      id: 2,
      role: "Pan Młody - ",
      name: "Paweł",
      surname: "M",
      phone: "111 111 111",
      picture: PawełImage,
    },
    {
      id: 3,
      role: "Świadkowa - ",
      name: "Karolina",
      surname: "J",
      phone: "222 222 222",
      picture: karolinaImage,
    },
    {
      id: 4,
      role: "Świadek - ",
      name: "Mariusz",
      surname: "M",
      phone: "333 333 333",
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
