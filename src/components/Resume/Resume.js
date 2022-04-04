import React from "react";
import { WORKS } from "../../consts/works";
import { STACK } from "../../utils/consts.js";
import { completeSliderArray } from "../../utils/helpers.js";
import { TranslationContext } from "../../contexts/translationContext";
import Description from "../Description/Description";
import Slider from "../Slider/Slider";
import Works from "../Works/Works";
import Work from "../Work/Work";
import Certificate from "../Certificate/Certificate";
import "./Resume.css";
import "../Works/styles/__slider-container/Works__slider-container.css";
import "./styles/__openWorks-container/Resume__openWorks-container.css";
import "./styles/__openWorks-container/_open/Resume__openWorks-container_open.css";
import "./styles/__slider-icons/Works__slider-icons.css";
import "./styles/__slider-icon/Works__slider-icon.css";
import "./styles/__slider-icon/_active/Works__slider-icon_active.css";
import "./styles/__popup/Resume__popup.css";
import "./styles/__popup/_opened/Resume__popup_opened.css";
import "./styles/__certificate/Resume__certificate.css";
import "./styles/__certificate-close/Resume__certificate-close.css";

function Resume(props) {
  const [screenWidth, setScreenWidth] = React.useState(window.screen.width);
  const [isCertificateOpen, setCertificateOpen] = React.useState(false);
  const [certificateType, setCertificateType] = React.useState(null);
  const [softStyles, setSoftStyles] = React.useState([]);
  const [pausedSoftSlider, setPausedSoftSlider] = React.useState(false);
  const [worksStyles, setWorksStyles] = React.useState([]);
  const [pausedWorksSlider, setPausedWorksSlider] = React.useState(false);
  const [selectedStack, setSelectedStack] = React.useState(STACK);
  const [worksIsOpen, setWorksOpen] = React.useState(false);
  const [currentWorks, setCurrentWorks] = React.useState([]);
  const [widgetRangeValue, setWidgetRangeValue] = React.useState(0);
  const [workIconsStyles, setWorkIconsStyles] = React.useState([]);
  const [targetWorkIcon, setTargetWorkIcon] = React.useState(null);

  const translation = React.useContext(TranslationContext);

  const softImages = completeSliderArray(props.images.soft.slice(), 5);
  const worksListArray = completeSliderArray(WORKS.slice(), 1);
  const temporarySoftArray = [];
  const temporaryWorksArray = [];
  const temporaryIconsArray = [];

  let softStylesArray = JSON.parse(JSON.stringify(softStyles));
  let worksStyleArray = JSON.parse(JSON.stringify(worksStyles));
  let iconsStyleArray = JSON.parse(JSON.stringify(workIconsStyles));
  let imagesObject = {};

  function stopSoftAutoSlide() {
    setPausedSoftSlider(true);
  }

  function restartSoftAutoSlide() {
    setPausedSoftSlider(false);
  }

  function stopWorksAutoSlide() {
    setPausedWorksSlider(true);
  }

  function restartWorksAutoSlide() {
    setPausedWorksSlider(false);
  }

  React.useEffect(() => {
    if (!pausedWorksSlider) {
      setWorksOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pausedWorksSlider]);

  const worksListSlides = worksListArray.map((item, index) => {
    if (!worksStyleArray[index]) {
      temporaryWorksArray.push({ display: "flex" });
      setWorksStyles(temporaryWorksArray);
    }

    return (
      <Works
        key={`worksListSlide-${item.type}-${index}`}
        selectedStack={selectedStack}
        worksStyles={worksStyles}
        worksIsOpen={worksIsOpen}
        currentWorks={currentWorks}
        style={worksStyles[index]}
        item={item}
        index={index}
        images={props.images}
        setSelectedStack={setSelectedStack}
        setPaused={stopWorksAutoSlide}
        resetPaused={restartWorksAutoSlide}
        setWorksOpen={setWorksOpen}
        setCurrentWorks={setCurrentWorks}
      />
    );
  });

  function replaceIconActiveClass(numb) {
    const arr = [];
    for (let i = 0; i < WORKS.length; i++) {
      if (i !== numb) {
        arr.push("Works__slider-icon");
      } else {
        arr.push("Works__slider-icon Works__slider-icon_active");
      }
    }
    setWorkIconsStyles(arr);
  }

  const workSlideIcons = WORKS.map((item, index) => {
    if (!iconsStyleArray[index]) {
      temporaryIconsArray.push("Works__slider-icon");
      setWorkIconsStyles(temporaryIconsArray);
    }

    return (
      <div
        key={`icon-${index}`}
        id={`icon-${index}`}
        title={translation[item.type]}
        className={workIconsStyles[index]}
        onClick={getCurrentSlide}
      ></div>
    );
  });

  function getCurrentSlide(e) {
    let currentIndex = +e.target.id.replace("icon-", "");
    setTargetWorkIcon(currentIndex);
  }

  const softImagesSlides = softImages.map((item, index) => {
    if (!softStylesArray[index]) {
      temporarySoftArray.push({ display: "flex" });
      setSoftStyles(temporarySoftArray);
    }

    return (
      <div
        className="Description__soft"
        key={`soft-${index}`}
        style={softStylesArray[index]}
        onClick={stopSoftAutoSlide}
      >
        <img src={item.src} className="Description__soft-image" alt="img" />
      </div>
    );
  });

  function setSoftStyle(style) {
    let arr = JSON.parse(JSON.stringify(softStyles));
    arr = arr.map(() => style);
    setSoftStyles(arr);
  }

  function setWorkStyle(style) {
    let arr = JSON.parse(JSON.stringify(worksStyles));
    arr = arr.map(() => style);
    setWorksStyles(arr);
  }

  function closeCertificate() {
    setCertificateOpen(false);
  }

  function handleEscClose(e) {
    if (e.key === "Escape") {
      closeCertificate();
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleEscClose);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  });

  React.useEffect(() => {
    function resizer() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", resizer);
    resizer();

    return () => window.removeEventListener("resize", resizer);
  });

  for (let i = 1; i < props.images.length - 4; i++) {
    const source = props.images[i].src;
    const imageHash = source.match(/\w*-?\w*\.\w*\.jpg/g);
    const imageFullName = imageHash[0].split(".")[0];
    const imageNameTitle = imageFullName.replace(/-\w*/, "");
    const imageNameIndex = imageFullName.match(/-\d*/)[0];
    const imageName = imageNameTitle + imageNameIndex;

    if (!imagesObject[imageName]) {
      imagesObject[imageName] = [];
    }
    imagesObject[imageName].push(source);
  }

  return (
    <section className="Resume">
      <Description
        screenWidth={screenWidth}
        slides={softImagesSlides}
        paused={pausedSoftSlider}
        selectedStack={selectedStack}
        lang={props.lang}
        images={props.images}
        isMobile={props.isMobile}
        imagesIsLoad={props.imagesIsLoad}
        scrollbarWidth={props.scrollbarWidth}
        setCertificateOpen={setCertificateOpen}
        setCertificateType={setCertificateType}
        setStyle={setSoftStyle}
        setPaused={stopSoftAutoSlide}
        resetPaused={restartSoftAutoSlide}
        setSelectedStack={setSelectedStack}
      />
      <section className="Works__slider-container">
        <Slider
          unit="%"
          limit={1}
          shift={(100 / 96) * 100}
          interval={10000}
          icons={workSlideIcons}
          paused={pausedWorksSlider}
          slides={worksListSlides}
          targetWorkIcon={targetWorkIcon}
          setStyle={setWorkStyle}
          setPaused={stopWorksAutoSlide}
          resetPaused={restartWorksAutoSlide}
          changeActiveIconClass={replaceIconActiveClass}
        />
      </section>
      {worksIsOpen ? (
        <section
          className={`Resume__openWorks-container ${
            worksIsOpen && "Resume__openWorks-container_open"
          }`}
        >
          {currentWorks.map((item, index) => {
            return (
              <Work
                key={`work-${index}`}
                width={screenWidth}
                rangeValue={widgetRangeValue}
                link={item.src}
                index={index}
                type={item.type}
                double={item.double}
                firstLinkText={item.firstLinkText}
                secondLinkText={item.secondLinkText}
                secondLink={item.secondLink}
                type2={item.type2}
                name={item.name}
                images={props.images}
                animationTime={item.animationTime}
                animation={item.animation}
                text={item.text}
                isMobile={props.isMobile}
                aspectRatio={item.aspectRatio}
                additionally={item.additionally}
                setRangeValue={setWidgetRangeValue}
              />
            );
          })}
        </section>
      ) : (
        <section className="Works__slider-icons">{workSlideIcons}</section>
      )}
      <section
        className={`Resume__popup ${
          isCertificateOpen && "Resume__popup_opened"
        }`}
      >
        <Certificate
          type={certificateType}
          isCertificateOpen={isCertificateOpen}
          screenWidth={props.screenWidth}
          lang={props.lang}
          setCertificateOpen={setCertificateOpen}
          setCertificateType={setCertificateType}
          closeCertificate={closeCertificate}
        />
      </section>
    </section>
  );
}

export default Resume;
