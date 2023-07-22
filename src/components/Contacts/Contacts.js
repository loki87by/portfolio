import React, { useContext } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import "./Contacts.css";

function Contacts() {
  const translation = useContext(TranslationContext);

  return (
    <section className="Contacts">
      <h1 className="Contacts__title">
        {translation.specify}
        <br />
        {translation.author}
      </h1>
      <h2 className="Contacts__subtitle">{translation.contacts}:</h2>
      <h3 className="Contacts__subsubtitle">
        {translation.location}:{" "}
        <span className="Contacts__text">{translation.city}</span>
      </h3>
      <h3 className="Contacts__subsubtitle">
        {translation.phone}:{" "}
        <a href="tel:+79955935759" className="Contacts__text">
          +7(995)593-57-56
        </a>
      </h3>
      <h3 className="Contacts__subsubtitle">
        {`e-mail: `}
        <a href="mailto:loki87.666@gmail.com" className="Contacts__text">
          loki87.666@gmail.com
        </a>
      </h3>
      <h3 className="Contacts__subsubtitle">
        Github:{" "}
        <a
          className="Contacts__text Contacts__link"
          target="blank"
          href="https://github.com/loki87by"
        >
          https://github.com/loki87by
        </a>
      </h3>
    </section>
  );
}

export default Contacts;
