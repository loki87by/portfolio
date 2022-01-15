// **импорты
import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { getFilter } from "../../utils/filter.js"
import { hexToRgb, rgbToHex } from "../../utils/helpers.js"
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
  const html = document.querySelector('html')
  const hex = e.target.value
  const rgb = hexToRgb(hex)
  const stringRgb = `rgb(${rgb.r}, ${rgb.b}, ${rgb.b})`
  let stringReverse = `rgb(${255 - rgb.r}, ${255 - rgb.b}, ${255 - rgb.b})`
  const unreadable = (rgb.r >= 115 && rgb.r <= 140) && (rgb.b >= 115 && rgb.b <= 140) && (rgb.g >= 115 && rgb.g <= 140)

  if(unreadable) {
    stringReverse = `rgb(255, 255, 255)`
  }
  const hexReverse = rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b)
  const filter = getFilter(hexReverse)
  html.style.setProperty('--back-color', stringRgb)
  const oldStyles = html.style.cssText
  html.style.cssText = `${oldStyles} --filter: ${filter}`
  html.style.setProperty('--main-color', stringReverse)
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
