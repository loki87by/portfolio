import React, { useState, useEffect, ReactElement } from "react";
import { HandsProps } from "../../utils/types";
import Hand from "../Hand/Hand";
import "./Hands.css";

function Hands(props: HandsProps): ReactElement {
  const [alone, setAlone] = useState(true);
  const [data, setData] = useState([["0", "0", "0", "0", "0"]]);

  const arrayConverter = (str: string) => {
    const array = str.split("");

    while (array.length < 5) {
      array.unshift("0");
    }

    return array;
  };

  useEffect(() => {
    const bin = props.number.toString(2);
    const num = String(bin);
    const totalArr = [];

    if (num.length > 5) {
      setAlone(false);
      const start = num.slice(0, num.length - 5);
      const startArr = arrayConverter(start);
      totalArr.push(startArr);
      const finish = num.slice(num.length - 5);
      const finishArr = arrayConverter(finish);
      totalArr.push(finishArr);
    } else {
      setAlone(true);
      totalArr.push(arrayConverter(num));
    }
    setData(totalArr);
  }, [props.number]);

  return (
    <div className="Hands">
      {alone ? (
        <Hand data={data[0]} images={props.images} />
      ) : (
        <>
          <Hand data={data[0]} left={true} images={props.images} />
          <Hand data={data[1]} images={props.images} />
        </>
      )}
    </div>
  );
}

export default Hands;
