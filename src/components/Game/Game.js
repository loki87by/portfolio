// **импорты
import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import GameField from "../GameField/GameField";
import Popup from "../Popup/Popup";
import "./Game.css";
import "./styles/__score/Game__score.css";
import "./styles/__scrollSwitcher/Game__scrollSwitcher.css";
import "./styles/__text-container/Game__text-container.css";
import "./styles/__rules-title/Game__rules-title.css";
import "./styles/__rules-text/Game__rules-text.css";
import "./styles/__rules-span/Game__rules-span.css";
import "./styles/__rules-span/_day/Game__rules-span_day.css";
import "./styles/__restart-button/Game__restart-button.css";
import "./styles/__restart-button/Game__restart-button_symbol.css";
import "./styles/__rules-text/_gameStarted/Game__rules-text_gameStarted.css";
import "./styles/__rules-title/_gameStarted/Game__rules-title_gameStarted.css";

// **функционал
function Game(props) {
  // *константы
  const translation = React.useContext(TranslationContext);
  const [scrollLocker, setScrollLocker] = React.useState(false);

  React.useEffect(() => {
    const button = document.querySelector(".Game__restart-button");

    if (button) {
      function startAnimation() {
        let arr = translation.restart.split("");
        let newArr = arr.map((i, n) => {
          if (i === " ") {
            return `<p class="Game__restart-button_symbol" style="animation: none">&nbsp</p>`;
          } else {
            return `<p class="Game__restart-button_symbol" style="animation-delay: ${
              n / 2
            }s">${i}</p>`;
          }
        });
        button.innerHTML = newArr.join("");
      }
      startAnimation();
      function overAnimation() {
        button.innerHTML = translation.restart;
      }
      button.addEventListener("mouseover", overAnimation);
      button.addEventListener("mouseout", startAnimation);
      button.addEventListener("onclick", props.restarter);
      return () => {
        button.removeEventListener("mouseover", overAnimation);
        button.removeEventListener("onclick", props.restarter);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  // *кнопка переключения скролла свайпом
  function scrollSwitcher() {
    if (scrollLocker) {
      setScrollLocker(false);
    } else {
      setScrollLocker(true);
    }
  }

  // *DOM
  return (
    <section className="Game">
      {props.gameStarted ? (
        <h3 className="Game__score">
          {translation.score}
          {props.score}
        </h3>
      ) : (
        ""
      )}
      {props.isMobile && props.gameStarted ? (
        <button
          type="button"
          onClick={scrollSwitcher}
          className="Game__scrollSwitcher"
        >
          {translation.scrollSwither}
        </button>
      ) : (
        ""
      )}
      <GameField
        numbers={props.numbers}
        setNumbers={props.setNumbers}
        isMobile={props.isMobile}
        scrollLocker={scrollLocker}
        setScrollLocker={setScrollLocker}
        isGame={props.isGame}
        gameStarted={props.gameStarted}
        setGameStarted={props.setGameStarted}
        endGame={props.endGame}
        setEndGame={props.setEndGame}
        score={props.score}
        setScore={props.setScore}
        setPopupOpened={props.setPopupOpened}
        setPopupType={props.setPopupType}
        isDay={props.isDay}
      />
      <div className="Game__text-container">
        <h3
          className={`Game__rules-title ${
            props.gameStarted && "Game__rules-title_gameStarted"
          }`}
        >
          {translation.rulesTitle}
        </h3>
        <p
          className={`Game__rules-text ${
            props.gameStarted && "Game__rules-text_gameStarted"
          }`}
        >
          {props.isMobile ? translation.mobileRules : translation.rules}
        </p>
        {props.endGame ? (
          props.gameStarted ? (
            ""
          ) : (
            <>
              <span className="Game__rules-span">{translation.gameOver}</span>
              <button
                className="Game__restart-button"
                type="button"
                onClick={props.restarter}
              >
                {translation.restart}
              </button>
            </>
          )
        ) : props.gameStarted ? (
          ""
        ) : (
          <span className="Game__rules-span">
            {props.isMobile ? translation.prestartMobile : translation.prestart}
          </span>
        )}
      </div>
      <Popup />
    </section>
  );
}

// **импорт
export default Game;
