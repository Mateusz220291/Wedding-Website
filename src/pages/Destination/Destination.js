import React, { useState } from "react";
import "./Destination.css";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD9k-OCydocVMZUA5plbaGynmhrgN7iUHs",
  });

  const locations = [
    { lat: 51.34843, lng: 19.50874 },
    { lat: 51.394536, lng: 19.280536 },
  ];

  return (
    <div className="map-section">
      <div className="tab-component">
        <h1 className="tab-title">Co, gdzie i kiedy...</h1>
        <h2 className="tab-subtitle">
          Poniżej garść informacji dotyczacych uroczystości kościelnej i zabawy
          weselnej.
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
          {activeTab === 0 && (
            <div className="tab-1">
              <h3>Ślub</h3>
              <p>
                Ślub odbędzie się w kościele ..... o godzinie..... Prosimy o
                punktulane przybycie
              </p>
              <div className="map-container">
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
              <h3>Wesele</h3>
              <p>
                Zabawa weselna ropocznie się o godz w ....... o godzinie.....
              </p>
              <div className="socials">
                <a
                  href="https://www.facebook.com/mateuszmikla"
                  target="_blank"
                  className="social"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="social"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="map-container">
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
    </div>
  );
};

export default TabComponent;
