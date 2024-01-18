/* eslint-disable react-hooks/exhaustive-deps */




//TODO: update slider by sbg configuration -> this updates fix edge slide bugs
// data setted(checked: "!new"), need update that to typescript




import React, { useState, useEffect, ReactElement } from "react";
import { SliderProps } from "../../utils/types";
import arrow from "../../images/icons/arrow.svg";
import "./Slider.css";

function Slider(props: SliderProps): ReactElement {
  const [position, setPosition] = useState(props.limit);
  const [direction, setDirection] = useState(0);
  //!new
  //const [handShifting, setHandShifting] = useState(false);
  //!new

  function toLeft() {
    props.resetPaused();
  //!new
  //setHandShifting(true);
  //!new
    autoLeft();
  }

  function toRight() {
    props.resetPaused();
  //!new
  //setHandShifting(true);
  //!new
    autoRight();
  }

  function autoLeft() {
    setDirection(1);
    const newPosition = position - 1;
    setPosition(newPosition);

    if (props.takeData && props.setSlidePos) {
      props.setSlidePos(newPosition);
    }
  }

  function autoRight() {
    const newPosition = position + 1;
    setDirection(0);
    setPosition(newPosition);

    if (props.takeData && props.setSlidePos) {
      props.setSlidePos(newPosition);
    }
  }

  function toStart() {
    setPosition(props.limit);

    if (props.setSlidePos) {
      props.setSlidePos(props.limit);
    }
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

    if (props.isFinite && props.setRestarted && position === props.limit) {
      props.setRestarted(false);
    }

    if (position >= props.slides.length - props.limit - 1 && direction === 0) {
      if (props.isFinite) {
        props.setPaused();
      } else {
        const shiftingPosition =
          position - (props.slides.length - props.limit * 2);
        const timer = setTimeout(() => {
          
  //!new replace next:
          setPosition(shiftingPosition);

          for (let i = 0; i < props.slides.length; i++) {
            props.setStyle({
              transition: "none",
              transform: `translateX(-${props.shift * shiftingPosition}${
                props.unit
              })`,
            });
          }
  //!new
  //to this:
   /*     const style = props.style.slice();

        for (let i = 0; i < props.slides.length; i++) {
          style[i] = {
            transition: "none",
            transform: `translateX(-${props.shift * shiftingPosition}${
              props.unit
            })`,
          };
        }
        props.setStyle(style);
        setPosition(shiftingPosition);
        setHandShifting(false); */
  //!new
        }, 10 /* !new replace to: props.interval / (2 * handShifting ? 5 : 1)*/);

        return () => {
          clearTimeout(timer);
  //!new
  //const style = props.style.slice();
  //!new

          for (let i = 0; i < props.slides.length; i++) {
            //!new replace next:
            props.setStyle({
              transform: `translateX(-${props.shift * shiftingPosition}${
                props.unit
              })`,
            });
          }
  //!new
            //to this:
  /*style[i] = {
            transform: `translateX(-${props.shift * position}${props.unit})`,
          }; */
  //!new
        };
  //!new
            //to this:
  //props.setStyle(style);
  //!new
      }
    }

    if (position <= props.limit - 1 && direction === 1) {
      const shiftingPosition = props.slides.length - props.limit * 2 + position;
      const timer = setTimeout(() => {
        //!new remove next:
        setPosition(shiftingPosition);
        //!new
        //!new
        //const style = props.style.slice();
        //!new

        for (let i = 0; i < props.slides.length; i++) {
        //!new
        //replace next:
          props.setStyle({
            transition: "none",
            transform: `translateX(-${props.shift * shiftingPosition}${
              props.unit
            })`,
          });
        //!new
        //to this:
         /* style[i] = {
            transition: "none",
            transform: `translateX(-${props.shift * shiftingPosition}${
              props.unit
            })`,
          }; */
        //!new
        }
        //!new
        /* props.setStyle(style);
        setPosition(shiftingPosition);
        setHandShifting(false); */
        //!new
      }, 10/* !new replace to: props.interval / (2 * handShifting ? 5 : 1)*/);

      return () => {
        clearTimeout(timer);
        //!new
        //const style = props.style.slice();
        //!new

        for (let i = 0; i < props.slides.length; i++) {
        //!new
        //replace next:
          props.setStyle({
            transform: `translateX(-${props.shift * shiftingPosition}${
              props.unit
            })`,
          });
        //!new
        //to this:
         /* style[i] = {
            transform: `translateX(-${props.shift * shiftingPosition}${
              props.unit
            })`,
          }; */
        //!new
        }
        //!new
        // props.setStyle(style); 
        //!new
      };
    }

    if (!props.paused) {
      const timer = setTimeout(() => {
        if (direction === 0) {
          autoRight();
        } else {
          autoLeft();
        }
        
        //!new
        // setHandShifting(false);
        //!new
      }, /*!new add next: (direction === 0 && position === 0) ||
          (direction === 1 &&
            position === props.slides.length - props.limit * 2)
          ? props.interval / 2
          : */ props.interval);

      return () => clearTimeout(timer);
    }
  }, [position, direction, props.paused /*!new add next: ,
    props.limit,
    props.interval,
    autoRight,
    autoLeft */]);

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
