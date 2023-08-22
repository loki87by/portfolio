import React, { useContext, useState, ReactElement } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { BioProps } from "../../utils/types";
import Code from "../Code/Code";
import Age from "../Age/Age";
import "./Bio.css";

function Bio(props: BioProps): ReactElement {
  const translation = useContext(TranslationContext);
  const [binary, setBinary] = useState(false);

  function changeDigitType() {
    const newState = !binary;
    setBinary(newState);
  }

  return (
    <section className="Bio" ref={props.scrollRef}>
      <div className="Bio__age">
        <h2 className="Bio__subsubtitle">{translation?.age}: </h2>
        {binary ? (
          <button className="Bio__button" onClick={changeDigitType}>
            {translation?.toDecimal}
          </button>
        ) : (
          <button className="Bio__button" onClick={changeDigitType}>
            {translation?.toBinary}
          </button>
        )}
      </div>
      <Age binary={binary} images={props.images} />
      <h2 className="Bio__subsubtitle">
        {translation?.target}:{" "}
        <span className="Bio__text">{translation?.purpose}</span>
      </h2>
      <h2 className="Bio__subsubtitle">
        {translation?.hobby}:{" "}
        <span className="Bio__text">{translation?.outInterest}</span>
      </h2>
      <h2 className="Bio__subsubtitle">
        {translation?.qualities}:{" "}
        <span className="Bio__text">{translation?.quals}</span>
      </h2>
      <h2 className="Bio__subsubtitle">
        {translation?.biography}:{" "}
        <Code width={props.screenWidth} scrollbarWidth={props.scrollbarWidth} />
      </h2>
    </section>
  );
}

export default Bio;
