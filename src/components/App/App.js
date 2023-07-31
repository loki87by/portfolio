import React, { useState, useEffect, useRef } from "react";
import {
  TranslationContext,
  translations,
} from "../../contexts/translationContext";
import { PIC_ARRAY } from "../../consts/pictures";
import Header from "../Header/Header";
import Resume from "../Resume/Resume";
import Bio from "../Bio/Bio";
import Contacts from "../Contacts/Contacts";
import Docs from "../Docs/Docs";
import Stack from "../Stack/Stack";
import Works from "../Works/Works";
import Footer from "../Footer/Footer";
import "../../vendor/normalize.css";
import "./App.css";

function App() {
  const [lang, setLang] = useState("ru");
  const [images, setImages] = useState({});
  const [isInitWidget, setInitWidget] = useState(false);
  const [avaLoaded, setAvaLoaded] = useState(false);
  const [openedSection, setOpenedSection] = useState("");
  const [openedWorks, setOpenedWorks] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  // const [screenHeight, setScreenHeight] = useState(window.screen.height);
  const [dataIsRecorded, setDataRecorded] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
    const [widgetRangeValue, setWidgetRangeValue] = useState(0);
  const Mobile =
    /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent
    );

  const mobileRef = useRef(Mobile);
  const scrollRef = useRef(null);

  function scrollToElement() {
    setTimeout(() => {
      scrollRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      const vmin =
        Math.min(
          document.documentElement.clientHeight,
          document.documentElement.clientWidth
        ) / 100;
      const vmax =
        Math.max(
          document.documentElement.clientHeight,
          document.documentElement.clientWidth
        ) / 100;
      const vw = document.documentElement.clientWidth / 100;
      const headerHeight = Math.ceil(3 * vmin + 5 * vw - vmax);
      window.scrollTo(0, scrollRef.current.offsetTop - headerHeight);
    }, 10);
  }

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
    const entries = Object.entries(PIC_ARRAY);

    for (let i = 0; i < entries.length; i++) {
      new Promise(() => {
        const arr = [];

        for (let j = 0; j < values[i].length; j++) {
          let img = new Image();
          img.src = values[i][j];
          img.onload = function () {
            setDataRecorded(true);
          };

          if (dataIsRecorded) {
            setDataRecorded(false);
          }
          arr.push(img);
        }
        const imagesArray = images || {};
        imagesArray[keys[i]] = arr;
        return imagesArray;
      }).then((res) => {
        setImages(res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  useEffect(() => {
    if (images && images.avatar && images.avatar[0]) {
      setAvaLoaded(true);
    }
  }, [images]);

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
      // setScreenHeight(window.innerHeight);
    }
    window.addEventListener("resize", resizer);
    resizer();

    return () => window.removeEventListener("resize", resizer);
  });

  return (
    <>
      <TranslationContext.Provider value={translations[lang]}>
        <Header setLang={setLang} lang={lang} />
        <main>
          {!avaLoaded ? (
            <p>{translations[lang].welcome}</p>
          ) : (
            <Resume
              isMobile={mobileRef.current}
              lang={lang}
              images={images}
              scrollbarWidth={scrollbarWidth}
              openedWorks={openedWorks}
              setOpenedWorks={setOpenedWorks}
              setOpenedSection={setOpenedSection}
              scrollToElement={scrollToElement}
            />
          )}
        </main>
        {openedSection === "bio" ? (
          <Bio
            scrollRef={openedSection === "bio" ? scrollRef : null}
            images={images}
            openedSection={openedSection}
            screenWidth={screenWidth}
            scrollbarWidth={scrollbarWidth}
          />
        ) : (
          ""
        )}
        {openedSection === "contacts" ? (
          <Contacts
            scrollRef={openedSection === "contacts" ? scrollRef : null}
            openedSection={openedSection}
          />
        ) : (
          ""
        )}
        {openedSection === "docs" ? (
          <Docs
            scrollRef={openedSection === "docs" ? scrollRef : null}
            screenWidth={screenWidth}
            openedSection={openedSection}
          />
        ) : (
          ""
        )}
        {/*
        {openedSection === 'info' ? <Info
          ref={openedSection === 'info' ? scrollRef : null}
          scrollRef={scrollRef}/>
          lang={lang} : ''} */}
        {openedSection === "stack" ? (
          <Stack
            scrollRef={openedSection === "stack" ? scrollRef : null}
            images={images}
          />
        ) : (
          ""
        )}
        {openedSection === "games" ? (
          <Works
            filter="webGame"
            scrollRef={openedSection === "games" ? scrollRef : null}
            images={images}
            isMobile={mobileRef.current}
          />
        ) : (
          ""
        )}
        {openedSection === "servers" ? (
          <Works
            filter="server"
            scrollRef={openedSection === "servers" ? scrollRef : null}
            images={images}
            isMobile={mobileRef.current}
          />
        ) : (
          ""
        )}
        {openedSection === "sites" ? (
          <Works
            filter="landingPage"
            scrollRef={openedSection === "sites" ? scrollRef : null}
            images={images}
            isMobile={mobileRef.current}
          />
        ) : (
          ""
        )}
        {openedSection === "servises" ? (
          <Works
            filter="webService"
            scrollRef={openedSection === "servises" ? scrollRef : null}
            images={images}
            isMobile={mobileRef.current}
          />
        ) : (
          ""
        )}
        {openedSection === "social" ? (
          <Works
            filter="social"
            scrollRef={openedSection === "social" ? scrollRef : null}
            images={images}
            isMobile={mobileRef.current}
          />
        ) : (
          ""
        )}
        {openedSection === "works" ? (
          <Works filter="other" images={images} isMobile={mobileRef.current}
          screenWidth={screenWidth}
           widgetRangeValue={widgetRangeValue} setWidgetRangeValue={setWidgetRangeValue} />
        ) : (
          ""
        )}
        <Footer />
      </TranslationContext.Provider>
    </>
  );
}

export default App;
