import React, { useContext, useState, ReactElement } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { completeSliderArray } from "../../utils/helpers";
import { STACK, SOFT } from "../../utils/consts";
import { StackProps, TranslationItem } from "../../utils/types";
import Preloader from "../Preloader/Preloader";
import Slider from "../Slider/Slider";
import "./Stack.css";

function Stack(props: StackProps): ReactElement {
  const translation = useContext(TranslationContext);
  const [softStyles, setSoftStyles] = useState<TranslationItem[]>([]);
  const [stackStyles, setStackStyles] = useState<TranslationItem[]>([]);
  const [softPaused, setSoftPaused] = useState(false);
  const [stackPaused, setStackPaused] = useState(false);

  const softStylesArray = JSON.parse(JSON.stringify(softStyles));
  const stackStylesArray = JSON.parse(JSON.stringify(stackStyles));

  function setSoftStyle(style: TranslationItem) {
    let arr = JSON.parse(JSON.stringify(softStyles));
    arr = arr.map(() => style);
    setSoftStyles(arr);
  }

  function setStackStyle(style: TranslationItem) {
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
  const temporarySoftArray: TranslationItem[] = [];
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
        title={(softTitles as string[])[index]}
        onClick={stopSoftAutoSlide}
      >
        <img
          src={(item as HTMLImageElement).src}
          className="Stack__soft-image"
          alt="img"
        />
      </div>
    );
  });
  const stackImages = completeSliderArray(props.images.stack.slice(), 5);
  const stackTitles = completeSliderArray(STACK.slice(), 5);
  const temporaryStackArray: TranslationItem[] = [];
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
        title={(stackTitles as string[])[index]}
        onClick={stopStackAutoSlide}
      >
        <img
          src={(item as HTMLImageElement).src}
          className="Stack__soft-image"
          alt="img"
        />
      </div>
    );
  });

  return (
    <section className="Stack" ref={props.scrollRef}>
      <h2 className="Stack__title">{translation?.skills}:</h2>
      <h3 className="Stack__subtitle">{translation?.soft}:</h3>
      {props.images.stack ? (
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
      ) : (
        <Preloader />
      )}
      <h3 className="Stack__subtitle">{translation?.stack}:</h3>
      {props.images.soft ? (
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
      ) : (
        <Preloader />
      )}
    </section>
  );
}

export default Stack;
