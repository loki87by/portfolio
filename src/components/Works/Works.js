import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { STACK } from "../../utils/consts.js";
import "./Works.css";
import "./styles/__title/Works__title.css";
import "./styles/__subtitle/Works__subtitle.css";
import "./styles/__background/Works__background.css";
import "./styles/__background/_occupancy/Works__background_occupancy_empty.css";
import "./styles/__background/_occupancy/Works__background_occupancy_alone.css";
import "./styles/__background/_occupancy/Works__background_occupancy_double.css";
import "./styles/__background/_occupancy/Works__background_occupancy_triple.css";
import "./styles/__background/_occupancy/Works__background_occupancy_more.css";
import "./styles/__background-image/Works__background-image.css";
import "./styles/__background-image/_occupancy/Works__background-image_occupancy_alone.css";
import "./styles/__background-image/_occupancy/Works__background-image_occupancy_double.css";
import "./styles/__background-image/_occupancy/Works__background-image_occupancy_triple.css";
import "./styles/__background-image/_occupancy/Works__background-image_occupancy_more.css";
import "./styles/__button/Works__button.css";

function Works(props) {
  const [selectedProjects, setSelectedProjects] = React.useState([]);
  const [projectsImages, setProjectsImages] = React.useState([]);
  const [backgroundModificator, setBackgroundModificator] = React.useState("");
  const [newStyle, setNewStyle] = React.useState(false);
  const translation = React.useContext(TranslationContext);

  const shuffle = (array) => {
    let arr = array;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  };

  function filtersReset() {
    props.setSelectedStack(STACK.slice());
  }

  React.useEffect(() => {
    const array = props.item.array.filter((work) => {
      if (
        work.stack.every((item) => {
          return props.selectedStack.some((e) => e === item);
        })
      ) {
        return work;
      } else {
        return null;
      }
    });
    setSelectedProjects(shuffle(array));
  }, [props.item.array, props.selectedStack]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setNewStyle(true);
    }, 300);
    const pos = JSON.parse(JSON.stringify(props.style));

    return () => {
      clearTimeout(timer);

      if (props.style !== pos) {
        setNewStyle(false);
      }
    };
  }, [projectsImages, props.style]);

  React.useEffect(() => {
    const imgArray = selectedProjects.map((i) => {
      return props.images[`project_${i.name}`][0].src;
    });
    setProjectsImages(imgArray);

    if (projectsImages.length === 0) {
      setBackgroundModificator("empty");
    } else if (projectsImages.length === 1) {
      setBackgroundModificator("alone");
    } else if (projectsImages.length === 2) {
      setBackgroundModificator("double");
    } else if (projectsImages.length === 3) {
      setBackgroundModificator("triple");
    } else {
      setBackgroundModificator("more");
    }
  }, [projectsImages.length, props.images, selectedProjects]);

  function openWorks() {
    props.setCurrentWorks(props.item.array);
    const newState = !props.worksIsOpen;
    props.setWorksOpen(newState);
  }

  return (
    <section className="Works" style={props.style} onClick={props.setPaused}>
      <h3 className="Works__title">{translation[props.item.type]}</h3>
      <h4 className="Works__subtitle">
        {translation.worksSubtitle}
        {selectedProjects.length}
      </h4>
      <div
        className={`Works__background Works__background_occupancy_${backgroundModificator}`}
      >
        {projectsImages.length > 0 ? (
          projectsImages.map((item, index) => {
            return (
              <div
                key={`project-demo-${index}`}
                style={
                  newStyle
                    ? {
                        transform: "translateY(0)",
                        transition: "all .7s linear",
                        transitionDelay: `${index / 2}s`,
                        maxHeight: "100%",
                      }
                    : { maxHeight: "100%" }
                }
                className={`Works__background-image Works__background-image_occupancy_${backgroundModificator}`}
              >
                <img
                  src={item}
                  alt="project-demo"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            );
          })
        ) : (
          <h4
            className="Works__subtitle"
            style={{ marginTop: "calc(6vmin + 8vw)" }}
          >
            {translation.tryResetFilters}
            <span
              onClick={filtersReset}
              className="Works__subtitle"
              style={{ cursor: "pointer" }}
            >
              {translation.resetFilters}
            </span>
          </h4>
        )}
      </div>
      <button className="Works__button" onClick={openWorks}>
        {props.worksIsOpen ? translation.hideWorks : translation.showWorks}
      </button>
    </section>
  );
}

export default Works;
