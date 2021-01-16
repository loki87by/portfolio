// **импорты
import React from 'react';
import { TranslationContext, translations } from '../../contexts/translationContext';
import { picArray } from '../../utils/consts';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import '../../vendor/normalize.css';
import './App.css';

function App() {
  // **стейты
  const [lang, setLang] = React.useState('ru');
  const [isGame, setIsGame] = React.useState(false);
  const [luft, setLuft] = React.useState(0);
  const gameRef = React.useRef(isGame);
  const Mobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
  const mobileRef = React.useRef(Mobile);

  // **проверка типа устройства пользователя
  React.useEffect(() => {
    setInterval(() => {
      const Mobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
      mobileRef.current = Mobile
    }, 15000);
  })

  // **отсеживание высоты страницы
  React.useEffect(() => {
    function fromTop() {
      const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      if (window.pageYOffset > scrollHeight * (0.73 + luft)) {
        gameRef.current = true;
      } else {
        gameRef.current = false;
      }
      setIsGame(gameRef.current);
    }
    window.addEventListener("scroll", fromTop);
  })

  // **кэширование изображения для ускорения анимаций
  function preloadImages(array) {
    if (!preloadImages.list) {
      preloadImages.list = [];
    }
    let list = preloadImages.list;
    for (let i = 0; i < array.length; i++) {
      let img = new Image();
      img.onload = function() {
        let index = list.indexOf(this);
        if (index !== -1) {
          list.splice(index, 1);
          }
      }
      list.push(img);
      img.src = array[i];
    }
  }

  preloadImages(picArray);

  // **DOM
  return (
      <>
        <TranslationContext.Provider value={translations[lang]}>
          <Header setLang={setLang} lang={lang}/>
          <Main isMobile={mobileRef.current} isGame={gameRef} lang={lang} setLuft={setLuft}/>
          <Footer />
        </ TranslationContext.Provider>
      </>
  );
}

// **экспорт
export default App;
