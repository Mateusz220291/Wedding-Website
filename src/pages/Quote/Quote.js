import React from "react";
import "./Quote.css";

function QuoteSection() {
  return (
    <div className="quote-section">
      <div className="quote-wrapper quote--border-left">
        <p className="quote-text quote-text--quoted">
          Z wielu dróg, którymi może pójść człowiek, wybraliśmy tę jedną –
          wspólną.
        </p>
        <p className="quote-text quote-text--author">Autor nieznany</p>
      </div>
    </div>
  );
}

export default QuoteSection;
