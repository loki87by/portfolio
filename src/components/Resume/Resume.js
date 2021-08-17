// **импорты
import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import close from "../../images/close.png";
import certificateRu from "../../media/Акулич.pdf";
import certificateEn from "../../media/20202WD00196.pdf";
import { WORKS } from "../../consts/works";
import Description from "../Description/Description";
import Work from "../Work/Work";
import "./Resume.css";
import "../Popup/Popup.css";
import "../Popup/styles/_day/Popup_day.css";
import "../Popup/styles/_opened/Popup_opened.css";
import "./styles/__works/Resume__works.css";
import "./styles/__certificate/Resume__certificate.css";
import "./styles/__certificate-close/Resume__certificate-close.css";

// **функционал
function Resume(props) {
  const translation = React.useContext(TranslationContext);
  const [screenWidth, setScreenWidth] = React.useState(window.screen.width);
  const [isCertificateOpen, setCertificateOpen] = React.useState(false);
  const [openWorks, setOpenWorks] = React.useState({
    1: false,
  });

  let imagesObject = {};

  // *закрытие сертификата
  function closeCertificate() {
    setCertificateOpen(false);
  }

  // *закрытие по esc
  function handleEscClose(e) {
    if (e.key === "Escape") {
      closeCertificate();
    }
  }
  // *слушатели закрытия по Esc
  React.useEffect(() => {
    window.addEventListener("keydown", handleEscClose);
    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  });

  // *считыватель ширины экрана
  React.useEffect(function () {
    function resizer() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", resizer);
    resizer();
    return () => window.removeEventListener("resize", resizer);
  });

  for (let i = 1; i < props.images.length - 4; i++) {
    const source = props.images[i].src;
    const imageHash = source.match(/\w*-?\w*\.\w*\.jpg/g);
    const imageFullName = imageHash[0].split(".")[0];
    const imageNameTitle = imageFullName.replace(/-\w*/, "");
    const imageNameIndex = imageFullName.match(/-\d*/)[0];
    const imageName = imageNameTitle + imageNameIndex;
    if (!imagesObject[imageName]) {
      imagesObject[imageName] = [];
    }
    imagesObject[imageName].push(source);
  }
  const imageSets = Object.values(imagesObject);

  // **DOM
  return (
    <section className="Resume">
      <Description
        images={props.images}
        isDay={props.isDay}
        isMobile={props.isMobile}
        setCertificateOpen={setCertificateOpen}
      />
      <section className="Resume__works">
        {WORKS.map((item, index) => {
          return (
            <Work
              key={index}
              index={index + 1}
              link={item.src}
              text={item.text}
              double={item.double}
              type={item.type}
              type2={item.type2}
              firstLinkText={item.firstLinkText}
              secondLinkText={item.secondLinkText}
              secondLink={item.secondLink}
              animationTime={item.animationTime}
              additionally={item.additionally}
              imageSet={imageSets[index]}
              luft={props.luft}
              setLuft={props.setLuft}
              openWorks={openWorks}
              setOpenWorks={setOpenWorks}
              animation={item.animation}
              isDay={props.isDay}
              setRangeValue={props.setRangeValue}
              rangeValue={props.rangeValue}
              width={props.width}
              isMobile={props.isMobile}
            />
          );
        })}
      </section>
      <section
        className={`Popup ${props.isDay && "Popup_day"} ${
          isCertificateOpen && "Popup_opened"
        }`}
      >
        <iframe
          className="Resume__certificate"
          title="sertify"
          allowtransparency="true"
          height="100%"
          width="100%"
          src={
            props.lang === "ru"
              ? `${certificateRu}#zoom=${screenWidth / 20}`
              : `${certificateEn}#zoom=${screenWidth / 20}`
          }
        ></iframe>
        {isCertificateOpen ? (
          <button
            type="button"
            className="Resume__certificate-close"
            onClick={closeCertificate}
          >
            <img alt="close" src={close} />
          </button>
        ) : (
          ""
        )}
      </section>
      <p className="Resume__text">{translation.preGame}</p>
    </section>
  );
}

// **экспорт
export default Resume;
