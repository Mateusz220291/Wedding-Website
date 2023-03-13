import React, { useState } from "react";
import "./Destination.css";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

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
    <div className="tab-component">
      <h1>Co, gdzie i kiedy</h1>
      <h2>
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
            <h2>Ślub</h2>
            <p>
              Ślub odbędzie się w kościele ..... o godzinie..... Prosimy o
              punktulane przybycie
            </p>
            <div>Zdjęcie kościoła i link do parafii w Bogdanowie</div>
            <div className="map-container">
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
        )}
        {activeTab === 1 && (
          <div className="tab-2">
            <h2>Wesele</h2>
            <div>Zdjęcie kościoła i link do parafii w Bogdanowie</div>
            <p>Zabawa weselna ropocznie się o godz w ....... o godzinie.....</p>
            <div className="map-container">
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
  );
};

export default TabComponent;
