// ***импорты
import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import "./Popup.css";
import "./styles/_opened/Popup_opened.css";
import "./styles/__container/Popup__container.css";
import "./styles/__text/Popup__text.css";
import "./styles/__smile/Popup__smile.css";
import "./styles/__smile-bigcircle/Popup__smile-bigcircle.css";
import "./styles/__smile-smallcircle/Popup__smile-smallcircle.css";
import "./styles/__smile-smallcircle/_left/Popup__smile-smallcircle_left.css";
import "./styles/__smile-smallcircle/_right/Popup__smile-smallcircle_right.css";
import "./styles/__smile-mimic/Popup__smile-mimic.css";
import "./styles/__smile-mimic/_type/Popup__smile-mimic_type_win.css";
import "./styles/__smile-mimic/_type/Popup__smile-mimic_type_loose.css";
import "./styles/__buttons/Popup__buttons.css";
import "./styles/__button/Popup__button.css";
import "./styles/__time-input/Popup__time-input.css";
import "./styles/__button/_vertical/Popup__button_vertical.css";
import "./styles/__button/_disabled/Popup__button_disabled.css";

// ***функционал
function Popup(props) {
  // **константы
  const translation = React.useContext(TranslationContext);
  let title;
  let close;
  let next;
  let picColor;
  let ignor;

  // **функции
  // *закрытие попапа
  function handleClick() {
    props.onClose();
    props.setEndGame(true);
    props.setGameStarted(false);
    props.setNewInterval(true);
  }
  // *настройка попапа
  function popupCreator() {
    if (props.popupType === "win") {
      title = translation.win;
      close = translation.thanxNo;
      next = translation.continue;
      picColor = "greenyellow";
    } else if (props.popupType === "loose") {
      title = translation.loose;
      close = translation.thanxNo;
      picColor = "orangered";
    } else if (props.popupType === "oclock") {
      title = translation.dayEnd;
      close = translation.thanx;
      ignor = translation.ignor;
      next = translation.dayNoEnd;
    } else if (props.popupType === "coffee") {
      title = translation.coffee;
      close = translation.goodIdea;
      ignor = translation.ignore;
      next = translation.remind;
    }
  }
  popupCreator();

  // **DOM
  return (
    <section
      className={`Popup ${props.isOpen && "Popup_opened"}`}
      id={props.popupType}
    >
      <div
        className="Popup__container"
        style={{ maxHeight: `${props.isTimedPopup && "50vw"}` }}
        name={props.popupType}
      >
        <h1 className="Popup__text">{title}</h1>
        {props.isTimedPopup ? (
          ""
        ) : (
          <figure className="Popup__smile">
            <div
              className="Popup__smile-bigcircle"
              style={{ borderColor: picColor }}
            ></div>
            <div
              className="Popup__smile-smallcircle Popup__smile-smallcircle_left"
              style={{ borderColor: picColor, backgroundColor: picColor }}
            ></div>
            <div
              className="Popup__smile-smallcircle Popup__smile-smallcircle_right"
              style={{ borderColor: picColor, backgroundColor: picColor }}
            ></div>
            <div
              style={{ borderTopColor: picColor }}
              className={`${
                props.popupType === "win" && "Popup__smile-mimic_type_win"
              } ${
                props.popupType === "loose" && "Popup__smile-mimic_type_loose"
              } Popup__smile-mimic`}
            ></div>
          </figure>
        )}
        <div
          className="Popup__buttons"
          style={{ flexDirection: `${props.isTimedPopup && "column"}` }}
        >
          {props.popupType === "win" ? (
            <button
              type="button"
              className="Popup__button"
              onClick={props.onClose}
            >
              {next}
            </button>
          ) : props.isTimedPopup ? (
            <>
              <button
                type="button"
                disabled={props.isTimerEdited ? null : "disabled"}
                style={{
                  backgroundColor: `${props.isTimerEdited ? "goldenrod" : ""}`,
                }}
                className={`Popup__button Popup__button_vertical ${
                  !props.isTimerEdited && "Popup__button_disabled"
                }`}
                onClick={
                  props.popupType === "oclock"
                    ? props.newTimer
                    : props.newTimeInterval
                }
              >
                {props.isTimerEdited
                  ? props.popupType === "oclock"
                    ? translation.remindAt
                    : next
                  : next}
              </button>
              {props.popupType === "oclock" ? (
                <input
                  className="Popup__time-input"
                  onChange={(e) => props.handleEditTimer(e)}
                  type="time"
                  required
                />
              ) : (
                <select
                  className="Popup__time-input"
                  defaultValue={translation.mins}
                  id="timerChanger"
                  onChange={props.getNewTimerValue}
                  required
                >
                  <option disabled>{translation.mins}</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              )}
              <button
                className="Popup__button Popup__button_vertical"
                style={{
                  backgroundColor: `${props.isTimedPopup ? "orangered" : ""}`,
                }}
                type="button"
                onClick={props.onClose}
              >
                {ignor}
              </button>
            </>
          ) : (
            ""
          )}
          <button
            className={`Popup__button ${
              props.isTimedPopup && "Popup__button_vertical"
            }`}
            style={{
              backgroundColor: `${props.isTimedPopup ? "forestgreen" : ""}`,
            }}
            type="button"
            onClick={handleClick}
          >
            {close}
          </button>
          {props.popupType === "loose" ? (
            <button
              className="Popup__button"
              type="button"
              onClick={props.restarter}
            >
              {translation.restart}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

// ***экспорт
export default Popup;
