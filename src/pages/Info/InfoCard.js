import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Info.css";

function OfferCard({ src, title, text }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-once="true" className="card">
      <div className="card-inner">
        <div className="card-img-wrapper">
          <img src={src} className="card-img" alt="sialalala"></img>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default OfferCard;
