import React, { useContext, useState, useEffect } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { WORKS } from "../../consts/works";
import Work from "../Work/Work";
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
      const key = i.type[1] ? i.type[1] : i.type[0]
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
  }, [setOpenedSection, currentWorks])

  return (
    <section className="Works" ref={props.scrollRef}>
      {Object.keys(currentWorks).map((i, ind) => (
        <article
          key={`${i}-${ind}`}
          id={i}
          className={`Works__section`}
          onClick={() => {
            checkSection(i);
          }}
        >
          <h3>{translation[i]}:</h3>
          {openedSection === i
            ? currentWorks[i].map((item) => (
                <Work
                  key={item.name}
                  data={item}
                  images={props.images}
                  isMobile={props.isMobile}
                />
              ))
            : ""}
        </article>
      ))}
    </section>
  );
}

export default Works;
