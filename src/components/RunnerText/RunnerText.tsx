import React, { useState, useEffect, ReactElement, useRef } from "react";
import { RunnerTextProps } from "../../utils/types";
import "./RunnerText.css";

function RunnerText(props: RunnerTextProps): ReactElement {
  const [currentText, setCurrentText] = useState("");
  const [counter, setCounter] = useState(0);
  /* const [width, setWidth] = useState(0); */

  const curRef = useRef(null);

  useEffect(() => {
    if (
      !props.isSlider ||
      (props.slidePos !== null ? props.slidePos : 1) === props.num
    ) {
      if (counter <= props.data.length) {
        // console.dir(curRef)
        const timer = setTimeout(
          () => {
            setCurrentText(props.data.slice(0, counter));
            setCounter(counter + 1);
            /* setWidth((curRef.current as unknown as HTMLElement).clientWidth) */
          },
          counter === 0 ? props.delay : 3 * counter
        );
        return () => clearTimeout(timer);
      }
    } else {
      setCurrentText("");
      setCounter(0);
    }
  }, [
    counter,
    props.data,
    props.delay,
    props.isSlider,
    props.num,
    props.slidePos,
  ]);

  useEffect(() => {
    if (props.reseted) {
      if (props.reverse) {
        setCounter(1);
      } else {
        setCurrentText("");
        setCounter(0);
      }

      if (props.reset) {
        props.reset(false);
      }
    }
  }, [props]);

  return (
    <p
      ref={curRef}
      className={`RunnerText ${props.isMobile && "RunnerText_mobile"} ${
        props.left && "RunnerText_left"
      } ${props.right && "RunnerText_right"} ${props.reversedFull && "RunnerText_reversedFull"} ${
        props.reverse && `RunnerText_reverse RunnerText_reverse__${props.index}`
      } ${props.reversedWorks && "RunnerText_reversedWorks"}`}
    >
      {currentText}
    </p>
  );
}

export default RunnerText;
