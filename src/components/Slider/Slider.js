/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Slider.css";
import arrow from "../../images/icons/arrow.svg";

function Slider(props) {
  const [position, setPosition] = useState(props.limit);
  const [direction, setDirection] = useState(0);

  function toLeft() {
    props.resetPaused();
    autoLeft();
  }

  function toRight() {
    props.resetPaused();
    autoRight();
  }

  function autoLeft() {
    setDirection(1);
    const newPosition = position - 1;
    setPosition(newPosition);

    if (props.takeData) {
      props.setSlidePos(newPosition);
    }
  }

  function autoRight() {
    const newPosition = position + 1;
    setDirection(0);
    setPosition(newPosition);

    if (props.takeData) {
      props.setSlidePos(newPosition);
    }
  }

  function toStart() {
    setPosition(props.limit);
    props.setSlidePos(props.limit);
    props.resetPaused();
  }

  useEffect(() => {
    if (props.restarted) {
      toStart();
    }
  }, [props.restarted]);

  useEffect(() => {
    for (let i = 0; i < props.slides.length; i++) {
      props.setStyle({
        transform: `translateX(${-position * props.shift}${props.unit})`,
      });
    }

    if (props.isFinite && position === props.limit) {
      props.setRestarted(false);
    }

    if (position >= props.slides.length - props.limit - 1 && direction === 0) {
      if (props.isFinite) {
        props.setPaused();
      } else {
        const shiftingPosition =
          position - (props.slides.length - props.limit * 2);
        const timer = setTimeout(() => {
          setPosition(shiftingPosition);

          for (let i = 0; i < props.slides.length; i++) {
            props.setStyle({
              transition: "none",
              transform: `translateX(-${props.shift * shiftingPosition}${
                props.unit
              })`,
            });
          }
        }, 10);

        return () => {
          clearTimeout(timer);

          for (let i = 0; i < props.slides.length; i++) {
            props.setStyle({
              transform: `translateX(-${props.shift * shiftingPosition}${
                props.unit
              })`,
            });
          }
        };
      }
    }

    if (position <= props.limit - 1 && direction === 1) {
      const shiftingPosition = props.slides.length - props.limit * 2 + position;
      const timer = setTimeout(() => {
        setPosition(shiftingPosition);

        for (let i = 0; i < props.slides.length; i++) {
          props.setStyle({
            transition: "none",
            transform: `translateX(-${props.shift * shiftingPosition}${
              props.unit
            })`,
          });
        }
      }, 10);

      return () => {
        clearTimeout(timer);

        for (let i = 0; i < props.slides.length; i++) {
          props.setStyle({
            transform: `translateX(-${props.shift * shiftingPosition}${
              props.unit
            })`,
          });
        }
      };
    }

    if (!props.paused) {
      const timer = setTimeout(() => {
        if (direction === 0) {
          autoRight();
        } else {
          autoLeft();
        }
      }, props.interval);

      return () => clearTimeout(timer);
    }
  }, [position, direction, props.paused]);

  return (
    <>
      {props.disabled ? (
        ""
      ) : (
        <div className="Slider__button Slider__button_left" onClick={toLeft}>
          <svg className="Slider__button_image">
            <use href={`${arrow}#soft`}></use>
          </svg>
        </div>
      )}
      {props.slides}
      {props.disabled ? (
        ""
      ) : (
        <div className="Slider__button Slider__button_right" onClick={toRight}>
          <svg className="Slider__button_image">
            <use href={`${arrow}#soft`}></use>
          </svg>
        </div>
      )}
    </>
  );
}

export default Slider;
