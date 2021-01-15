// ***импорты
import React from 'react';
import Cell from '../Cell/Cell';
import { GAME, oldArrayString, getNewNumber, styler, allNumbers, toVertical, toHorizontal, fromVertical, fromHorizontal } from '../../utils/consts';
import './GameField.css';

// ***функционал
function GameField(props) {

  // **стейты
  const [numbers, setNumbers] = React.useState(GAME);
  const [maxNumber, setMaxNumber] = React.useState(16);
  const [touchStart, setTouchStart] = React.useState({})
  const [touchPosition, setTouchPosition] = React.useState({})
  const [isStopScrolling, setStopScrolling] = React.useState(false)

  // **функции
  // *начало игры
  let startGame = () => {
    if (props.isGame.current) {
      props.setEndGame(false);
      props.setGameStarted(true);
      props.setScrollLocker(true);
      setNewNumber();
      window.removeEventListener('keydown', startGame);
      window.removeEventListener('touchstart', startGame);
    }
  }
  React.useEffect(() => {
    if (props.isMobile) {
      window.addEventListener('touchstart', startGame)
      return () => {window.removeEventListener('touchstart', startGame)}
    } else {
    window.addEventListener('keydown', startGame);
    return () => {window.removeEventListener('keydown', startGame)};
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // *новая цифра в пустой ячейке
  function setNumber(array) {
    let newNumbers;
    let quantity = 0;
    let indexes = [];
    array.forEach(function (item, index){
      if (item.number === '') {
        quantity = quantity + 1
        indexes.push(index);
      }
    })
    let random = Math.random();
    let randomCell = Math.ceil(indexes.length * random);
    let index = indexes[randomCell - 1];
    newNumbers = array.slice(0);
    const randomNumber = getNewNumber();
    newNumbers[index].number = randomNumber;
    return newNumbers;
  }
  let newNumbers;
  function setNewNumber() {
    let getNumbers = setNumber(numbers);
    newNumbers = getNumbers;
    setNumbers(newNumbers);
  }
  let firstLine = [];
  let secondLine = [];
  let thirdLine = [];
  let fourthLine = [];
  styler(numbers);
  let sum;

  // *сложение соседних дублей
  function summ(a, b) {
    if(a === b) {
      sum = a + b;
      if(!isNaN(sum)) {
        let newScore = props.score + sum;
        props.setScore(newScore);
      }
      return sum;
    } else {
      return
    }
  }

  // *нахождение максимального числа(для стилей)
  function maxSeacher() {
    let allNums = allNumbers(numbers);
    if(Math.max(...allNums) > 16) {
      return setMaxNumber(Math.max(...allNums));
    }
  }
  let finishArr;

  // **функции смещения ячеек
  // *смещение в начало строки
  function toStart(line) {
    let newArr = line.filter((item) => {
      if (typeof item === "number") {
        return item;
      };
      return item;
    });
    if (newArr.length > 1){
      sum = undefined;
      summ(newArr[0], newArr[1]);
      if (sum) {
        newArr[0] = sum;
        newArr[1] = '';
      };
    }
    if (newArr.length > 2){
      sum = undefined;
      summ(newArr[1], newArr[2]);
      if (sum) {
        newArr[1] = sum;
        newArr[2] = '';
      };
    }
    if(newArr.length === 4) {
        sum = undefined;
        summ(newArr[2], newArr[3]);
        if (sum) {
          newArr[2] = sum;
          newArr[3] = '';
        };
      };
    finishArr = newArr.filter((item) => {
      if (typeof item === "number") {
        return item;
      };
      return item;
    })
    if (finishArr.length === 0) {
      finishArr = ['', '', '', ''];
    };
    if (finishArr.length === 1) {
      finishArr.push('');
      finishArr.push('');
      finishArr.push('');
    };
    if (finishArr.length === 2) {
      finishArr.push('');
      finishArr.push('');
    };
    if (finishArr.length === 3) {
      finishArr.push('');
    };
    return finishArr;
  }
  // *смещение в конец строки
  function toEnd(line) {
    let antiLine = line.reverse();
    let finishArr = toStart(antiLine);
    return finishArr.reverse();
  }
  // *вверх
  function toTop() {
    let startString = oldArrayString(numbers);
    toVertical(numbers, firstLine, secondLine, thirdLine, fourthLine);
    toStart(firstLine);
    firstLine = finishArr;
    toStart(secondLine);
    secondLine = finishArr;
    toStart(thirdLine);
    thirdLine = finishArr;
    toStart(fourthLine);
    fourthLine = finishArr;
    fromVertical(numbers, firstLine, secondLine, thirdLine, fourthLine);
    let endNumbers = numbers.slice().map((i) => {
      return i.number;
    })
    let endString = endNumbers.join();
    if (startString !== endString) {
      setNewNumber();
    } else {
      let emptyCells = endNumbers.filter((item) => {
        return item === '';
      })
      if(emptyCells.length === 0) {
        props.setPopupOpened(true);
        props.setPopupType('loose');
      }
    }
    maxSeacher();
  }
  // *влево
  function toLeft() {
    let startString = oldArrayString(numbers);
    toHorizontal(numbers, firstLine, secondLine, thirdLine, fourthLine);
    toStart(firstLine);
    firstLine = finishArr;
    toStart(secondLine);
    secondLine = finishArr;
    toStart(thirdLine);
    thirdLine = finishArr;
    toStart(fourthLine);
    fourthLine = finishArr;
    fromHorizontal(numbers, firstLine, secondLine, thirdLine, fourthLine);
    let endNumbers = numbers.slice().map((i) => {
      return i.number;
    })
    let endString = endNumbers.join();
    if (startString !== endString) {
      setNewNumber();
    } else {
      let emptyCells = endNumbers.filter((item) => {
        return item === '';
      })
      if(emptyCells.length === 0) {
        props.setPopupOpened(true);
        props.setPopupType('loose');
      }
    }
    maxSeacher();
  }
  // *вниз
  function toBottom() {
    let startString = oldArrayString(numbers);
    toVertical(numbers, firstLine, secondLine, thirdLine, fourthLine);
    toEnd(firstLine);
    firstLine = finishArr;
    toEnd(secondLine);
    secondLine = finishArr;
    toEnd(thirdLine);
    thirdLine = finishArr;
    toEnd(fourthLine);
    fourthLine = finishArr;
    fromVertical(numbers, firstLine, secondLine, thirdLine, fourthLine);
    let endNumbers = numbers.slice().map((i) => {
      return i.number;
    })
    let endString = endNumbers.join();
    if (startString !== endString) {
      setNewNumber();
    } else {
      let emptyCells = endNumbers.filter((item) => {
        return item === '';
      })
      if(emptyCells.length === 0) {
        props.setPopupOpened(true);
        props.setPopupType('loose');
      }
    }
    maxSeacher();
  }
  // *вправо
  function toRight() {
    let startString = oldArrayString(numbers);
    toHorizontal(numbers, firstLine, secondLine, thirdLine, fourthLine);
    toEnd(firstLine);
    firstLine = finishArr;
    toEnd(secondLine);
    secondLine = finishArr;
    toEnd(thirdLine);
    thirdLine = finishArr;
    toEnd(fourthLine);
    fourthLine = finishArr;
    fromHorizontal(numbers, firstLine, secondLine, thirdLine, fourthLine);
    let endNumbers = numbers.slice().map((i) => {
      return i.number;
    })
    let endString = endNumbers.join();
    if (startString !== endString) {
      setNewNumber();
    } else {
      let emptyCells = endNumbers.filter((item) => {
        return item === '';
      })
      if(emptyCells.length === 0) {
        props.setPopupOpened(true);
        props.setPopupType('loose');
      }
    }
    maxSeacher();
  }

  // *определение нажатой клавиши
  let pressedKey = [];
  function handleKeydown(e) {
    e.preventDefault();
    if (pressedKey.length === 0) {
      pressedKey.push(e.key);
    }
  }

  // **игровое управление
  // *отклик на нажатие клавишь
  function handleKeyup(e) {
      if (pressedKey[0] === "ArrowUp") {
        e.preventDefault();
        toTop();
        pressedKey.pop();
      } else if (pressedKey[0] === "ArrowDown") {
        e.preventDefault();
        toBottom();
        pressedKey.pop();
      } else if (pressedKey[0] === "ArrowLeft") {
        e.preventDefault();
        toLeft();
        pressedKey.pop();
      } else if (pressedKey[0] === "ArrowRight") {
        e.preventDefault();
        toRight();
        pressedKey.pop();
      } else if (pressedKey[0] === "Tab") {
        e.preventDefault();
        cheat();
        pressedKey.pop();
      } else {
        pressedKey.pop();
      }
  }
  // *тест-чит для победы
  function cheat(){
    let cheatField = numbers.map((i) => {
      i.number = 1024;
      return i;
    })
    setNumbers(cheatField);
  }
  // **управление с мобильного устройства
  const sensitivity = 20;
  // *получаем точку касания
  function TouchStart(e) {
    if (props.scrollLocker) {
      setStopScrolling(true)
      setTouchStart({ x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY });
      setTouchPosition({ x: touchStart.x, y: touchStart.y });
    }
  }
  // *Получаем новую позицию
  function TouchMove(e) {
    if(isStopScrolling) {
      e.preventDefault()
    }
      setTouchPosition({ x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY });
    }
  // *Действия при свайпе
  function CheckAction() {
    let d = {
   	  x: touchStart.x - touchPosition.x,
   	  y: touchStart.y - touchPosition.y
    };
    if(Math.abs(d.x) > Math.abs(d.y)) {
   	  if(Math.abs(d.x) > sensitivity) {
   		  if(d.x > 0) {
          toLeft();
        } else {
          toRight();
        }
   	  }
    } else {
      if(Math.abs(d.y) > sensitivity) {
        if(d.y > 0) {
          toTop();
        } else {
        toBottom();
        }
   	  }
    }
  }
  // *Окончание или отмена касания
  function TouchEnd(e) {
    CheckAction();
    setTouchStart({});
    setTouchPosition({});
    setStopScrolling(false)
    //return true
  }

  // *расставляем слушатели
  React.useEffect(() => {
    if (props.gameStarted) {
      window.addEventListener('keydown', handleKeydown);
      return () => {window.removeEventListener('keydown', handleKeydown)};
    }
  })
  React.useEffect(() => {
    if (props.gameStarted) {
      window.addEventListener('keyup', handleKeyup);
      return () => {window.removeEventListener('keyup', handleKeyup)};
    }
  })
  React.useEffect(() => {
    if (props.gameStarted && props.isMobile) {
      window.addEventListener("touchstart", TouchStart);
      window.addEventListener("touchmove", TouchMove, { passive: false });
      window.addEventListener("touchend", TouchEnd);
      window.addEventListener("touchcancel", TouchEnd);
      return () => {
        window.removeEventListener("touchstart", TouchStart)
        window.removeEventListener("touchmove", TouchMove)
        window.removeEventListener("touchend", TouchEnd)
        window.removeEventListener("touchcancel", TouchEnd)
      };
    }
  })

  // *вызов попапа победы
  React.useEffect(() => {
    if(maxNumber === 2048) {
      let popup = document.querySelector('.GamePopup_opened');
      if(!popup) {
        props.setPopupOpened(true);
        props.setPopupType('win');
        setMaxNumber(2049);
      }
    }
  }, [maxNumber, props]);

  // **DOM
  return (
    maxNumber < 2049 ?
    (<div className="GameField" style={{ 'backgroundColor': `rgb(${127 + maxNumber / 16}, ${127 + maxNumber / 16}, ${128 - maxNumber / 16})`}}>
      {numbers.map((cell, i) => (
        <Cell key={i} cell={cell}/>
      ))}
    </div>) :
    (<div className="GameField" style={{ 'backgroundColor': `rgb(${255 - maxNumber / 64}, 255, 0)`}}>
      {numbers.map((cell, i) => (
        <Cell key={i} cell={cell}/>
      ))}
    </div>)
  );
}

// ***импорт
export default GameField;
