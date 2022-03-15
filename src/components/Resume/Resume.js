import React from "react";
import close from "../../images/close.png";
import certificateRu from "../../media/Акулич.pdf";
import certificateEn from "../../media/20202WD00196.pdf";
import epamCertificate from "../../media/ds8jpv3n.pdf";
import { WORKS } from "../../consts/works";
import { STACK } from "../../utils/consts.js";
import { completeSliderArray } from "../../utils/helpers.js";
import Description from "../Description/Description";
import Slider from "../Slider/Slider";
import Works from "../Works/Works";
import Work from "../Work/Work";
import "./Resume.css";
import "../Works/styles/__slider-container/Works__slider-container.css";
import "./styles/__openWorks-container/Resume__openWorks-container.css";
import "./styles/__openWorks-container/_open/Resume__openWorks-container_open.css";
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

  let imagesObject = {};
  const softImages = completeSliderArray(props.images.soft.slice(), 5);
  const worksListArray = completeSliderArray(WORKS.slice(), 1);
  let softStylesArray = JSON.parse(JSON.stringify(softStyles));
  let worksStyleArray = JSON.parse(JSON.stringify(worksStyles));
  const temporarySoftArray = [];
  const temporaryWorksArray = [];

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
        style={worksStyles[index]}
        item={item}
        index={index}
        selectedStack={selectedStack}
        setSelectedStack={setSelectedStack}
        setPaused={stopWorksAutoSlide}
        resetPaused={restartWorksAutoSlide}
        images={props.images}
        worksStyles={worksStyles}
        worksIsOpen={worksIsOpen}
        setWorksOpen={setWorksOpen}
        setCurrentWorks={setCurrentWorks}
        currentWorks={currentWorks}
      />
    );
  });

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

  React.useEffect(function () {
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
        images={props.images}
        isMobile={props.isMobile}
        setCertificateOpen={setCertificateOpen}
        setCertificateType={setCertificateType}
        imagesIsLoad={props.imagesIsLoad}
        screenWidth={screenWidth}
        slides={softImagesSlides}
        setStyle={setSoftStyle}
        paused={pausedSoftSlider}
        setPaused={stopSoftAutoSlide}
        resetPaused={restartSoftAutoSlide}
        selectedStack={selectedStack}
        setSelectedStack={setSelectedStack}
        scrollbarWidth={props.scrollbarWidth}
      />
      <section className="Works__slider-container">
        <Slider
          slides={worksListSlides}
          setStyle={setWorkStyle}
          shift={(100 / 96) * 100}
          unit="%"
          limit={1}
          paused={pausedWorksSlider}
          setPaused={stopWorksAutoSlide}
          resetPaused={restartWorksAutoSlide}
          interval={10000}
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
                width={screenWidth}
                isMobile={props.isMobile}
                aspectRatio={item.aspectRatio}
                additionally={item.additionally}
                setRangeValue={setWidgetRangeValue}
                rangeValue={widgetRangeValue}
              />
            );
          })}
        </section>
      ) : (
        ""
      )}
      <section
        className={`Resume__popup ${
          isCertificateOpen && "Resume__popup_opened"
        }`}
      >
        <iframe
          className="Resume__certificate"
          title="sertify"
          allowtransparency="true"
          height="100%"
          width="100%"
          src={
            certificateType === "yandex"
              ? props.lang === "ru"
                ? `${certificateRu}#zoom=${screenWidth / 20}`
                : `${certificateEn}#zoom=${screenWidth / 20}`
              : `${epamCertificate}#zoom=${screenWidth / 18}`
          }
        ></iframe>
        {isCertificateOpen ? (
          <button
            type="button"
            className="Resume__certificate-close"
            onClick={closeCertificate}
          >
            <img alt="close" src={close} />
          </button>
        ) : (
          ""
        )}
      </section>
    </section>
  );
}

export default Resume;
