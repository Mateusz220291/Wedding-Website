import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Jak mogę potwierdzić obecność?",
      answer:
        "W sprawie potwierdzenia obecności możecie nas poinformować telefonicznie (Kinga i Mateusz) albo za pomocą poniższego formularza. W sprawach organizacyjnych możecie rówmnież porozmawiać z naszymi świadkami - kontakt poniżej ;)",
    },
    {
      question: "Do kiedy mogę potwierdzić obecność?",
      answer: "Prosimy o potwierdzenie przybycia do 07 lipca 2023 r.",
    },
    {
      question: "Czy na wesele mogę przyjść z dziećmi?",
      answer: `Z uwagi na charakter uroczystości, postanowiliśmy zorganizować je w formacie "bez dzieci". Chcielibyśmy, aby każdy mógł swobodnie bawić się i skupić się na wspólnym świętowaniu. Liczymy na Wasze zrozumienie.`,
    },
    {
      question: "A co z noclegami dla gości?",
      answer:
        "Noclegi dla rodziny staramy się rozdysponować w ramach rodzinnych warunków lokalowych. Dla części gości zainteresowanych rezerwacją noclegu przy sali weselnej zapraszamy do wcześniejszego kontaktu.",
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span
              className={`accordion-icon ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
