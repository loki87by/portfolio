import React, { useState, useEffect } from "react";
import "./RunnerText.css";

function RunnerText(props) {
  const [currentText, setCurrentText] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if ((props.slidePos !== null ? props.slidePos : 1) === props.num) {
      if (counter <= props.data.length) {
        const timer = setTimeout(
          () => {
            setCurrentText(props.data.slice(0, counter));
            setCounter(counter + 1);
          },
          counter === 0 ? 650 : 3 * counter
        );
        return () => clearTimeout(timer);
      }
    } else {
      setCurrentText("");
      setCounter(0);
    }
  }, [counter, props.data, props.index, props.num, props.slidePos]);

  return <p className={`RunnerText ${props.isMobile && "RunnerText_mobile"}`}>{currentText}</p>;
}

export default RunnerText;
