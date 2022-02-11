import React from "react";
import "./Hand.css";
import "./Hand_left.css";
import "./Hand_right.css";
import "./styles/finger.css";
import "./styles/_close/finger_close.css";
import "./styles/_bigLeft/finger_bigLeft.css";
import "./styles/_bigLeft/finger_bigLeft_open.css";
import "./styles/_bigRight/finger_bigRight.css";
import "./styles/_bigRight/finger_bigRight_open.css";
import "./styles/leftPointing.css";
import "./styles/rightPointing.css";
import "./styles/leftCentral.css";
import "./styles/rightCentral.css";
import "./styles/leftUnnamed.css";
import "./styles/rightUnnamed.css";
import "./styles/leftPinky.css";
import "./styles/rightPinky.css";
import pinkyRight from "../../images/hands/right/pinky.png";
import pinkyLeft from "../../images/hands/left/pinky.png";
import unnamedRight from "../../images/hands/right/unnamed.png";
import unnamedLeft from "../../images/hands/left/unnamed.png";
import centralRight from "../../images/hands/right/central.png";
import centralLeft from "../../images/hands/left/central.png";
import pointingRight from "../../images/hands/right/pointing.png";
import pointingLeft from "../../images/hands/left/pointing.png";
import bigFingerRight from "../../images/hands/right/big.png";
import bigFingerLeft from "../../images/hands/left/big.png";
import handRight from "../../images/hands/right/hand.png";
import handLeft from "../../images/hands/left/hand.png";

const fingersData = [
  {
    leftClass: "leftPointing",
    rightClass: "rightPointing",
    leftSource: pointingLeft,
    rightSource: pointingRight,
  },
  {
    leftClass: "leftCentral",
    rightClass: "rightCentral",
    leftSource: centralLeft,
    rightSource: centralRight,
  },
  {
    leftClass: "leftUnnamed",
    rightClass: "rightUnnamed",
    leftSource: unnamedLeft,
    rightSource: unnamedRight,
  },
  {
    leftClass: "leftPinky",
    rightClass: "rightPinky",
    leftSource: pinkyLeft,
    rightSource: pinkyRight,
  },
];

function Hand(props) {
  let dataArray = props.data.map((i) => +i);

  function bigFinger(num) {
    return (
      <img
        src={props.left ? bigFingerLeft : bigFingerRight}
        alt={`big ${props.left ? "left" : "right"} finger`}
        className={
          props.left
            ? `finger finger_bigLeft ${num > 0 && "finger_bigLeft_open"}`
            : `finger finger_bigRight ${num > 0 && "finger_bigRight_open"}`
        }
      />
    );
  }

  function fingersMapper() {
    return (
      <>
        {dataArray.map((el, index) => {
          if ((index === 0 && props.left) || (index === 4 && !props.left)) {
            return "";
          } else {
            if (props.left) {
              return (
                <img
                  key={`left-${index}`}
                  src={fingersData[index - 1].leftSource}
                  className={`finger ${fingersData[index - 1].leftClass} ${
                    el === 0 && "finger_close"
                  }`}
                  alt="finger"
                />
              );
            } else {
              return (
                <img
                  key={`right-${index}`}
                  src={fingersData[3 - index].rightSource}
                  className={`finger ${fingersData[3 - index].rightClass} ${
                    el === 0 && "finger_close"
                  }`}
                  alt="finger"
                />
              );
            }
          }
        })}
      </>
    );
  }

  return (
    <div className="Hand">
      <img
        src={props.left === true ? handLeft : handRight}
        alt="hand"
        className={`${props.left === true && "Hand_left"} ${
          props.left !== true && "Hand_right"
        }`}
      />
      {props.left === true ? bigFinger(dataArray[0]) : ""}
      {fingersMapper()}
      {props.left === true ? "" : bigFinger(dataArray[4])}
    </div>
  );
}

export default Hand;
