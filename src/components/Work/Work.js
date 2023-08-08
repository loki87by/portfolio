import React, { useContext, useState, useEffect } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { STACK } from "../../utils/consts";
import "./Work.css";

function Work(props) {
  const [animationCounter, setAnimationCounter] = useState(1);
  const [stack, setStack] = useState([]);
  const [isAnimationStarted, setAnimationStarted] = useState(false);
  const [background, setBackground] = useState("");

  const translation = useContext(TranslationContext);

  useEffect(() => {
    if (props.images && props.images[`project_${props.data.name}`]) {
      setBackground(props.images[`project_${props.data.name}`][0].src);
    }
  }, [props.images, props.data.name]);

  useEffect(() => {
    if (props.images && props.images.stack) {
      const res = [];
      props.data.stack.forEach((i) => {
        const index = STACK.findIndex((item) => item === i);
        const arr = [];
        arr.push(i);
        arr.push(props.images.stack[index]);
        res.push(arr);
      });
      setStack(res);
    }
  }, [props.data.stack, props.images]);

  useEffect(() => {
    const counter = Math.min(
      props.images[`project_${props.data.name}`].length,
      5
    );

    if (isAnimationStarted) {
      const timeout = setTimeout(() => {
        setBackground(
          props.images[`project_${props.data.name}`][animationCounter].src
        );

        if (animationCounter < counter - 1) {
          setAnimationCounter(animationCounter + 1);
        } else {
          setAnimationCounter(0);
        }
      }, 750);
      return () => clearInterval(timeout);
    }
  }, [animationCounter, isAnimationStarted, props.data.name, props.images]);

  function removeAnimation() {
    setAnimationCounter(1);
    setAnimationStarted(false);
    setBackground(props.images[`project_${props.data.name}`][0].src);
  }

  function widgetSwitcher(evt) {
    props.setWidgetRangeValue(evt.target.value);
    const widget = document.getElementById("weatherWidget");
    widget.classList.toggle("hide-widget");
  }

  return (
    <section className="Work">
      <h3 className="Work__title">{props.data.name}</h3>
      <a className="Work__link" target="blank" href={props.data.src}>
        {props.data.double
          ? `${translation[props.data.firstLinkText]} - ${props.data.src}`
          : props.data.src}
      </a>
      {props.data.double ? (
        <>
          <a className="Work__link" target="blank" href={props.data.secondLink}>
            {translation[props.data.secondLinkText]} - {props.data.secondLink}
          </a>
        </>
      ) : (
        ""
      )}
      <div className="Work__container">
        <div
          style={{
            backgroundImage: `url(${background})`,
          }}
          className={`Work__image ${
            props.data.aspectRatio && "Work__image_horizontal"
          }`}
          onMouseOver={() => {
            if (props.data.animation !== "none") {
              setAnimationStarted(true);
            }
          }}
          onMouseLeave={removeAnimation}
        >
          {props.data.animation === "none" ? (
            ""
          ) : (
            <p className="Work__clue">
              {props.isMobile
                ? translation.clueForAnimationMobile
                : translation.clueForAnimation}
            </p>
          )}
        </div>
        <div className="Work__description">
          <p className="Work__description-text">
            {translation[`${props.data.text}`]}
          </p>
          {props.data.additionally ? (
            <div className="Work__additionally-container">
              <p className="Work__description-text">{translation.turnOf}</p>
              <input
                type="range"
                className={`Work__additionally-range ${
                  props.screenWidth < 758 && "Work__additionally-range_mobile"
                }`}
                value={props.widgetRangeValue}
                min="0"
                max="1"
                onInput={widgetSwitcher}
              />
              <p className="Work__description-text">{translation.turnOn}</p>
            </div>
          ) : (
            ""
          )}
          <div className="Work__stack">
            {stack.map((i) => (
              <img
                className="Work__stack-icon"
                key={`${i[0]}-icon`}
                src={i[1].src}
                title={i[0]}
                alt={i[0]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
