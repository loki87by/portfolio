import React, { useContext, useState, useEffect } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { WORKS } from "../../consts/works";
import Work from "../Work/Work";
import "./Works.css";

function Works(props) {
  const [currentWorks, setCurrentWorks] = useState({});
  const [openedSection, setOpenedSection] = useState("");

  const translation = useContext(TranslationContext);

  useEffect(() => {
    const filtered = WORKS.filter((i) => i.type[0] === props.filter).sort(
      (a, b) => (a.type[1] < b.type[1] ? 1 : -1)
    );
    const reduced = filtered.reduce((p, i) => {
      if (!p[i.type[1]]) {
        p[i.type[1]] = [i];
      } else {
        p[i.type[1]].push(i);
      }
      return p;
    }, {});
    setCurrentWorks(reduced);
  }, [props.filter]);

  function checkSection(id) {
    if (openedSection === id) {
      setOpenedSection("");
    } else {
      setOpenedSection(id);
    }
  }

  return (
    <section className="Works">
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
                <Work key={item.name} data={item} images={props.images} />
              ))
            : ""}
        </article>
      ))}
    </section>
  );
}

export default Works;
