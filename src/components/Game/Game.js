// **импорты
import React from 'react';
import { TranslationContext } from '../../contexts/translationContext';
import GameField from '../GameField/GameField';
import Popup from '../Popup/Popup';
import './Game.css';
import './styles/__score/Game__score.css';
import './styles/__text-container/Game__text-container.css';
import './styles/__rules-title/Game__rules-title.css';
import './styles/__rules-text/Game__rules-text.css';
import './styles/__rules-span/Game__rules-span.css';
import './styles/__rules-text/_gameStarted/Game__rules-text_gameStarted.css';
import './styles/__rules-title/_gameStarted/Game__rules-title_gameStarted.css';

// **функционал
function Game(props) {
  // *константы
  const translation = React.useContext(TranslationContext);
  const [score, setScore] = React.useState(0);

  // *DOM
  return (
    <section className="Game">
      {props.gameStarted ?
        <h3 className="Game__score">{translation.score}{score}</h3>
        : ''}
      <GameField
      isGame={props.isGame}
      gameStarted={props.gameStarted}
      setGameStarted={props.setGameStarted}
      endGame={props.endGame}
      setEndGame={props.setEndGame}
      score={score}
      setScore={setScore}
      setPopupOpened={props.setPopupOpened}
      setPopupType={props.setPopupType}/>
      <div className="Game__text-container">
        <h3 className={`Game__rules-title ${props.gameStarted && "Game__rules-title_gameStarted"}`}>{translation.rulesTitle}</h3>
        <p className={`Game__rules-text ${props.gameStarted && "Game__rules-text_gameStarted"}`}>{translation.rules}</p>
        {props.endGame ?
          props.gameStarted ? ''
            : <span className="Game__rules-span">{translation.gameOver}</span>
          : props.gameStarted ? ''
            : <span className="Game__rules-span">{translation.prestart}</span>}
      </div>
      <Popup />
    </section>
  );
}

// **импорт
export default Game;
