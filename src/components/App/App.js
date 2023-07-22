/* eslint-disable no-loop-func */
import React from "react";
import {
  TranslationContext,
  translations,
} from "../../contexts/translationContext";
import { PIC_ARRAY } from "../../consts/pictures";
import Header from "../Header/Header";
import Resume from "../Resume/Resume";
import Footer from "../Footer/Footer";
import "../../vendor/normalize.css";
import "./App.css";
import "./styles/App_preload.css";

function App() {
  const [lang, setLang] = React.useState("ru");
  const [images, setImages] = React.useState({});
  const [isInitWidget, setInitWidget] = React.useState(false);
  /* const [loadProgress, setLoadProgress] = React.useState(0); */
  /* const [imagesIsLoad, setImagesIsLoad] = React.useState(false); */
  const [dataIsRecorded, setDataRecorded] = React.useState(false);
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
    /* const allPics = values.flat(); */
    const entries = Object.entries(PIC_ARRAY);
    /* let progressCounter = 0;
    const loadStep = Math.ceil((100 / allPics.length) * 100) / 100; */
    for (let i = 0; i < entries.length; i++) {
      new Promise(() => {
      const arr = [];
      for (let j = 0; j < values[i].length; j++) {
        let img = new Image();
        img.src = values[i][j];
        img.onload = function () {
          /* progressCounter++; */
          /* const progress = progressCounter * loadStep; */
          /* setLoadProgress(progress); */
          setDataRecorded(true);
        };

        if (dataIsRecorded) {
          setDataRecorded(false);
        }
        arr.push(img);
      }
      const imagesArray = images || {};
      imagesArray[keys[i]] = arr;
      return imagesArray
    }).then((res) => {
      setImages(res)
    })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

/*   React.useEffect(() => {
    if (Math.round(loadProgress) === 100) {
      setImagesIsLoad(true);
    }
  }, [loadProgress]); */

  React.useEffect(() => {
    if (!Mobile) {
      const scrollDiv = document.createElement("div");
      scrollDiv.className = "scrollbar-measure";
      document.body.appendChild(scrollDiv);
      setScrollbarWidth(scrollDiv.offsetWidth - scrollDiv.clientWidth);
      document.body.removeChild(scrollDiv);
    }
  }, [Mobile]);

  React.useEffect(() => {
    const widget = document.createElement("weather-widget");
    widget.id = "weatherWidget";
    document.body.appendChild(widget);
    const script = document.createElement("script");
    script.src =
      "https://myweatherwidget.netlify.app/main.5b97e72ea5ec56747edc.js";
    script.async = true;
    script.onload = () => {
      window.MyApp.init(widget);
    };
    widget.appendChild(script);
    setInitWidget(true);
  }, []);

  React.useEffect(() => {
    const widget = document.getElementById("weatherWidget");
    widget.classList.add("hide-widget");
  }, [isInitWidget]);

  return (
    <>
      <TranslationContext.Provider value={translations[lang]}>
        <Header setLang={setLang} lang={lang} />{/*
        {imagesIsLoad ? ( */}
        <main>
          <Resume
            isMobile={mobileRef.current}
            lang={lang}
            images={images}
            /* imagesIsLoad={imagesIsLoad} */
            scrollbarWidth={scrollbarWidth}
          />{/*
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
        <div className="scrollbar-measure"></div> */}
        </main>
        <Footer />
      </TranslationContext.Provider>
    </>
  );
}

export default App;
