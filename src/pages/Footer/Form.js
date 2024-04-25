import React from "react";
import "./Form.css";
import { Button } from "../Button/Button";

function Form() {
  return (
    <div className="form-container">
      <div className="wrapper">
        <h3 className="contact-title">
          Potwierdź swoją obecność za pomocą poniższego formularza lub napisz do
          nas bezpośrednio na e-mail:
        </h3>
        <p className="text">lorem@wp.pl</p>
      </div>

      <form action="" method="POST" className="form">
        <label for="name" className="form-label">
          IMIE
        </label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="imię"
          required="required"
          className="form-input"
        />
        <label for="email" className="form-label">
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
        <label for="message" className="form-label">
          WIADOMOŚĆ
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="wiadomość"
          className="form-textarea"
        />
        <Button type="submit">Wyślij</Button>
      </form>
    </div>
  );
}

export default Form;
