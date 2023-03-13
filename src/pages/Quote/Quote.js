import React from "react";
import "./Quote.css";

function QuoteSection() {
  return (
    <div className="quote-section">
      <div className="quote-wrapper quote--border-left">
        <p className="quote-text quote-text--quoted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est
          voluptate excepturi dolorem quos eum eligendi perspiciatis neque.
        </p>
        <p className="quote-text quote-text--author">- Kinga Krzaczyńska</p>
      </div>
    </div>
  );
}

export default QuoteSection;
