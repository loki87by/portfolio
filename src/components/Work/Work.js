import React, { useContext, useState, useEffect } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { STACK } from "../../utils/consts";
import "./Work.css";

function Work(props) {
  // const [images, setImages] = useState([]);
  const [stack, setStack] = useState([]);
  const [stackSetted, setStackSetted] = useState(false);
  const [background, setBackground] = useState("");

  const translation = useContext(TranslationContext);

  useEffect(() => {
    if (props.images && props.images[`project_${props.data.name}`]) {
      // setImages(props.images[`project_${props.data.name}`])
      setBackground(props.images[`project_${props.data.name}`][0].src);
    }
  }, [props.images, props.data.name]);

  useEffect(() => {
    if (props.images && props.images.stack) {
      const res = []
      props.data.stack.forEach((i) => {
        const index = STACK.findIndex((item) => item === i);
        const arr=[]
        arr.push(i)
        arr.push(
        /*
        if(props.images.stack[index]) {
        const obj = {};
        obj[i] = */ props.images.stack[index])
        console.log(arr);
res.push(arr)
      });
      console.log(res, Object.entries(res).flat());
      setStack(res);

      if (Object.entries(res).flat()) {
        setStackSetted(true);
      }
    }
  }, [props.data.stack, props.images]);

  return (
    <section className="Work">
      <h3 className="Work__title">{props.data.name}</h3>
      <a className="Work__link" target="blank" href={props.data.link}>
        {props.data.double
          ? `${translation[props.data.firstLinkText]} - ${props.data.link}`
          : translation[props.data.firstLinkText]}
      </a>
      {props.data.double ? (
        <>
          <a className="Work__link" target="blank" href={props.data.secondLink}>
            {translation[props.data.secondLinkText]} - {props.data.link}
          </a>
        </>
      ) : (
        ""
      )}
      <div className="Work__container">
        <div
          style={{
            backgroundImage: `url(${background})`,
            /* animationDuration: props.animationTime, */
          }}
          className={`Work__image ${
            props.data.aspectRatio && "Work__image_horizontal"
          }`}
          /* onMouseOver={addAnimation}
          onMouseLeave={removeAnimation}
          className={`Work ${props.aspectRatio && "Work_horizontal"} ${
            props.animation === "standart" && "Work_animation_standart"
          } ${
            (props.animation === "none" ||
              props.animation === "mmg" ||
              props.animation === "gallery" ||
              props.animation === "galleryNg") &&
            "Work_animation_none"
          }`} */
        >
          {/* {props.animation === "none" ? (
            ""
          ) : (
            <p className="Work__clue">
              {props.isMobile
                ? translation.clueForAnimationMobile
                : translation.clueForAnimation}
            </p>
          )} */}
        </div>
        <div className="Work__description">
          <p className="Work__description-text">
            {translation[`${props.data.text}`]}
          </p>
          {/* {props.additionally ? (
            <>
              <p className="Work__description-text">{translation.turnOf}</p>
              <input
                type="range"
                className={`Work__additionally-range ${
                  props.width < 758 && "Work__additionally-range_mobile"
                }`}
                value={props.rangeValue}
                min="0"
                max="1"
                onInput={widgetSwitcher}
              />
              <p className="Work__description-text">{translation.turnOn}</p>
            </>
          ) : (
            ""
          )} */}
          {stackSetted ? (
            <div className="Work__stack">
              {stack.map((i, ind) => (
                <img
                className="Work__stack-icon"
                  key={`${i[0]}-icon`}
                  src={i[1].src}
                  title={i[0]}
                  alt={i[0]}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default Work;
