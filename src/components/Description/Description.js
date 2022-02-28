import React from "react";
import Code from "../Code/Code";
import Age from "../Age/Age";
import Slider from "../Slider/Slider";
import Stack from "../Stack/Stack";
import { TranslationContext } from "../../contexts/translationContext";
import certificateRu from "../../media/Акулич.pdf";
import certificateEn from "../../media/20202WD00196.pdf";
import epamCertificate from "../../media/ds8jpv3n.pdf";
import zoom from "../../images/zoom.svg";
import { completeSliderArray } from "../../utils/helpers.js";
import { STACK } from "../../utils/consts.js";
import "./styles/__title/Description__title.css";
import "./styles/__subtitle/Description__subtitle.css";
import "./styles/__subsubtitle/Description__subsubtitle.css";
import "./styles/__text/Description__text.css";
import "./styles/__link/Description__link.css";
import "./styles/__photo/Description__photo.css";
import "./styles/__block/Description__block.css";
import "./styles/__button/Description__button.css";
import "./styles/__certificates/Description__certificates.css";
import "./styles/__certificate/Description__certificate.css";
import "./styles/__certificate-open/Description__certificate-open.css";
import "./styles/__certificate-open/_day/Description__certificate-open_day.css";
import "./styles/__soft/Description__soft.css";
import "./styles/__soft-container/Description__soft-container.css";
import "./styles/__soft-image/Description__soft-image.css";

// **функционал
function Description(props) {
  const avatar = props.images.avatar[0];
  const animations = props.images.avatarAnimation;
  const translation = React.useContext(TranslationContext);
  const [mouseOver, setMouseOver] = React.useState(false);
  const [effectAva, setEffectAva] = React.useState(animations[0]);
  const [binary, setBinary] = React.useState(true);
  const [pausedSoftSlider, setPausedSoftSlider] = React.useState(false);
  const [softStyles, setSoftStyles] = React.useState([]);
  const [selectedStack, setSelectedStack] = React.useState(STACK);

  function stopSoftAutoSlide() {
    setPausedSoftSlider(true);
  }

  const softImages = completeSliderArray(props.images.soft.slice(), 5);
  let stylesArray = JSON.parse(JSON.stringify(softStyles));
  const arr = [];

  const softImagesSlides = softImages.map((item, index) => {
    if (!stylesArray[index]) {
      arr.push({ display: "flex" });
      setSoftStyles(arr);
    }
    return (
      <div
        className="Description__soft"
        key={`soft-${index}`}
        style={stylesArray[index]}
        onClick={stopSoftAutoSlide}
      >
        <img src={item.src} className="Description__soft-image" alt="img" />
      </div>
    );
  });

  function setStyle(style) {
    let arr = JSON.parse(JSON.stringify(softStyles));
    arr = arr.map(() => style);
    setSoftStyles(arr);
  }

  // *сменить систему счисления
  function changeDigitType() {
    const newState = !binary;
    setBinary(newState);
  }

  // *разворот сертификата
  function openCertificate(e) {
    props.setCertificateType(e.target.id);
    props.setCertificateOpen(true);
  }

  // *установка зуммеров на сертификаты
  function setButton(type) {
    const ifrs = document.getElementsByTagName("iframe");
    let ifr;

    if (type === "yandex") {
      ifr = ifrs[0];
    }

    if (type === "epam") {
      ifr = ifrs[1];
    }
    const frameHtml = ifr.contentDocument.children[0];
    frameHtml.setAttribute("style", "height: 100%; cursor: pointer");
    const frameBody = frameHtml.children[1];
    frameBody.setAttribute(
      "style",
      "position: relative; height: 100%; margin: 0"
    );
    const button = document.createElement("div");
    button.id = type;
    const styles = `position: fixed;
    top: 30%;
    left: 40%;
    width: 20%;
    height: 40%;
    border-radius: 25%;
    cursor: pointer;
    background-image: url("${zoom}");
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0, 0, 0, .5);`;
    button.setAttribute("style", styles);
    frameBody.appendChild(button);
    button.addEventListener("click", (e) => {
      openCertificate(e);
    });
    button.addEventListener("mouseover", () => {
      button.setAttribute(
        "style",
        styles.concat("transition: all .3s linear; transform: scale(1.3)")
      );
    });
    button.addEventListener("mouseout", () => {
      button.setAttribute("style", styles);
    });
  }

  // *эффекты аватарки
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
        {translation.biography}: <Code />
      </h2>
      <h2 className="Description__subsubtitle">{translation.certificates}: </h2>
      <section className="Description__certificates">
        <iframe
          onLoad={() => {
            setButton("yandex");
          }}
          className="Description__certificate"
          title="certify"
          allowtransparency="true"
          height="auto"
          width={`${props.screenWidth * 0.43}px`}
          src={
            props.lang === "ru"
              ? `${certificateRu}#zoom=${props.screenWidth / 27.5}`
              : `${certificateEn}#zoom=${props.screenWidth / 27.5}`
          }
        ></iframe>
        <iframe
          onLoad={() => {
            setButton("epam");
          }}
          className="Description__certificate"
          title="certify"
          allowtransparency="true"
          height="auto"
          width={`${props.screenWidth * 0.43}px`}
          src={`${epamCertificate}#zoom=${props.screenWidth / 27.5}`}
        ></iframe>
      </section>
      <h2 className="Description__subtitle">{translation.skills}:</h2>
      <h3 className="Description__subsubtitle">{translation.soft}:</h3>
      <div className="Description__soft-container">
        <Slider
          slides={softImagesSlides}
          shift={125}
          unit="%"
          limit={5}
          paused={pausedSoftSlider}
          setStyle={setStyle}
          setPaused={setPausedSoftSlider}
          interval={3000}
        />
      </div>
      <h3 className="Description__subsubtitle">{translation.stack}:</h3>
      <Stack
        selectedStack={selectedStack}
        setSelectedStack={setSelectedStack}
        images={props.images}
      />
    </>
  );
}

export default Description;
