// **импорты
import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import "./styles/__title/Work__title.css";
import "./styles/__link/Work__link.css";
import "./styles/__button/Work__button.css";
import "./styles/__button/_opened/Work__button_opened.css";
import "./styles/__container/Work__container.css";
import "./Work.css";
import "./styles/__description/Work__description.css";
import "./styles/_project/Work_project_first.css";
import "./styles/_project/Work_project_second.css";
import "./styles/_project/Work_project_third.css";
import "./styles/_project/Work_project_fourth.css";
import "./styles/_project/Work_project_diplom.css";
import "./styles/_project/Work_project_fifth.css";
import "./styles/_project/Work_project_sixth.css";
import "./styles/_project/Work_project_seventh.css";
import "./styles/_project/Work_project_eighth.css";
import "./styles/_project/Work_project_ninth.css";

// **функционал
function Work(props) {
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
    e.target.classList.toggle('Work__button_opened');
  }

  // **DOM
  return (
    <>
      <h3 className="Work__title">
        {translation.project} {props.index}:{" "}
        {props.double ?
        <br /> : ''}
        <a className="Work__link" target="blank" href={props.link}>
        {props.double ? translation[props.firstLinkText] : ''} - {props.link}
        </a>
        {props.double ?
        <>
        <br />
        <a className="Work__link" target="blank" href={props.secondLink}>
        {props.double ? translation[props.secondLinkText] : ''} - {props.link}
        </a>
        </> : ''}
      </h3>
      <button
        type="button"
        id={props.index}
        className="Work__button"
        onClick={workToggle}
      >
        {translation.more}
      </button>
      {props.openWorks[props.index] ? (
        <div className="Work__container">
          {props.style ? (
            <div className={`Work ${props.style}`}></div>
          ) : (
            ""
          )}
          <p className="Work__description">
            {translation[`${props.text}`]}
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

// **экспорт
export default Work;
