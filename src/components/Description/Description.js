import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import avatar from "../../images/avatar.jpg";
import matrix from "../../images/matrix-code-animation-gif-free-animated-background.gif";
import "./styles/__title/Description__title.css";
import "./styles/__subtitle/Description__subtitle.css";
import "./styles/__subsubtitle/Description__subsubtitle.css";
import "./styles/__text/Description__text.css";
import "./styles/__link/Description__link.css";
import "./styles/__photo/Description__photo.css";
import "./styles/__photo/_day/Description__photo_day.css";
import "./styles/__certificate-open/Description__certificate-open.css";
import "./styles/__certificate-open/_day/Description__certificate-open_day.css";

// **функционал
function Description(props) {
  const translation = React.useContext(TranslationContext);
  const [mouseOver, setMouseOver] = React.useState(false);
  const [effectAva, setEffectAva] = React.useState(matrix);
  const animations = props.images.slice(-4);


  // *разворот сертификата
  function openCertificate() {
    props.setCertificateOpen(true);
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
        <span className="Description__text">+7(995)593-57-56</span>
      </h3>
      <h3 className="Description__subsubtitle">
        e-mail: <span className="Description__text">loki87.666@gmail.com</span>
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
        src={mouseOver ? effectAva : avatar}
        className={`Description__photo ${props.isDay && "Description__photo_day"}`}
      />
      <h2 className="Description__subsubtitle">
        {translation.target}:{" "}
        <span className="Description__text">{translation.purpose}</span>
      </h2>
      <h2 className="Description__subsubtitle">
        Summary: <span className="Description__text">{translation.summary}</span>
      </h2>
      <h2 className="Description__subsubtitle">
        {translation.experience}:{" "}
        <span className="Description__text">{translation.workExperience}</span>
        {props.isMobile ? (
          ""
        ) : (
          <button
            type="button"
            className={`Description__certificate-open ${
              props.isDay && "Description__certificate-open_day"
            }`}
            onClick={openCertificate}
          >
            <h3 className="Description__subsubtitle">{translation.showCertify}</h3>
          </button>
        )}
      </h2>
      <h2 className="Description__subsubtitle">
        {translation.education}:{" "}
        <span className="Description__text">{translation.educationLevel}</span>
      </h2>
      <h2 className="Description__subsubtitle">
        {translation.info}:{" "}
        <span className="Description__text">{translation.inform}</span>
      </h2>
      <h2 className="Description__subsubtitle">
        {translation.hobby}:{" "}
        <span className="Description__text">{translation.outInterest}</span>
      </h2>
      <h2 className="Description__subsubtitle">
        {translation.qualities}:{" "}
        <span className="Description__text">{translation.quals}</span>
      </h2>
      <h2 className="Description__subtitle">{translation.works}:</h2>
      </>)
}

export default Description;