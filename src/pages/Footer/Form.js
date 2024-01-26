import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h3 className="form-contact-title">
          Potwierdź swoją obecność za pomocą poniższego formularza lub napisz do
          nas bezpośrednio na e-mail:
        </h3>
        <p className="form-text">mateuszmikla@wp.pl</p>
      </div>

      <form
        action="https://formspree.io/f/mrgrqpqa"
        method="POST"
        className="form"
      >
        <label htmlFor="name" className="form-label">
          IMIĘ i NAZWISKO
        </label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="imię i nazwisko"
          required="required"
          className="form-input"
        />
        <label htmlFor="email" className="form-label">
          EMAIL
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="email"
          required="required"
          className="form-input"
        />
        <label htmlFor="message" className="form-label">
          WIADOMOŚĆ
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="wiadomość"
          className="form-textarea"
        />
        <button type="submit" className="form-button">
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default Form;
