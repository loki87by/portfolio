// **импорты
import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { hexToRgb, updateColors } from "../../utils/helpers.js"
import logo from "../../images/logo.svg";
import logoEng from "../../images/logoEng.svg";
import "./Header.css";
import "./styles/__logo/Header__logo.css";
import "./styles/__input/Header__input.css";
import "./styles/__button-image/Header__button-image.css";
import "./styles/__button-image/Header__button-image_UK.css";
import "./styles/__button-image/Header__button-image_RU.css";

// **функционал
function Header(props) {
  const translation = React.useContext(TranslationContext);
  // *языковой переключатель
  function langChanger() {
    if (props.lang === "ru") {
      props.setLang("en");
    } else {
      props.setLang("ru");
    }
  }

function changeColor(e) {
  const hex = e.target.value
  const rgb = hexToRgb(hex)
  updateColors(rgb)
}

  // *DOM
  return (
    <header className="Header">
      <input type="color" className="Header__input" title={translation.changeBack} onInput={changeColor}/>
      <img
        className="Header__logo"
        alt="логотип"
        src={props.lang === "ru" ? logo : logoEng}
      />
      {props.lang === "ru" ? (
          <div className='Header__button-image Header__button-image_UK' onClick={langChanger}></div>
      ) : (
          <div className='Header__button-image Header__button-image_RU' onClick={langChanger}></div>
      )}
    </header>
  );
}
// **импорт
export default Header;
