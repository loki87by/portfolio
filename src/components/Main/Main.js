/* eslint-disable react-hooks/exhaustive-deps */
// ***импорты
import React from "react";
import {
  AFTER_MIDNIGHT,
  GAME,
  MINUTES_PER_DAY,
  MINUTE_PER_MS,
} from "../../utils/consts";
import { newgame } from "../../utils/helpers";
import Resume from "../Resume/Resume";
import Game from "../Game/Game";
import Popup from "../Popup/Popup";
import "./Main.css";

// ***функционал
function Main(props) {
  // **стейты
  const [endTime, setEndTime] = React.useState(1015);
  const [newTime, setNewTime] = React.useState(0);
  const [isTimerEdited, setTimerEdited] = React.useState(false);
  const [isTimedPopup, setTimedPopup] = React.useState(false);
  const [isNewTimer, setNewTimer] = React.useState(false);
  const [newInterval, setNewInterval] = React.useState(true);
  const [intervalTime, setIntervalTime] = React.useState(3300000);
  const [popupOpened, setPopupOpened] = React.useState(false);
  const [popupType, setPopupType] = React.useState("");
  const [gameStarted, setGameStarted] = React.useState(false);
  const [endGame, setEndGame] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [numbers, setNumbers] = React.useState(GAME);
  const countRef = React.useRef(endTime);
  countRef.current = endTime;
  const intervalRef = React.useRef(intervalTime);
  intervalRef.current = intervalTime;

  // *перезапуск геймплея
  function restarter() {
    handlePopupClose();
    setEndGame(false);
    newgame(GAME);
    setGameStarted(true);
    setScore(0);
    //newgame(GAME);
  }

  // **функции открытия попапа
  // *открытие в установленное время
  function openPopup() {
    setPopupOpened(true);
    setTimedPopup(true);
  }
  // *открытие попапа
  function openOclockPopup() {
    openPopup();
    setPopupType("oclock");
  }
  // *эффект первичного таймера
  React.useEffect(() => {
    let time;
    countRef.current = endTime;
    if (AFTER_MIDNIGHT < countRef.current) {
      time = countRef.current - AFTER_MIDNIGHT;
    } else {
      time = countRef.current - AFTER_MIDNIGHT + MINUTES_PER_DAY;
    }
    let timer = setTimeout(openOclockPopup, time * MINUTE_PER_MS);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  // *открытие попапа кофе-брейка через час
  function openCoffeePopup() {
    openPopup();
    setPopupType("coffee");
  }
  // *эффект первичного таймера попапа кофе-брейка
  React.useEffect(() => {
    intervalRef.current = intervalTime;
    if (newInterval) {
      let timer = setInterval(openCoffeePopup, intervalRef.current);
      return () => {
        clearInterval(timer);
      };
    }
  }, [intervalRef.current]);

  // **функции перенастройки попапа
  // *эффект измененного таймера
  React.useEffect(() => {
    if (isNewTimer) {
      let time = newTime - countRef.current;
      let timer = setTimeout(openOclockPopup, time * MINUTE_PER_MS);
      return () => {
        setNewTimer(false);
        clearTimeout(timer);
      };
    }
  });
  // *считыватель выставленного времени
  let mins;
  let hrs;
  function handleEditTimer(e) {
    mins = +e.target.value.slice(3, 5);
    hrs = +e.target.value.slice(0, 2);
    let time = hrs * 60 + mins;
    setNewTime(time);
    setTimerEdited(true);
  }
  // *установка нового таймера
  function newTimer() {
    handlePopupClose();
    setTimerEdited(false);
    setEndTime(countRef.current);
    setNewTimer(true);
  }
  // *получение выбранных данных времени
  function getNewTimerValue() {
    let value = document.getElementById("timerChanger").value;
    let timerValue = value * MINUTE_PER_MS;
    setTimerEdited(true);
    setIntervalTime(timerValue);
  }
  // *установка нового интервала
  function newTimeInterval() {
    handlePopupClose();
    setNewInterval(true);
  }

  // **функции закрытия попапа
  // *закрытие попапа
  function handlePopupClose() {
    setPopupOpened(false);
    setPopupType("");
    setTimedPopup(false);
    setNewInterval(false);
  }
  // *закрытие по esc
  function handleEscClose(e) {
    if (e.key === "Escape") {
      handlePopupClose();
    }
  }
  // *закрытие по оверлею
  function handleClickClose(e) {
    if (e.target.classList.contains("Popup_opened")) {
      handlePopupClose();
    }
  }
  // *слушатели закрытий
  React.useEffect(() => {
    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("click", handleClickClose);
  });

  // **DOM
  return (
    <section className="Main">
      <Resume
        isMobile={props.isMobile}
        setLuft={props.setLuft}
        lang={props.lang}
        images={props.images}
      />
      <Game
        isMobile={props.isMobile}
        isGame={props.isGame}
        score={score}
        setScore={setScore}
        setPopupOpened={setPopupOpened}
        setPopupType={setPopupType}
        setGameStarted={setGameStarted}
        setEndGame={setEndGame}
        gameStarted={gameStarted}
        endGame={endGame}
        numbers={numbers}
        setNumbers={setNumbers}
        restarter={restarter}
      />
      <Popup
        isOpen={popupOpened}
        isTimedPopup={isTimedPopup}
        onClose={handlePopupClose}
        handleEditTimer={handleEditTimer}
        isTimerEdited={isTimerEdited}
        newTimer={newTimer}
        popupType={popupType}
        setGameStarted={setGameStarted}
        setEndGame={setEndGame}
        setTimedPopup={setTimedPopup}
        setNewInterval={setNewInterval}
        getNewTimerValue={getNewTimerValue}
        newTimeInterval={newTimeInterval}
        restarter={restarter}
      />
    </section>
  );
}

// ***экспорт
export default Main;
