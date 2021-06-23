// **импорты
import React from 'react';
import { TranslationContext } from '../../contexts/translationContext';
import './Works.css';
import './styles/__title/Works__title.css';
import './styles/__link/Works__link.css';
import './styles/__button/Works__button.css';
import './styles/__container/Works__container.css';
import './styles/__work/Resume__work.css';
import './styles/__work-description/Resume__work-description.css';
import './styles/__work/_projects/Resume__work_projects_first.css';
import './styles/__work/_projects/Resume__work_projects_second.css';
import './styles/__work/_projects/Resume__work_projects_third.css';
import './styles/__work/_projects/Resume__work_projects_fourth.css';
import './styles/__work/_projects/Resume__work_projects_diplom.css';

// **функционал
function Works(props) {
  const translation = React.useContext(TranslationContext);

  // *функция разворотов работ и переноса слушателей игры по кликам
  function workToggle(e) {
    let key = e.target.id;
    let newObject = Object.assign({}, props.openWorks);
    if (props.openWorks[key]) {
      newObject[key] = false;
      props.setLuft(props.luft - 0.2);
    } else {
      newObject[key] = true;
      props.setLuft(props.luft + 0.2);
    }
    props.setOpenWorks(newObject);
    props.setLuft(props.luft);
  }

  // **DOM
  return (
    <section className="Works">
      <h3 className="Works__title">{translation.project} 1: <a className="Resume__text Resume__link" target="blank" href="https://github.com/loki87by/how-to-learn">https://github.com/loki87by/how-to-learn</a></h3>
        <button type="button" id='1' className="Works__button" onClick={workToggle}>{translation.more}</button>
        {props.openWorks[1] ?
        <div className="Works__container">
          <div className="Resume__work Resume__work_projects_first"></div>
          <p className="Resume__work-description">{translation.firstProjectInfo}</p>
        </div>
        : ''}
        <h3 className="Works__title">{translation.project} 2: <a className="Works__link" target="blank" href="https://github.com/loki87by/russian-travel">https://github.com/loki87by/russian-travel</a></h3>
        <button type="button" id='2' className="Works__button" onClick={workToggle}>{translation.more}</button>
        {props.openWorks[2] === true ?
        <div className="Works__container">
          <div className="Resume__work Resume__work_projects_second"></div>
          <p className="Resume__work-description">{translation.secondProjectInfo}</p>
        </div>
        : ''}
        <h3 className="Works__title">{translation.project} 3: <a className="Works__link" target="blank" href="https://github.com/loki87by/mesto">https://github.com/loki87by/mesto</a></h3>
        <button type="button" id='3' className="Works__button" onClick={workToggle}>{translation.more}</button>
        {props.openWorks[3] === true ?
        <div className="Works__container">
          <div className="Resume__work Resume__work_projects_third"></div>
          <p className="Resume__work-description">{translation.thirdProjectInfo}</p>
        </div>
        : ''}
        <h3 className="Works__title">{translation.project} 4: <a className="Works__link" target="blank" href="https://github.com/loki87by/mesto-react">https://github.com/loki87by/mesto-react</a></h3>
        <button type="button" id='4' className="Works__button" onClick={workToggle}>{translation.more}</button>
        {props.openWorks[4] === true ?
        <div className="Works__container">
          <div className="Resume__work Resume__work_projects_fourth"></div>
          <p className="Resume__work-description">{translation.fourthProjectInfo}</p>
        </div>
        : ''}
        <h3 className="Works__title">{translation.project} 5: <a className="Works__link" target="blank" href="https://github.com/loki87by/react-mesto-auth">https://github.com/loki87by/react-mesto-auth</a></h3>
        <button type="button" id='5' className="Works__button" onClick={workToggle}>{translation.more}</button>
        {props.openWorks[5] === true ?
        <div className="Works__container">
          <div className="Resume__work Resume__work_projects_third"></div>
          <p className="Resume__work-description">{translation.fifthProjectInfo}</p>
        </div>
        : ''}
        <h3 className="Works__title">{translation.project} 6: <a className="Works__link" target="blank" href="https://github.com/loki87by/express-mesto">https://github.com/loki87by/express-mesto</a></h3>
        <button type="button" id='6' className="Works__button" onClick={workToggle}>{translation.more}</button>
        {props.openWorks[6] === true ?
        <p className="Works__title">{translation.sixthProjectInfo}</p>
        : ''}
        <h3 className="Works__title">{translation.project} 7:
          <br/>
          <a className="Works__link" target="blank" href="https://github.com/loki87by/news-explorer-api">{translation.back} - https://github.com/loki87by/news-explorer-api</a>
          <br/>
          <a className="Works__link" target="blank" href="https://github.com/loki87by/news-explorer-frontend">{translation.front} - https://github.com/loki87by/news-explorer-frontend</a>
        </h3>
        <button type="button" id='7' className="Works__button" onClick={workToggle}>{translation.more}</button>
        {props.openWorks[7] === true ?
        <div className="Works__container">
          <div className="Resume__work Resume__work_projects_diplom"></div>
          <p className="Resume__work-description">{translation.diplomInfo}</p>
        </div>
        : ''}
        </section>
  )
}

// **экспорт
export default Works;
