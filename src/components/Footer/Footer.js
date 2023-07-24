import React, { useContext } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import "./Footer.css";

function Footer() {
  const translation = useContext(TranslationContext);

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
