import React, { useState } from "react";
import "./Destination.css";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { FaFacebook, FaGlobe, FaInstagram } from "react-icons/fa";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const locations = [
    { lat: 51.34843, lng: 19.50874 },
    { lat: 51.394536, lng: 19.280536 },
  ];

  return (
    <section className="map-section">
      <div className="tab-component">
        <h1 className="title">
          <span className="title-with-leaf"></span>Co, gdzie i kiedy...
        </h1>
        <h2 className="subtitle">
          Poniżej garść informacji dotyczacych uroczystości kościelnej i zabawy
          weselnej. Kliknij odpowiednią zakładkę poniżej aby dowiedzieć się
          więcej.
        </h2>
        <div className="tab-buttons">
          <button
            className={activeTab === 0 ? "active" : ""}
            onClick={() => handleTabChange(0)}
          >
            Ślub
          </button>
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabChange(1)}
          >
            Wesele
          </button>
        </div>
        <div className="tab-content">
          <div className="top-left"></div>
          <div className="bottom-right"></div>
          {activeTab === 0 && (
            <div className="tab-1">
              <div className="description">
                <p className="description-text">
                  Uroczystość kościelna rozpocznie się o godzinie 16:00 w
                  parafii pw. Trójcy Przenajświętszej w Bogdanowie. Prosimy o
                  przybycie 15 minut wcześniej.
                </p>
                <div className="description-socials">
                  <a
                    href="https://www.facebook.com/profile.php?id=100071010078377"
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="http://parafiabogdanow.pl/"
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                    aria-label="Facebook"
                  >
                    <FaGlobe />
                  </a>
                </div>
              </div>
              <div className="content-container">
                <div className="church-img"></div>
                <div className="map">
                  {isLoaded ? (
                    <GoogleMap
                      zoom={13}
                      center={locations[0]}
                      mapContainerClassName="map-container"
                    >
                      <MarkerF position={locations[0]} />
                    </GoogleMap>
                  ) : (
                    <div>Wczytuję mapę...</div>
                  )}
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="tab-2">
              <div className="description">
                <p className="description-text">
                  Po ślubie zapraszamy na przyjęcie weselne. Przewidujemy
                  wspaniałą zabawę do białego rana w sali weselnej Przysiółek
                  Kresy w Parznie!{" "}
                </p>
                <div className="description-socials">
                  <a
                    href="https://www.facebook.com/search/top?q=przysi%C3%B3%C5%82ek%20kresy"
                    target="_blank"
                    className="social"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/przysiolek.kresy/"
                    target="_blank"
                    className="social"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div className="content-container">
                <div className="party-img"></div>
                {isLoaded ? (
                  <GoogleMap
                    zoom={13}
                    center={locations[1]}
                    mapContainerClassName="map-container"
                  >
                    <MarkerF position={locations[1]} />
                  </GoogleMap>
                ) : (
                  <div>Wczytuję mapę...</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TabComponent;
