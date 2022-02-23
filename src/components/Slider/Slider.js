import React from "react";
import "./styles/__soft-button/Slider__soft-button.css";
import "./styles/__soft-button/_left/Slider__soft-button_left.css";
import "./styles/__soft-button/_right/Slider__soft-button_right.css";
import "./styles/__soft-button/_image/Slider__soft-button_image.css";
import arrow from "../../images/arrow.svg";

// **функционал
function Slider(props) {
  const [position, setPosition] = React.useState(props.limit);
  const [direction, setDirection] = React.useState(0);

  function toLeft() {
    props.setPaused(false);
    autoLeft();
  }

  function toRight() {
    props.setPaused(false);
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
    }

    /*       if (props.icons) {
        if (i === position) {
          if (
            position < props.slides.length - props.limit &&
            position > props.limit - 1
          ) {
            props.icons[i - props.limit].classList.add(props.activeIconClass);
          }
        } else {
          if (i < props.slides.length - props.limit && i > props.limit - 1) {
            props.icons[i - props.limit].classList.remove(
              props.activeIconClass
            );
          }
        }
      }
    } */

    if (position === props.slides.length - props.limit - 1 && direction === 0) {
      /* if (props.icons) {
        props.icons[props.slides.length - (props.limit + position)].classList.add(
          props.activeIconClass
        );
      } */

      if (!props.paused) {
        const timer = setTimeout(() => {
          setPosition(props.limit);
          for (let i = 0; i < props.slides.length; i++) {
            props.setStyle({
              transition: "none",
              transform: `translateX(-${props.shift * props.limit}${
                props.unit
              })`,
            });
          }
        }, props.interval / 2);
        return () => {
          clearTimeout(timer);
          for (let i = 0; i < props.slides.length; i++) {
            props.setStyle({
              transform: `translateX(-${props.shift * props.limit}${
                props.unit
              })`,
            });
          }
        }
      }
    }

    if (position === props.limit - 1 && direction === 1) {
      /* if (props.icons) {
        props.icons[props.icons.length - 1].classList.add(
          props.activeIconClass
        );
      } */

      if (!props.paused) {
        const timer = setTimeout(() => {
          setPosition(props.slides.length - (props.limit + 1));
          for (let i = 0; i < props.slides.length; i++) {
            props.setStyle({
              transition: "none",
              transform: `translateX(-${
                props.shift * (props.slides.length - (props.limit + 1))
              }${props.unit})`,
            });
          }
        }, props.interval / 2);
        return () => {
          clearTimeout(timer);
          for (let i = 0; i < props.slides.length; i++) {
            props.setStyle({
              transform: `translateX(-${
                props.shift * (props.slides.length - (props.limit + 1))
              }${props.unit})`,
            });
          }
        }
      }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, direction]);
  /*

  React.useEffect(() => {
    if (props.icons) {
      function getCurrentSlide(e) {
        let currentIndex;
        props.icons.forEach((item, index) => {
          if (item === e.target) {
            currentIndex = index + position;
          }
        });

        if (currentIndex > props.limit) {
          let q = currentIndex - props.limit;

          for (let i = 0; i < q; i++) {
            setDirection(1);
            changeSlide();
          }
        }

        if (currentIndex < props.limit) {
          let q = props.limit - currentIndex;

          for (let i = 0; i < q; i++) {
            setDirection(0);
            changeSlide();
          }
        }
      }
      props.icons.forEach((item) => {
        item.onClick = { getCurrentSlide };
      });
    }
  }, [props.icons, changeSlide, props.limit, position]); */
  // console.log(props.slides)
  /* if (!props.paused) {
  setTimeout(() => {
    toRight()
  }, props.interval * 2); */

  // }

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
