import React from "react";
import OfferCard from "./InfoCard";
import "./InfoCard.css";
import Img1 from "./img/wine.png";
import Img2 from "./img/money.png";
import Img3 from "./img/food.png";
import Img4 from "./img/calendar.png";

function Offer() {
  return (
    <section id="offer" className="info-section">
      <div className="info-container">
        <h1
          data-aos="fade-up"
          data-aos-once="true"
          className="title text-shadow"
        >
          Kilka spraw organizacyjnych:
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-once="true"
          className="subtitle text-shadow"
        >
          Jeżeli w tym szczęśliwym dla nas dniu będziecie chcieli nas w jakiś
          sposób obdarować to poniżej prezentujemy kilka sugestii. Pamiętajcie
          też o terminie i zgłoszeniu wymagań żywieniowych :)
        </h2>
        <div className="info-wrapper">
          <OfferCard
            src={Img1}
            title="Zamiast kwiatów"
            text="Marzymy o tym, by mieć własną domową piwniczkę pełną win, dlatego będzie nam miło, jeśli otrzymamy butelkę tego trunku :)"
          />
          <OfferCard
            src={Img2}
            title="Zamiast prezentów"
            text="Bylibyśmy wdzięczni jeżeli chcielibyście dołożyć do naszej skarbonki. Dzięki temu nasza podróż poślubna będzie jeszcze wspanialsza a marzenia o większym M szybciej się spełnią."
          />
          <OfferCard
            src={Img3}
            title="Jedzenie"
            text="Staramy się sprostać potrzebom kulinarnym wszystkich gości. Osoby będące wegetarianami, vege bądź na diecie bezglutenowej będą miały dostosowane menu - nie zapomnijcie nas o tym poinformować!"
          />
          <OfferCard
            src={Img4}
            title="Termin"
            text="Pamiętajcie, że 7 września to czwartek. Zadbajcie odpowiednio wcześniej o swoje plany urlopowe a będziecie mogli się cieszyć kolejnym długim weekendem ;)"
          />
        </div>
      </div>
    </section>
  );
}

export default Offer;
