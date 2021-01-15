// **импорты
import React from 'react';
import { TranslationContext } from '../../contexts/translationContext';
import avatar from '../../images/avatar.jpg';
import close from '../../images/close.png';
import certificateRu from '../../media/Акулич.pdf';
import certificateEn from '../../media/20202WD00196.pdf';
import './Resume.css';
import './styles/__title/Resume__title.css';
import './styles/__subtitle/Resume__subtitle.css';
import './styles/__subsubtitle/Resume__subsubtitle.css';
import './styles/__text/Resume__text.css';
import './styles/__link/Resume__link.css';
import './styles/__photo/Resume__photo.css';
import './styles/__works/Resume__works.css';
import './styles/__button/Resume__button.css';
import './styles/__work-container/Resume__work-container.css';
import './styles/__work/Resume__work.css';
import './styles/__work-description/Resume__work-description.css';
import './styles/__work/_projects/Resume__work_projects_first.css';
import './styles/__work/_projects/Resume__work_projects_second.css';
import './styles/__work/_projects/Resume__work_projects_third.css';
import './styles/__work/_projects/Resume__work_projects_fourth.css';
import './styles/__work/_projects/Resume__work_projects_diplom.css';
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
  const [openWorks, setOpenWorks] = React.useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  // *функция разворотов работ и переноса слушателей игры по кликам
  function clicker(e) {
    let key = e.target.id;
    let newObject = Object.assign({}, openWorks);
    if (openWorks[key]) {
      newObject[key] = false;
      setLuft(luft - 0.2);
    } else {
      newObject[key] = true;
      setLuft(luft + 0.2);
    }
    setOpenWorks(newObject);
    props.setLuft(luft);
  }

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

  React.useEffect(function() {
    function resizer() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", resizer);
    resizer();
    return () => window.removeEventListener("resize", resizer);
  });

  // **DOM
  return (
    <section className="Resume">
      <h1 className="Resume__title">{translation.specify}<br/>{translation.author}</h1>
      <h2 className="Resume__subtitle">{translation.contacts}:</h2>
      <h3 className="Resume__subsubtitle">{translation.location}: <span className="Resume__text">{translation.city}</span></h3>
      <h3 className="Resume__subsubtitle">{translation.phone}: <span className="Resume__text">+7(995)593-57-56</span></h3>
      <h3 className="Resume__subsubtitle">e-mail: <span className="Resume__text">loki87.666@gmail.com</span></h3>
      <h3 className="Resume__subsubtitle">Github: <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by">https://github.com/loki87by</a></h3>
      <img alt="фото" src={avatar} className="Resume__photo" />
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
      <h3 className="Resume__subsubtitle">{translation.project} 1: <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by/how-to-learn">https://github.com/loki87by/how-to-learn</a></h3>
        <button type="button" id='1' className="Resume__button" onClick={clicker}>{translation.more}</button>
        {openWorks[1] ?
        <div className="Resume__work-container">
          <div className="Resume__work Resume__work_projects_first"></div>
          <p className="Resume__work-description">{translation.firstProjectInfo}</p>
        </div>
        : ''}
        <h3 className="Resume__subsubtitle">{translation.project} 2: <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by/russian-travel">https://github.com/loki87by/russian-travel</a></h3>
        <button type="button" id='2' className="Resume__button" onClick={clicker}>{translation.more}</button>
        {openWorks[2] === true ?
        <div className="Resume__work-container">
          <div className="Resume__work Resume__work_projects_second"></div>
          <p className="Resume__work-description">{translation.secondProjectInfo}</p>
        </div>
        : ''}
        <h3 className="Resume__subsubtitle">{translation.project} 3: <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by/mesto">https://github.com/loki87by/mesto</a></h3>
        <button type="button" id='3' className="Resume__button" onClick={clicker}>{translation.more}</button>
        {openWorks[3] === true ?
        <div className="Resume__work-container">
          <div className="Resume__work Resume__work_projects_third"></div>
          <p className="Resume__work-description">{translation.thirdProjectInfo}</p>
        </div>
        : ''}
        <h3 className="Resume__subsubtitle">{translation.project} 4: <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by/mesto-react">https://github.com/loki87by/mesto-react</a></h3>
        <button type="button" id='4' className="Resume__button" onClick={clicker}>{translation.more}</button>
        {openWorks[4] === true ?
        <div className="Resume__work-container">
          <div className="Resume__work Resume__work_projects_fourth"></div>
          <p className="Resume__work-description">{translation.fourthProjectInfo}</p>
        </div>
        : ''}
        <h3 className="Resume__subsubtitle">{translation.project} 5: <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by/react-mesto-auth">https://github.com/loki87by/react-mesto-auth</a></h3>
        <button type="button" id='5' className="Resume__button" onClick={clicker}>{translation.more}</button>
        {openWorks[5] === true ?
        <div className="Resume__work-container">
          <div className="Resume__work Resume__work_projects_third"></div>
          <p className="Resume__work-description">{translation.fifthProjectInfo}</p>
        </div>
        : ''}
        <h3 className="Resume__subsubtitle">{translation.project} 6: <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by/express-mesto">https://github.com/loki87by/express-mesto</a></h3>
        <button type="button" id='6' className="Resume__button" onClick={clicker}>{translation.more}</button>
        {openWorks[6] === true ?
        <p className="Resume__subsubtitle">{translation.sixthProjectInfo}</p>
        : ''}
        <h3 className="Resume__subsubtitle">{translation.project} 7:
          <br/>
          <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by/news-explorer-api">{translation.back} - https://github.com/loki87by/news-explorer-api</a>
          <br/>
          <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by/news-explorer-frontend">{translation.front} - https://github.com/loki87by/news-explorer-frontend</a>
        </h3>
        <button type="button" id='7' className="Resume__button" onClick={clicker}>{translation.more}</button>
        {openWorks[7] === true ?
        <div className="Resume__work-container">
          <div className="Resume__work Resume__work_projects_diplom"></div>
          <p className="Resume__work-description">{translation.diplomInfo}</p>
        </div>
        : ''}
        </section>
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
