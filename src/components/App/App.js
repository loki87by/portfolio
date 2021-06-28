// **импорты
import React from "react";
import {
  TranslationContext,
  translations,
} from "../../contexts/translationContext";
import { PIC_ARRAY, HEIGHT_KOEFFICIENT } from "../../utils/consts";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "../../vendor/normalize.css";
import "./App.css";
import "./styles/App_preload.css";

function App() {
  // **стейты
  const [lang, setLang] = React.useState("ru");
  const [isGame, setIsGame] = React.useState(false);
  const [luft, setLuft] = React.useState(0);
  const [images, setImages] = React.useState([]);
  const [loadProgress, setLoadProgress] = React.useState(0);
  const [imagesIsLoad, setImagesIsLoad] = React.useState(false);
  const gameRef = React.useRef(isGame);
  const Mobile =
    /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent
    );
  const mobileRef = React.useRef(Mobile);

  // **проверка типа устройства пользователя
  React.useEffect(() => {
    setInterval(() => {
      const Mobile =
        /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
          navigator.userAgent
        );
      mobileRef.current = Mobile;
    }, 15000);
  });

  // **отсеживание высоты страницы
  React.useEffect(() => {
    function fromTop() {
      const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      if (window.pageYOffset > scrollHeight * (HEIGHT_KOEFFICIENT + luft)) {
        gameRef.current = true;
      } else {
        gameRef.current = false;
      }setIsGame(gameRef.current);
    }
    window.addEventListener("scroll", fromTop);
  });

  React.useEffect(() => {
    for (let i = 0; i < PIC_ARRAY.length; i++) {
      let img = new Image();
      img.src = PIC_ARRAY[i];
      img.onload = function () {
        const loadStep = Math.round((100 / PIC_ARRAY.length) * 100) / 100;
        const progress = (i + 1) * loadStep;
        setLoadProgress(progress);
      };
      const imagesArray = images || [];
      imagesArray.push(img);
      setImages(imagesArray);
    }
  }, [images]);

  React.useEffect(() => {
    if (Math.round(loadProgress) === 100) {
      setImagesIsLoad(true);
    }
  }, [loadProgress]);

  // **DOM
  return (
    <>
      <TranslationContext.Provider value={translations[lang]}>
        <Header setLang={setLang} lang={lang} />
        {imagesIsLoad ? (
          <Main
            isMobile={mobileRef.current}
            isGame={gameRef}
            lang={lang}
            images={images}
            setLuft={setLuft}
          />
        ) : (
          <h2
            className="App_preload"
            style={{
              background: `linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) ${
                loadProgress - 1
              }%, rgba(255,255,255,1) ${loadProgress}%)`,
            }}
          >
            Идёт кэширование изображений. Пожалуйста ждите{" "}
            {Math.round(loadProgress)}%
          </h2>
        )}
        <Footer />
      </TranslationContext.Provider>
    </>
  );
}

// **экспорт
export default App;
