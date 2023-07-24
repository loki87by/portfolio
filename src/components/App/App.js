import React, {
  useState,
  useEffect,
  useRef
} from "react";
import {
  TranslationContext,
  translations,
} from "../../contexts/translationContext";
import { PIC_ARRAY } from "../../consts/pictures"; /*
import { STACK } from "../../utils/consts.js"; */
import Header from "../Header/Header";
import Resume from "../Resume/Resume";
import Bio from "../Bio/Bio";
import Contacts from "../Contacts/Contacts";
import Docs from "../Docs/Docs";
import Stack from "../Stack/Stack";
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
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  /* const [imagesIsLoad, setImagesIsLoad] = React.useState(false); */
  const [dataIsRecorded, setDataRecorded] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);/*
  const [softStyles, setSoftStyles] = React.useState([]); *//*
  const [pausedSoftSlider, setPausedSoftSlider] = React.useState(false); */
  //const [selectedStack, setSelectedStack] = React.useState(STACK);
  const Mobile =
    /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      navigator.userAgent
    );

  const mobileRef = useRef(Mobile);
  const scrollRef = useRef(null);
  /* const softImages = useCallback(() => {
    console.log(images)
    if (images && images.soft) {
      return completeSliderArray(images.soft.slice(), 5);
    }
  }, [images]); *//*
  const temporarySoftArray = useMemo(() => {
    return [];
  }, []); *//*
  let softStylesArray = JSON.parse(JSON.stringify(softStyles)); */

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
  }/*

  function setSoftStyle(style) {
    let arr = JSON.parse(JSON.stringify(softStyles));
    arr = arr.map(() => style);
    setSoftStyles(arr);
  } *//*

  function stopSoftAutoSlide() {
    setPausedSoftSlider(true);
  }

  function restartSoftAutoSlide() {
    setPausedSoftSlider(false);
  } *//*

  const softImagesSlides = useCallback(() => {
    console.log(softImages)
    if (softImages) {
      softImages.map((item, index) => {
        if (!softStylesArray[index]) {
          temporarySoftArray.push({ display: "flex" });
          setSoftStyles(temporarySoftArray);

          return (
            <div
              className="Description__soft"
              key={`soft-${index}`}
              style={softStylesArray[index]}
              onClick={stopSoftAutoSlide}
            >
              <img
                src={item.src}
                className="Description__soft-image"
                alt="img"
              />
            </div>
          );
        } else {
          return null;
        }
      });
    }
  }, [softImages, softStylesArray, temporarySoftArray]); */

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
            lang={lang}
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
          scrollRef={openedSection === "stack" ? scrollRef : null}/*
            slides={softImagesSlides} */
            lang={lang}
            /* paused={pausedSoftSlider} */ /*
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack} */
            images={images}
            /* setPaused={stopSoftAutoSlide}
            resetPaused={restartSoftAutoSlide} */
          />
        ) : (
          ""
        )}
        {/*
      {openedSection === 'works' ? <Works /> : ''} */}
        <Footer />
      </TranslationContext.Provider>
    </>
  );
}

export default App;
