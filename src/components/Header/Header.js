// **импорты
import React from "react";
import logo from "../../images/logo.png";
import logoEng from "../../images/logoEng.png";
import eng from "../../images/UK.png";
import rus from "../../images/RU.png";
import "./Header.css";
import "./styles/__logo/Header__logo.css";
import "./styles/__button/Header__button.css";
import "./styles/__button-image/Header__button-image.css";

// **функционал
function Header(props) {
  // *языковой переключатель
  function langChanger() {
    if (props.lang === "ru") {
      props.setLang("en");
    } else {
      props.setLang("ru");
    }
  }

  // *DOM
  return (
    <header className="Header">
      <img
        className="Header__logo"
        alt="логотип"
        src={props.lang === "ru" ? logo : logoEng}
      />
      {props.lang === "ru" ? (
        <button className="Header__button" type="button" onClick={langChanger}>
          <img className="Header__button-image" src={eng} alt="флаг СК" />
        </button>
      ) : (
        <button className="Header__button" type="button" onClick={langChanger}>
          <img className="Header__button-image" src={rus} alt="флаг СК" />
        </button>
      )}
    </header>
  );
}
// **импорт
export default Header;
