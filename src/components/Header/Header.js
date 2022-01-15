// **импорты
import React from "react";
import { getFilter } from "../../utils/filter.js"
import { hexToRgb, rgbToHex } from "../../utils/helpers.js"
import logo from "../../images/logo.svg";
import logoBlack from "../../images/logo-black.svg";
import logoEng from "../../images/logoEng.svg";
import logoEngBlack from "../../images/logoEng-black.svg";
import "./Header.css";
import "./styles/__logo/Header__logo.css";
import "./styles/__input/Header__input.css";
import "./styles/__button-image/Header__button-image.css";
import "./styles/__button-image/Header__button-image_UK.css";
import "./styles/__button-image/Header__button-image_RU.css";

// **функционал
function Header(props) {
  const [logoStyled, setLogoStyled] = React.useState(false)
  // *языковой переключатель
  function langChanger() {
    if (props.lang === "ru") {
      props.setLang("en");
    } else {
      props.setLang("ru");
    }
  }

function changeColor(e) {
  setLogoStyled(true);
  const html = document.querySelector('html')
  const logo = document.querySelector('.Header__logo')
  const hex = e.target.value
  const rgb = hexToRgb(hex)
  const stringRgb = `rgb(${rgb.r}, ${rgb.b}, ${rgb.b})`
  const stringReverse = `rgb(${255 - rgb.r}, ${255 - rgb.b}, ${255 - rgb.b})`
  const hexReverse = rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b)
  html.style.setProperty('--back-color', stringRgb)
  html.style.setProperty('--main-color', stringReverse)
  const filter = getFilter(hexReverse)
  logo.setAttribute('style', `filter: ${filter}`)
}

  // *DOM
  return (
    <header className="Header">
      <input type="color" className="Header__input" onInput={changeColor}/>
      <img
        className="Header__logo"
        alt="логотип"
        src={props.lang === "ru" ?
        logoStyled ? logoBlack : logo
        : logoStyled ? logoEngBlack : logoEng}
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
