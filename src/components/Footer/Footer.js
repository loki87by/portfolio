// **импорты
import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import "./Footer.css";

// **функционал
function Footer() {
  const translation = React.useContext(TranslationContext);
  return (
    <footer className="Footer">
      <p>&copy; 2020 {translation.author}</p>
    </footer>
  );
}

// **экспорт
export default Footer;
