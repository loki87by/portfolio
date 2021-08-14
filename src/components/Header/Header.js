// **импорты
import React from "react";
import logo from "../../images/logo.svg";
import logoEng from "../../images/logoEng.svg";
import eng from "../../images/UK.png";
import rus from "../../images/RU.png";
import "./Header.css";
import "./styles/__logo/Header__logo.css";
import "./styles/__input/Header__input.css";
import "./styles/__input/_day/Header__input_day.css";
import "./styles/__input/_mobile/Header__input_mobile.css";
import "./styles/__button/Header__button.css";
import "./styles/__button-image/Header__button-image.css";
import "./styles/__button-image/_day/Header__button-image_day.css";

// **функционал
function Header(props) {
  const [rangeValue, setRangeValue] = React.useState(0)
  // *языковой переключатель
  function langChanger() {
    if (props.lang === "ru") {
      props.setLang("en");
    } else {
      props.setLang("ru");
    }
  }
  function switcher(evt) {
    setRangeValue(evt.target.value)
    const result = !props.isDay
    props.setDay(result)
    const body = document.getElementById('root')
    body.classList.toggle('body_day');
  }

  // *DOM
  return (
    <header className="Header">
      <img
        className="Header__logo"
        alt="логотип"
        src={props.lang === "ru" ? logo : logoEng}
      />
      <input type="range" className={`Header__input ${props.isDay && 'Header__input_day'} ${props.width <= 850 && 'Header__input_mobile'}`} value={rangeValue} min='1' max='2' onInput={switcher} />
      {props.lang === "ru" ? (
        <button className="Header__button" type="button" onClick={langChanger}>
          <img className={`Header__button-image ${props.isDay && 'Header__button-image_day'}`} src={eng} alt="флаг СК" />
        </button>
      ) : (
        <button className="Header__button" type="button" onClick={langChanger}>
          <img className={`Header__button-image ${props.isDay && 'Header__button-image_day'}`} src={rus} alt="флаг РФ" />
        </button>
      )}
    </header>
  );
}
// **импорт
export default Header;
