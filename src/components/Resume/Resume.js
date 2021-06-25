// **импорты
import React from 'react';
import { TranslationContext } from '../../contexts/translationContext';
import avatar from '../../images/avatar.jpg';
import matrix from '../../images/matrix-code-animation-gif-free-animated-background.gif';
import close from '../../images/close.png';
import certificateRu from '../../media/Акулич.pdf';
import certificateEn from '../../media/20202WD00196.pdf';
import { WORKS } from "../../utils/consts";
import Work from "../Work/Work";
import './Resume.css';
import './styles/__title/Resume__title.css';
import './styles/__subtitle/Resume__subtitle.css';
import './styles/__subsubtitle/Resume__subsubtitle.css';
import './styles/__text/Resume__text.css';
import './styles/__link/Resume__link.css';
import './styles/__photo/Resume__photo.css';
import './styles/__works/Resume__works.css';
import '../Popup/Popup.css';
import '../Popup/styles/_opened/Popup_opened.css';
import './styles/__certificate/Resume__certificate.css';
import './styles/__certificate-open/Resume__certificate-open.css';
import './styles/__certificate-close/Resume__certificate-close.css';

// **функционал
function Resume(props) {
  const translation = React.useContext(TranslationContext);
  const [luft, setLuft] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(window.screen.width);
  const [isCertificateOpen, setCertificateOpen] = React.useState(false);
  const [mouseOver, setMouseOver] = React.useState(false);
  const [effectAva, setEffectAva] = React.useState(matrix);
  const [openWorks, setOpenWorks] = React.useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  const animations = props.images.slice(-4);

  let imagesObject = {};

  // *разворот сертификата
  function openCertificate() {
    setCertificateOpen(true);
  }
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
    window.addEventListener('keydown', handleEscClose);
    return () => {window.removeEventListener('keydown', handleEscClose);}
  })

  // *считыватель ширины экрана
  React.useEffect(function() {
    function resizer() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", resizer);
    resizer();
    return () => window.removeEventListener("resize", resizer);
  });

  // *эффекты аватарки
  React.useEffect(() => {
    let ava = document.querySelector(".Resume__photo");
    function changeEffect() {
      const rand = Math.random();
      const chanse = Math.floor(4 * rand);
      const avatarEffect = animations[chanse].src;
      setEffectAva(avatarEffect)
    }
    function hoverOn() {
      setMouseOver(true);
    };
    function hoverOff() {
      setMouseOver(false);
      changeEffect()
    };
    ava.addEventListener('mouseover', hoverOn);
    ava.addEventListener('mouseout', hoverOff);
    return () => {
      ava.removeEventListener('mouseover', hoverOn);
      ava.removeEventListener('mouseout', hoverOff);
    };
  })
  for(let i=1; i<props.images.length - 4; i++ ){
    const source = props.images[i].src;
    const imageHash = source.match(/\w*-?\w*\.\w*\.jpg/g);
    const imageFullName = imageHash[0].split('.')[0];
    const imageNameTitle = imageFullName.replace(/-\w*/, '')
    const imageNameIndex = imageFullName.match(/-\d/)[0];
    const imageName = imageNameTitle + imageNameIndex;
    if(!imagesObject[imageName]){
      imagesObject[imageName] = [];
    }
    imagesObject[imageName].push(source);
  }
  console.log(imagesObject);

  // **DOM
  return (
    <section className="Resume">
      <h1 className="Resume__title">{translation.specify}<br/>{translation.author}</h1>
      <h2 className="Resume__subtitle">{translation.contacts}:</h2>
      <h3 className="Resume__subsubtitle">{translation.location}: <span className="Resume__text">{translation.city}</span></h3>
      <h3 className="Resume__subsubtitle">{translation.phone}: <span className="Resume__text">+7(995)593-57-56</span></h3>
      <h3 className="Resume__subsubtitle">e-mail: <span className="Resume__text">loki87.666@gmail.com</span></h3>
      <h3 className="Resume__subsubtitle">Github: <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by">https://github.com/loki87by</a></h3>
      <img alt="фото" src={mouseOver ? effectAva : avatar} className="Resume__photo" />
      <h2 className="Resume__subsubtitle">{translation.target}: <span className="Resume__text">{translation.purpose}</span></h2>
      <h2 className="Resume__subsubtitle">Summary: <span className="Resume__text">{translation.summary}</span></h2>
      <h2 className="Resume__subsubtitle">{translation.experience}: <span className="Resume__text">{translation.workExperience}</span>
      {props.isMobile ? '' :
        <button type="button" className="Resume__certificate-open" onClick={openCertificate}>
          <h3 className="Resume__subsubtitle">{translation.showCertify}</h3>
        </button>}</h2>
      <h2 className="Resume__subsubtitle">{translation.education}: <span className="Resume__text">{translation.educationLevel}</span></h2>
      <h2 className="Resume__subsubtitle">{translation.info}: <span className="Resume__text">{translation.inform}</span></h2>
      <h2 className="Resume__subsubtitle">{translation.hobby}: <span className="Resume__text">{translation.outInterest}</span></h2>
      <h2 className="Resume__subsubtitle">{translation.qualities}: <span className="Resume__text">{translation.quals}</span></h2>
      <h2 className="Resume__subtitle">{translation.works}:</h2>
      <section className="Resume__works">
      {WORKS.map((item, index) => {
        return (
          <Work
            key={index}
            index={index + 1}
            link={item.src}
            style={item.class}
            text={item.text}
            double={item.double}
            firstLinkText={item.firstLinkText}
            secondLinkText={item.secondLinkText}
            secondLink={item.secondLink}
            luft={luft}
            setLuft={setLuft}
            openWorks={openWorks}
            setOpenWorks={setOpenWorks}
          />
        );
      })}
    </section>
      {/* <Works luft={luft} setLuft={setLuft} openWorks={openWorks} setOpenWorks={setOpenWorks}/> */}
        <section className={`Popup ${isCertificateOpen && "Popup_opened"}`}>
        <iframe className="Resume__certificate" title='sertify' allowtransparency="true" height='100%' width='100%' src={props.lang === 'ru' ? `${certificateRu}#zoom=${screenWidth / 20}` : `${certificateEn}#zoom=${screenWidth / 20}`} ></iframe>
        {isCertificateOpen ?
          <button type="button" className="Resume__certificate-close" onClick={closeCertificate}><img alt='close' src={close} /></button>
          : ''}
        </section>
        <p className="Resume__text">{translation.preGame}</p>
    </section>
  )
}

// **экспорт
export default Resume;
