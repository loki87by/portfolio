import React, { useContext, useState, useEffect } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { WORKS } from "../../consts/works";
import Work from "../Work/Work";
import Sprite from "../Sprite/Sprite";
import triangle from '../../images/triangle.svg'
import "./Works.css";

function Works(props) {
  const [currentWorks, setCurrentWorks] = useState({});
  const [openedSection, setOpenedSection] = useState("");

  const translation = useContext(TranslationContext);

  function checkSection(id) {
    if (openedSection === id && Object.keys(currentWorks).length > 1) {
      setOpenedSection("");
    } else {
      setOpenedSection(id);
    }
  }

  useEffect(() => {
    const filtered = WORKS.filter((i) => i.type[0] === props.filter).sort(
      (a, b) => (a.type[1] < b.type[1] ? 1 : -1)
    );
    const reduced = filtered.reduce((p, i) => {
      const key = i.type[1] ? i.type[1] : i.type[0];
      if (!p[key]) {
        p[key] = [i];
      } else {
        p[key].push(i);
      }
      return p;
    }, {});
    setCurrentWorks(reduced);
  }, [props.filter]);

  useEffect(() => {
    if (Object.keys(currentWorks).length === 1) {
      setOpenedSection(Object.keys(currentWorks)[0]);
    }
  }, [setOpenedSection, currentWorks]);

  return (
    <section className="Works" ref={props.scrollRef}>
      {Object.keys(currentWorks).map((i, ind) => (
        <article key={`${i}-${ind}`} id={i} className="Works__section">
          <div className="Works__section-title"
            onClick={() => {
              checkSection(i);
            }}
          >
            <Sprite
            style={openedSection === i ? {transform: 'rotate(90deg)'} : {}}
            src={triangle}
            id='triangle'
            width="2vmax"
            height="2vmax"
            title='triangle'/>
            <h3 className="Works__section-text">{translation[i]}:</h3>
          </div>
          {openedSection === i
            ? currentWorks[i].map((item) => (
                <Work
                  key={item.name}
                  data={item}
                  images={props.images}
                  isMobile={props.isMobile}
                  screenWidth={props.screenWidth}
                  widgetRangeValue={props.widgetRangeValue}
                  setWidgetRangeValue={props.setWidgetRangeValue}
                />
              ))
            : ""}
        </article>
      ))}
    </section>
  );
}

export default Works;
