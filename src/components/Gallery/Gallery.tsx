import React, { useContext, useState, useEffect, ReactElement } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { TranslationContext } from "../../contexts/translationContext";
import { completeSliderArray } from "../../utils/helpers.js";
import { GALLERY } from "../../utils/consts.js";
import {
  GalleryProps,
  GalleryTextItem,
  TranslationItem,
} from "../../utils/types";
import Slider from "../Slider/Slider";
import Sprite from "../Sprite/Sprite";
import RunnerText from "../RunnerText/RunnerText";
import reload from "../../images/icons/reload.svg";
import fullscreen from "../../images/icons/fullscreen.svg";
import fullscreenClose from "../../images/icons/fullscreen_exit.svg";
import "./Gallery.css";

function Gallery(props: GalleryProps): ReactElement {
  const translation = useContext(TranslationContext);
  const [styles, setStyles] = useState<TranslationItem[]>([]);
  const [isFullscreenOpen, setFullscreenOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isSlidesRestarted, setSlidesRestarted] = useState(false);
  const [width, setWidth] = useState(props.width - props.scrollbarWidth);
  const [slidePos, setSlidePos] = useState<number | null>(null);

  const FS = useFullScreenHandle();

  const stylesArray = JSON.parse(JSON.stringify(styles));

  useEffect(() => {
    if (isFullscreenOpen) {
      setWidth(props.width);
    } else {
      setWidth(props.width - props.scrollbarWidth);
    }
  }, [isFullscreenOpen, props.width, props.height, props.scrollbarWidth]);

  function setStyle(style: TranslationItem) {
    let arr = JSON.parse(JSON.stringify(styles));
    arr = arr.map(() => style);
    setStyles(arr);
  }

  function stopAutoSlide() {
    setPaused(true);
  }

  function restartAutoSlide() {
    setSlidesRestarted(true);
  }

  function resetPaused() {
    setPaused(false);
  }

  function toggleFullScreen() {
    if (!isFullscreenOpen) {
      FS.enter();
    } else {
      FS.exit();
      props.scrollToElement();
    }
    setFullscreenOpen(!isFullscreenOpen);
  }

  const images = completeSliderArray(props.images.gallery.slice(), 1);
  const titles = completeSliderArray(
    (GALLERY as GalleryTextItem)[props.lang].slice(),
    1
  );
  const temporaryArray: TranslationItem[] = [];
  const imagesSlides = images.map((item, index) => {
    if (!stylesArray[index]) {
      temporaryArray.push({ display: "flex" });
      setStyles(temporaryArray);
    }

    return (
      <div
        className="Gallery__slider"
        key={`gallery-${index}`}
        style={stylesArray[index]}
        title={(titles as string[])[index]}
      >
        <div
          className="Gallery__slide"
          style={
            isFullscreenOpen ? { height: "100vh", maxHeight: "100vh" } : {}
          }
        >
          <RunnerText
            data={(titles as string[])[index]}
            slidePos={slidePos}
            num={index}
            shift={width}
            isMobile={props.isMobile}
          />
          <img
            src={(item as HTMLImageElement).src}
            className="Gallery__image"
            alt={(titles as string[])[index]}
            style={
              isFullscreenOpen ? { height: "100vh", maxHeight: "100vh" } : {}
            }
          />
        </div>
      </div>
    );
  });

  return (
    <section className="Gallery" ref={props.scrollRef}>
      <FullScreen handle={FS}>
        <div className="Gallery__container">
          <Sprite
            class="Gallery__FS-button"
            src={!isFullscreenOpen ? fullscreen : fullscreenClose}
            click={toggleFullScreen}
            id={!isFullscreenOpen ? "fullscreen" : "fullscreenClose"}
            width="5vmin"
            height="5vmin"
            title={
              !isFullscreenOpen
                ? translation?.fullscreen
                : translation?.fullscreenClose
            }
          />
          {slidePos === imagesSlides.length - 2 ? (
            <Sprite
              class="Gallery__restart-button"
              src={reload}
              click={restartAutoSlide}
              id="reload"
              width="5vmin"
              height="5vmin"
              title={translation?.reload}
            />
          ) : (
            ""
          )}
          <Slider
            disabled={true}
            takeData={true}
            isFinite={true}
            unit="px"
            limit={1}
            shift={width}
            interval={6000}
            slides={imagesSlides}
            paused={paused}
            restarted={isSlidesRestarted}
            setSlidePos={setSlidePos}
            setStyle={setStyle}
            setPaused={stopAutoSlide}
            resetPaused={resetPaused}
            setRestarted={setSlidesRestarted}
          />
        </div>
      </FullScreen>
    </section>
  );
}

export default Gallery;
