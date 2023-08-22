import React, { useContext, ChangeEvent, ReactElement } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { updateColors } from "../../utils/helpers.js";
import { hexToRgb } from "../../utils/filter.js";
import { HeaderProps, HSL } from "../../utils/types";
import logo from "../../images/icons/logo.svg";
import logoEng from "../../images/icons/logoEng.svg";
import "./Header.css";

function Header(props: HeaderProps): ReactElement {
  const translation = useContext(TranslationContext);
  function langChanger() {
    if (props.lang === "ru") {
      props.setLang("en");
    } else {
      props.setLang("ru");
    }
  }

  function changeColor(e: ChangeEvent<HTMLInputElement>) {
    const hex = e.target.value;
    const rgb = hexToRgb(hex, true);
    updateColors(rgb as HSL);
  }

  return (
    <header className="Header">
      <input
        type="color"
        className="Header__input"
        title={translation?.changeBack}
        onInput={changeColor}
      />
      <img
        className="Header__logo"
        alt="логотип"
        src={props.lang === "ru" ? logo : logoEng}
      />
      {props.lang === "ru" ? (
        <div
          className="Header__button-image Header__button-image_UK"
          onClick={langChanger}
        ></div>
      ) : (
        <div
          className="Header__button-image Header__button-image_RU"
          onClick={langChanger}
        ></div>
      )}
    </header>
  );
}

export default Header;
