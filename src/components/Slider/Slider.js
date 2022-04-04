/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles/__soft-button/Slider__soft-button.css";
import "./styles/__soft-button/_left/Slider__soft-button_left.css";
import "./styles/__soft-button/_right/Slider__soft-button_right.css";
import "./styles/__soft-button/_image/Slider__soft-button_image.css";
import arrow from "../../images/arrow.svg";

function Slider(props) {
  const [position, setPosition] = React.useState(props.limit);
  const [direction, setDirection] = React.useState(0);

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
  }

  function autoRight() {
    const newPosition = position + 1;
    setDirection(0);
    setPosition(newPosition);
  }

  React.useEffect(() => {
    for (let i = 0; i < props.slides.length; i++) {
      props.setStyle({
        transform: `translateX(${-position * props.shift}${props.unit})`,
      });

      if (props.icons) {
        if (position === 0) {
          props.changeActiveIconClass(
            position + props.icons.length - props.limit
          );
        } else if (position <= props.icons.length) {
          props.changeActiveIconClass(position - props.limit);
        } else {
          props.changeActiveIconClass(position - props.icons.length);
        }
      }
    }

    if (position >= props.slides.length - props.limit - 1 && direction === 0) {
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

  React.useEffect(() => {
    if (props.icons) {
      if (props.targetWorkIcon > position - props.limit) {
        setDirection(0);
      }

      if (props.targetWorkIcon < position - props.limit) {
        setDirection(1);
      }
      setPosition(props.targetWorkIcon + props.limit);
    }
  }, [props.targetWorkIcon]);

  return (
    <>
      <div
        className="Slider__soft-button Slider__soft-button_left"
        onClick={toLeft}
      >
        <svg className="Slider__soft-button_image">
          <use xlinkHref={`${arrow}#soft`}></use>
        </svg>
      </div>
      {props.slides}
      <div
        className="Slider__soft-button Slider__soft-button_right"
        onClick={toRight}
      >
        <svg className="Slider__soft-button_image">
          <use xlinkHref={`${arrow}#soft`}></use>
        </svg>
      </div>
    </>
  );
}

export default Slider;
