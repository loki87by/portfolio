/* eslint-disable no-loop-func */
import React, { useState, useEffect, useRef } from "react";
import {
  TranslationContext,
  translations,
} from "../../contexts/translationContext";
import { PIC_ARRAY } from "../../consts/pictures";
import Header from "../Header/Header";
import Resume from "../Resume/Resume";
import Bio from "../Bio/Bio"
import Footer from "../Footer/Footer";
import "../../vendor/normalize.css";
import "./App.css";
import "./styles/App_preload.css";

function App() {
  const [lang, setLang] = useState("ru");
  const [images, setImages] = useState({});
  const [isInitWidget, setInitWidget] = useState(false);
  const [avaLoaded, setAvaLoaded] = useState(false);
  const [openedSection, setOpenedSection] = useState("");
  const [screenWidth, setScreenWidth] = React.useState(window.screen.width);
  /* const [imagesIsLoad, setImagesIsLoad] = React.useState(false); */
  const [dataIsRecorded, setDataRecorded] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const Mobile =
    /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent
    );

  const mobileRef = useRef(Mobile);

  useEffect(() => {
    setInterval(() => {
      const Mobile =
        /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
          navigator.userAgent
        );
      mobileRef.current = Mobile;
    }, 15000);
  });

  useEffect(() => {
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

  useEffect(() => {
    if (images && images.avatar && images.avatar[0]) {
      setAvaLoaded(true);
    }
  }, [images])

  useEffect(() => {
    if (!Mobile) {
      const scrollDiv = document.createElement("div");
      scrollDiv.className = "scrollbar-measure";
      document.body.appendChild(scrollDiv);
      setScrollbarWidth(scrollDiv.offsetWidth - scrollDiv.clientWidth);
      document.body.removeChild(scrollDiv);
    }
  }, [Mobile]);

  useEffect(() => {
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

  useEffect(() => {
    const widget = document.getElementById("weatherWidget");
    widget.classList.add("hide-widget");
  }, [isInitWidget]);

  useEffect(() => {
    function resizer() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", resizer);
    resizer();

    return () => window.removeEventListener("resize", resizer);
  });

  return (
    <>
      <TranslationContext.Provider value={translations[lang]}>
        <Header setLang={setLang} lang={lang} />{/*
        {imagesIsLoad ? ( */}
        <main>{!avaLoaded ?
        <p>{translations[lang].welcome}</p> :
          <Resume
            isMobile={mobileRef.current}
            lang={lang}
            images={images}
            /* imagesIsLoad={imagesIsLoad} */
            scrollbarWidth={scrollbarWidth}
            setOpenedSection={setOpenedSection}
          />
      }
      {/* {openedSection === 'contacts' ? <Contacts /> : ''}
      {openedSection === 'docs' ? <Docs /> : ''}
      {openedSection === 'info' ? <Info /> : ''}
      {openedSection === 'stack' ? <Stack /> : ''}
      {openedSection === 'works' ? <Works /> : ''} */}
        </main>
        {openedSection === 'bio' ? <Bio images={images} screenWidth={screenWidth} scrollbarWidth={scrollbarWidth} /> : ''}
      <Footer />
      </TranslationContext.Provider>
    </>
  );
}

export default App;
