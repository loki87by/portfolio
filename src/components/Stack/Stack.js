import React, { useContext, useState } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { completeSliderArray } from "../../utils/helpers.js";
import { STACK, SOFT } from "../../utils/consts.js";
import Slider from "../Slider/Slider";
import "./Stack.css";

function Stack(props) {
  const translation = useContext(TranslationContext);
  const [softStyles, setSoftStyles] = useState([]);
  const [stackStyles, setStackStyles] = useState([]);
  const [softPaused, setSoftPaused] = useState(false);
  const [stackPaused, setStackPaused] = useState(false);

  let softStylesArray = JSON.parse(JSON.stringify(softStyles));
  let stackStylesArray = JSON.parse(JSON.stringify(stackStyles));

  function setSoftStyle(style) {
    let arr = JSON.parse(JSON.stringify(softStyles));
    arr = arr.map(() => style);
    setSoftStyles(arr);
  }

  function setStackStyle(style) {
    let arr = JSON.parse(JSON.stringify(stackStyles));
    arr = arr.map(() => style);
    setStackStyles(arr);
  }

  function stopSoftAutoSlide() {
    setSoftPaused(true);
  }

  function stopStackAutoSlide() {
    setStackPaused(true);
  }

  function restartSoftAutoSlide() {
    setSoftPaused(false);
  }

  function restartStackAutoSlide() {
    setStackPaused(false);
  }

  const softImages = completeSliderArray(props.images.soft.slice(), 5);
  const softTitles = completeSliderArray(SOFT.slice(), 5);
  const temporarySoftArray = [];
  const softImagesSlides = softImages.map((item, index) => {
    if (!softStylesArray[index]) {
      temporarySoftArray.push({ display: "flex" });
      setSoftStyles(temporarySoftArray);
    }

    return (
      <div
        className="Stack__soft"
        key={`soft-${index}`}
        style={softStylesArray[index]}
        title={softTitles[index]}
        onClick={stopSoftAutoSlide}
      >
        <img src={item.src} className="Stack__soft-image" alt="img" />
      </div>
    );
  });
  const stackImages = completeSliderArray(props.images.stack.slice(), 5);
  const stackTitles = completeSliderArray(STACK.slice(), 5);
  const temporaryStackArray = [];
  const stackImagesSlides = stackImages.map((item, index) => {
    if (!stackStylesArray[index]) {
      temporaryStackArray.push({ display: "flex" });
      setStackStyles(temporaryStackArray);
    }

    return (
      <div
        className="Stack__soft"
        key={`stack-${index}`}
        style={stackStylesArray[index]}
        title={stackTitles[index]}
        onClick={stopStackAutoSlide}
      >
        <img src={item.src} className="Stack__soft-image" alt="img" />
      </div>
    );
  });

  return (
    <section className="Stack" ref={props.scrollRef}>
      <h2 className="Stack__title">{translation.skills}:</h2>
      <h3 className="Stack__subtitle">{translation.soft}:</h3>
      <div className="Stack__container">
        <Slider
          unit="%"
          limit={5}
          shift={125}
          interval={5000}
          slides={softImagesSlides}
          paused={softPaused}
          setStyle={setSoftStyle}
          setPaused={stopSoftAutoSlide}
          resetPaused={restartSoftAutoSlide}
        />
      </div>
      <h3 className="Stack__subtitle">{translation.stack}:</h3>
      <div className="Stack__container">
        <Slider
          unit="%"
          limit={5}
          shift={125}
          interval={2500}
          slides={stackImagesSlides}
          paused={stackPaused}
          setStyle={setStackStyle}
          setPaused={stopStackAutoSlide}
          resetPaused={restartStackAutoSlide}
        />
      </div>
    </section>
  );
}

export default Stack;
