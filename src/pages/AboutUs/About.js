import React from "react";
import "./About.css";
import Info from "./Info";

function AboutSection() {
  return (
    <section className="about-section" id="about-section">
      <div className="about-container">
        <h1 className="title about-title">
          <span className="title-with-leaf"></span>Kilka słów o nas
        </h1>
        <h2 className="subtitle">
          Nasza miłość zakwitła 5 lat temu i od tamtej chwili wzrastała w siłę,
          tworząc niezłomną więź, która przetrwała wszystkie wyzwania. Jesteśmy
          parą, która zjednoczona jest wspólnymi wartościami, pasjami i
          wzajemnym wsparciem. Wkrótce, w dniu naszego ślubu, obiecamy sobie, że
          nasza miłość będzie trwać wiecznie, tworząc piękną historię pełną
          radości, wzajemnego szacunku i niezłomnej więzi.
        </h2>
        <div className="flex-wrapper">
          <div className="about-info">
            <Info
              name="Alicja K"
              text="Alicja to osobowość niezwykle rodzinna i lojalna wobec swoich bliskich. Jest pełna empatii i wrażliwości, zawsze gotowa wesprzeć innych w trudnych chwilach. Zaradna i zdecydowana, potrafi stawić czoła wyzwaniom życiowym, niezależnie od tego, jak trudne mogą być."
              facebook="#"
              instagram="#"
            ></Info>
          </div>
          <div className="picture">
            <img
              src={require("./img/frame.png")}
              alt="flower"
              className="heart-overlay"
            ></img>
            <img
              src={require("./img/we.jpg")}
              alt="we"
              className="round-foto"
            ></img>
          </div>
          <div className="about-info">
            <Info
              name="Paweł M"
              text="Paweł to mężczyzna, który jest niezwykle konsekwentny w dążeniu do swoich celów i realizacji swoich marzeń. Jest wrażliwą duszą, z sercem pełnym miłości dla swoich bliskich i otaczających go osób. Dzięki miłości do Kingi potrafi przenosić góry."
              facebook="#"
              instagram="#"
            ></Info>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
