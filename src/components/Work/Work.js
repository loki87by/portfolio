import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { animationCreator, animationCancel } from "../../utils/animations";
import "./Work.css";
import "./styles/__title/Work__title.css";
import "./styles/__link/Work__link.css";
import "./styles/__container/Work__container.css";
import "./styles/__clue/Work__clue.css";
import "./styles/__description/Work__description.css";
import "./styles/_horizontal/Work_horizontal.css";
import "./styles/__description-text/Work__description-text.css";
import "./styles/_animation/Work_animation_standart.css";
import "./styles/_animation/Work_animation_none.css";
/*
import "./styles/__additionally-range/Work__additionally-range.css";
import "./styles/__additionally-range/_mobile/Work__additionally-range_mobile.css";
import "./styles/widget_disabled.css";
*/

function Work(props) {
  const translation = React.useContext(TranslationContext);
  const images = props.images[`project_${props.name}`].map(
    (image) => image.src
  );

  function addAnimation(event) {
    if (props.animation === "standart") {
      return;
    } else {
      animationCreator(props.animation, images, event.target);
    }
  }

  function removeAnimation(event) {
    animationCancel(images[0], event.target);
  }

  /* function widgetSwitcher(evt) {
    props.setRangeValue(evt.target.value);
    const widget = document.querySelector(".Weather-widget-app");
    console.log(widget);
    widget.classList.toggle("widget_disabled");
  } */

  return (
    <>
      <h3 className="Work__title">
        {props.double
          ? `${translation[props.type]} & ${translation[props.type2]}`
          : ""}
        <br />
        <a className="Work__link" target="blank" href={props.link}>
          {props.double ? `${translation[props.firstLinkText]} - ` : ""}
          {props.link}
        </a>
        {props.double ? (
          <>
            <a className="Work__link" target="blank" href={props.secondLink}>
              {props.double ? translation[props.secondLinkText] : ""} -{" "}
              {props.link}
            </a>
          </>
        ) : (
          ""
        )}
      </h3>
      <div className="Work__container">
        <div
          style={{
            backgroundImage: `url(${images[0]})`,
            animationDuration: props.animationTime,
          }}
          onMouseOver={addAnimation}
          onMouseLeave={removeAnimation}
          className={`Work ${props.aspectRatio && "Work_horizontal"} ${
            props.animation === "standart" && "Work_animation_standart"
          } ${
            (props.animation === "none" ||
              props.animation === "mmg" ||
              props.animation === "gallery" ||
              props.animation === "galleryNg") &&
            "Work_animation_none"
          }`}
        >
          {props.animation === "none" ? (
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
            {translation[`${props.text}`]}
          </p>
          {/* {props.additionally ? (
              <>
                <p className="Work__description-text">{translation.turnOn}</p>
                <input
                  type="range"
                  className={`Work__additionally-range ${ props.width < 850 && "Work__additionally-range_mobile"}`}
                  value={props.rangeValue}
                  min="0"
                  max="1"
                  onInput={widgetSwitcher}
                />
                <p className="Work__description-text">{translation.turnOf}</p>
              </>
            ) : (
              ""
            )} */}
        </div>
      </div>
    </>
  );
}

export default Work;
