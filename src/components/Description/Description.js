import React from "react";
import Code from "../Code/Code";
import Age from "../Age/Age";
import Slider from "../Slider/Slider";
import Stack from "../Stack/Stack";
import Certificate from "../Certificate/Certificate";
import { TranslationContext } from "../../contexts/translationContext";
import "./styles/__title/Description__title.css";
import "./styles/__subtitle/Description__subtitle.css";
import "./styles/__subsubtitle/Description__subsubtitle.css";
import "./styles/__text/Description__text.css";
import "./styles/__link/Description__link.css";
import "./styles/__photo/Description__photo.css";
import "./styles/__block/Description__block.css";
import "./styles/__button/Description__button.css";
import "./styles/__certificates/Description__certificates.css";
import "./styles/__soft/Description__soft.css";
import "./styles/__soft-container/Description__soft-container.css";
import "./styles/__soft-image/Description__soft-image.css";

function Description(props) {
  const avatar = props.images.avatar[0];
  const animations = props.images.avatarAnimation;
  const translation = React.useContext(TranslationContext);
  const [mouseOver, setMouseOver] = React.useState(false);
  const [effectAva, setEffectAva] = React.useState(animations[0].src);
  const [binary, setBinary] = React.useState(true);

  function changeDigitType() {
    const newState = !binary;
    setBinary(newState);
  }

  React.useEffect(() => {
    let ava = document.querySelector(".Description__photo");
    function changeEffect() {
      const rand = Math.random();
      const chanse = Math.floor(4 * rand);
      const avatarEffect = animations[chanse].src;
      setEffectAva(avatarEffect);
    }
    function hoverOn() {
      setMouseOver(true);
    }
    function hoverOff() {
      setMouseOver(false);
      changeEffect();
    }
    ava.addEventListener("mouseover", hoverOn);
    ava.addEventListener("mouseout", hoverOff);

    return () => {
      ava.removeEventListener("mouseover", hoverOn);
      ava.removeEventListener("mouseout", hoverOff);
    };
  });

  return (
    <>
      <h1 className="Description__title">
        {translation.specify}
        <br />
        {translation.author}
      </h1>
      <h2 className="Description__subtitle">{translation.contacts}:</h2>
      <h3 className="Description__subsubtitle">
        {translation.location}:{" "}
        <span className="Description__text">{translation.city}</span>
      </h3>
      <h3 className="Description__subsubtitle">
        {translation.phone}:{" "}
        <a href="tel:+79955935759" className="Description__text">
          +7(995)593-57-56
        </a>
      </h3>
      <h3 className="Description__subsubtitle">
        {`e-mail: `}
        <a href="mailto:loki87.666@gmail.com" className="Description__text">
          loki87.666@gmail.com
        </a>
      </h3>
      <h3 className="Description__subsubtitle">
        Github:{" "}
        <a
          className="Description__text Description__link"
          target="blank"
          href="https://github.com/loki87by"
        >
          https://github.com/loki87by
        </a>
      </h3>
      <img
        alt="фото"
        src={mouseOver ? effectAva : avatar.src}
        className="Description__photo"
      />
      <div className="Description__block">
        <h2 className="Description__subsubtitle">{translation.age}: </h2>
        {binary ? (
          <button className="Description__button" onClick={changeDigitType}>
            {translation.toDecimal}
          </button>
        ) : (
          <button className="Description__button" onClick={changeDigitType}>
            {translation.toBinary}
          </button>
        )}
      </div>
      <Age binary={binary} images={props.images} />
      <h2 className="Description__subsubtitle">
        {translation.target}:{" "}
        <span className="Description__text">{translation.purpose}</span>
      </h2>
      <h2 className="Description__subsubtitle">
        {translation.hobby}:{" "}
        <span className="Description__text">{translation.outInterest}</span>
      </h2>
      <h2 className="Description__subsubtitle">
        {translation.qualities}:{" "}
        <span className="Description__text">{translation.quals}</span>
      </h2>
      <h2 className="Description__subsubtitle">
        {translation.biography}:{" "}
        <Code width={props.screenWidth} scrollbarWidth={props.scrollbarWidth} />
      </h2>
      <h2 className="Description__subsubtitle">{translation.certificates}: </h2>
      <section className="Description__certificates">
        <Certificate
          type={"yandex"}
          screenWidth={props.screenWidth}
          lang={props.lang}
          setCertificateOpen={props.setCertificateOpen}
          setCertificateType={props.setCertificateType}
          isCertificateOpen={props.isCertificateOpen}
        />
        <Certificate
          type={"epam"}
          screenWidth={props.screenWidth}
          lang={props.lang}
          setCertificateOpen={props.setCertificateOpen}
          setCertificateType={props.setCertificateType}
          isCertificateOpen={props.isCertificateOpen}
        />
      </section>
      <h2 className="Description__subtitle">{translation.skills}:</h2>
      <h3 className="Description__subsubtitle">{translation.soft}:</h3>
      <div className="Description__soft-container">
        <Slider
          unit="%"
          limit={5}
          shift={125}
          interval={3000}
          slides={props.slides}
          setStyle={props.setStyle}
          paused={props.paused}
          setPaused={props.setPaused}
          resetPaused={props.resetPaused}
        />
      </div>
      <h3 className="Description__subsubtitle">{translation.works}:</h3>
      <Stack
        selectedStack={props.selectedStack}
        setSelectedStack={props.setSelectedStack}
        images={props.images}
      />
      <h2 className="Description__subtitle">{translation.works}:</h2>
    </>
  );
}

export default Description;
