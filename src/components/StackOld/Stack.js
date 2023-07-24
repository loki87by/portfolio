import React from "react";
import { STACK, STACK_STYLES } from "../../utils/consts.js";
import { TranslationContext } from "../../contexts/translationContext.js";
import "./Stack.css";
import "./styles/__text-container/Stack__text-container.css";
import "./styles/__text/Stack__text.css";
import "./styles/__container/Stack__container.css";
import "./styles/__image-container/Stack__image-container.css";
import "./styles/__image-container/_selected/Stack__image-container_selected.css";
import "./styles/__image/Stack__image.css";
import "./styles/__filter/Stack__filter.css";
import "./styles/__filter/_opened/Stack__filter_opened.css";
import "./styles/__checkbox/Stack__checkbox.css";

function Stack(props) {
  const [showFilter, setShowFilter] = React.useState(false);
  const translation = React.useContext(TranslationContext);

  function toggleFiltersMenu() {
    const newState = !showFilter;
    setShowFilter(newState);
  }
/*
  function changeFilter(e) {
    const target = e.target;
    let arr = [];

    if (props.selectedStack.some((item) => item === target.name)) {
      arr = props.selectedStack
        .map((item) => {
          if (item !== target.name) {
            return item;
          } else {
            return null;
          }
        })
        .filter((item) => item !== null);
    } else {
      arr = props.selectedStack.slice();
      arr.push(target.name);
    }
    props.setSelectedStack(arr);
  } */

  return (
    <section className="Stack" ref={props.scrollRef}>
      <div className="Stack__text-container">
        <h4 className="Stack__text">{translation.elementary}</h4>
        <h4 className="Stack__text">{translation.advanced}</h4>
        <h4 className="Stack__text">{translation.experienced}</h4>
      </div>
      <section className="Stack__container">
        <img
          className="Stack__image-container"
          src={props.images.filter[0].src}
          title={showFilter ? translation.hideFilters : translation.showFilters}
          alt={showFilter ? translation.hideFilters : translation.showFilters}
          onClick={toggleFiltersMenu}
          style={{
            width: "2.5vw",
            height: "2.5vw",
            bottom: "1vw",
            left: "1vw",
          }}
        />
        {props.images.stack.map((img, index) => (
          <div
            key={`stackImage-${index}`}
            className={`Stack__image-container`}
            id={`stackImage-${index}`}
            style={{
              width:
                (img.naturalWidth / img.naturalHeight) * 4 < 10
                  ? `${(img.naturalWidth / img.naturalHeight) * 3.5}vw`
                  : "10vw",
              height:
                (img.naturalWidth / img.naturalHeight) * 3.5 < 10
                  ? "3.5vw"
                  : `${(10 / img.naturalWidth) * img.naturalHeight}vw`,
              top: STACK_STYLES[STACK[index]].top,
              left: STACK_STYLES[STACK[index]].left,
            }}
          >
            <img
              src={img.src}
              alt={STACK[index]}
              className="Stack__image"
              name={STACK[index]}
              title={
                /* props.selectedStack.some((item) => item ===  */
                STACK[index]/* )
                  ? translation.deleteFromListing
                  : translation.addToListing */
              }
              /* onClick={changeFilter} */
            />
          </div>
        ))}
      </section>
      <section
        className={`Stack__filter ${showFilter && "Stack__filter_opened"}`}
      >
        {/* {STACK.map((checkbox, index) => (
          <div key={`stackCheckbox-${index}`} className="Stack__checkbox">
            <input
              type="checkbox"
              multiple={true}
              id={STACK[index]}
              name={STACK[index]}
              checked={props.selectedStack.some((item) => item === checkbox)}
              onChange={changeFilter}
            />
            <label htmlFor={STACK[index]}> {STACK[index]} </label>
          </div>
        ))} */}
      </section>
    </section>
  );
}

export default Stack;
