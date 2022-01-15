// **импорты
import React from "react";
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
  // *языковой переключатель
  function langChanger() {
    if (props.lang === "ru") {
      props.setLang("en");
    } else {
      props.setLang("ru");
    }
  }

  function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

function changeColor(e) {
  const html = document.querySelector('html')
  const hex = e.target.value
  const rgb = hexToRgb(hex)
  const stringRgb = `rgb(${rgb.r}, ${rgb.b}, ${rgb.b})`
  const stringReverse = `rgb(${255 - rgb.r}, ${255 - rgb.b}, ${255 - rgb.b})`
  html.style.setProperty('--back-color', stringRgb)
  html.style.setProperty('--main-color', stringReverse)
}

  // *DOM
  return (
    <header className="Header">
      <input type="color" className="Header__input" onInput={changeColor}/>
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
