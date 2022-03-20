import React from "react";
import {
  TranslationContext,
  translations,
} from "../../contexts/translationContext";
import { PIC_ARRAY } from "../../consts/pictures";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "../../vendor/normalize.css";
import "./App.css";
import "./styles/App_preload.css";

function App() {
  const [lang, setLang] = React.useState("ru");
  const [images, setImages] = React.useState({});
  const [loadProgress, setLoadProgress] = React.useState(0);
  const [imagesIsLoad, setImagesIsLoad] = React.useState(false);
  const [scrollbarWidth, setScrollbarWidth] = React.useState(0);
  const Mobile =
    /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent
    );
  const mobileRef = React.useRef(Mobile);

  React.useEffect(() => {
    setInterval(() => {
      const Mobile =
        /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
          navigator.userAgent
        );
      mobileRef.current = Mobile;
    }, 15000);
  });

  React.useEffect(() => {
    const keys = Object.keys(PIC_ARRAY);
    const values = Object.values(PIC_ARRAY);
    const allPics = values.flat();
    const entries = Object.entries(PIC_ARRAY);
    let progressCounter = 0;
    const loadStep = Math.round((100 / allPics.length) * 100) / 100;
    const imagesArray = images || {};
    for (let i = 0; i < entries.length; i++) {
      const arr = [];
      for (let j = 0; j < values[i].length; j++) {
        let img = new Image();
        img.src = values[i][j];
        // eslint-disable-next-line no-loop-func
        img.onload = function () {
          progressCounter++;
          const progress = progressCounter * loadStep;
          setLoadProgress(progress);
        };
        arr.push(img);
      }
      imagesArray[keys[i]] = arr;
    }
    setImages(imagesArray);
  }, [images]);

  React.useEffect(() => {
    if (Math.round(loadProgress) === 100) {
      setImagesIsLoad(true);
    }
  }, [loadProgress]);

  React.useEffect(() => {
    if (!Mobile) {
      const scrollDiv = document.createElement("div");
      scrollDiv.className = "scrollbar-measure";
      document.body.appendChild(scrollDiv);
      setScrollbarWidth(scrollDiv.offsetWidth - scrollDiv.clientWidth);
      document.body.removeChild(scrollDiv);
    }
  }, [Mobile]);

  return (
    <>
      <TranslationContext.Provider value={translations[lang]}>
        <Header setLang={setLang} lang={lang} />
        {imagesIsLoad ? (
          <Main
            isMobile={mobileRef.current}
            lang={lang}
            images={images}
            imagesIsLoad={imagesIsLoad}
            scrollbarWidth={scrollbarWidth}
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
            {translations[lang].preload}
            {Math.round(loadProgress)}%
          </h2>
        )}
        <Footer />
      </TranslationContext.Provider>
    </>
  );
}

export default App;
