import React from "react";
import "./Hand.css";

function Hand(props) {
  const fingersData = [
    {
      leftClass: "leftPointing",
      rightClass: "rightPointing",
      leftSource: props.images.fingers[5],
      rightSource: props.images.fingers[3],
    },
    {
      leftClass: "leftCentral",
      rightClass: "rightCentral",
      leftSource: props.images.fingers[11],
      rightSource: props.images.fingers[10],
    },
    {
      leftClass: "leftUnnamed",
      rightClass: "rightUnnamed",
      leftSource: props.images.fingers[9],
      rightSource: props.images.fingers[8],
    },
    {
      leftClass: "leftPinky",
      rightClass: "rightPinky",
      leftSource: props.images.fingers[4],
      rightSource: props.images.fingers[2],
    },
  ];

  let dataArray = props.data.map((i) => +i);

  function bigFinger(num) {
    return (
      <img
        src={
          props.left ? props.images.fingers[7].src : props.images.fingers[6].src
        }
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
                  src={fingersData[index - 1].leftSource.src}
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
                  src={fingersData[3 - index].rightSource.src}
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
        src={
          props.left === true
            ? props.images.fingers[1].src
            : props.images.fingers[0].src
        }
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
