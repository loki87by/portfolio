import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import "./Footer.css";
import "./styles/Footer__link.css";

function Footer() {
  const translation = React.useContext(TranslationContext);

  return (
    <footer className="Footer">
      <a href="https://github.com/loki87by" className="Footer__link">
        &copy;{" "}
      </a>
      <p>2020 {translation.author}</p>
    </footer>
  );
}

export default Footer;
