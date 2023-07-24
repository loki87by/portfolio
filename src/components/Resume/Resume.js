import React, { useState, useEffect, useContext } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import Sprite from "../Sprite/Sprite";
import bio from "../../images/bio.svg";
import contacts from "../../images/contacts.svg";
import docs from "../../images/docs.svg";
import info from "../../images/info.svg";
import stack from "../../images/stack.svg";
import works from "../../images/works.svg";
import "./Resume.css";

function Resume(props) {
  const [avatar, setAvatar] = useState({ src: null });
  const [animations, setAnimations] = useState([
    { src: null },
    { src: null },
    { src: null },
    { src: null },
  ]);
  const [mouseOver, setMouseOver] = useState(false);
  const [effectAva, setEffectAva] = useState(null);

  const translation = useContext(TranslationContext);

  useEffect(() => {
    if (props.images.avatar) {
      setAvatar(props.images.avatar[0]);
    }
  }, [props.images.avatar]);

  useEffect(() => {
    if (props.images.avatarAnimation) {
      setAnimations(props.images.avatarAnimation);
      setEffectAva(props.images.avatarAnimation[0].src);
    }
  }, [props.images.avatarAnimation]);

  useEffect(() => {
    let ava = document.querySelector(".Resume__photo");

    function changeEffect() {
      const rand = Math.random();
      const chanse = Math.floor(4 * rand);
      const avatarEffect = animations[chanse].src;
      setEffectAva(avatarEffect);
    }

    function hoverOn() {
      setMouseOver(true);
    }

    function hoverOff() {
      setMouseOver(false);
      changeEffect();
    }
    ava.addEventListener("mouseover", hoverOn);
    ava.addEventListener("mouseout", hoverOff);

    return () => {
      ava.removeEventListener("mouseover", hoverOn);
      ava.removeEventListener("mouseout", hoverOff);
    };
  });

  return (
    <section className="Resume">
      <div className="Resume__button Resume__button_top Resume__button_top_first">
        <Sprite
          src={bio}
          click={() => {
            props.setOpenedSection("bio");
            props.scrollToElement();
          }}
          id="bio"
          width="2.5vmax"
          height="2.5vmax"
          title={translation.bio}
        />
      </div>
      <div className="Resume__button Resume__button_top Resume__button_top_second">
        <Sprite
          src={contacts}
          click={() => {
            props.setOpenedSection("contacts");
            props.scrollToElement();
          }}
          id="contacts"
          width="2.5vmax"
          height="2.5vmax"
          title={translation.contacts}
        />
      </div>
      <div className="Resume__button Resume__button_top Resume__button_top_third">
        <Sprite
          src={docs}
          click={() => {
            props.setOpenedSection("docs");
            props.scrollToElement();
          }}
          id="docs"
          width="2.5vmax"
          height="2.5vmax"
          title={translation.docs}
        />
      </div>
      <img
        alt="фото"
        src={mouseOver ? effectAva : avatar.src}
        className="Resume__photo"
      />
      <div className="Resume__button Resume__button_bottom Resume__button_bottom_first">
        <Sprite
          src={info}
          click={() => {
            props.setOpenedSection("info");
            props.scrollToElement();
          }}
          id="info"
          width="2.5vmax"
          height="2.5vmax"
          title={translation.info}
        />
      </div>
      <div className="Resume__button Resume__button_bottom Resume__button_bottom_second">
        <Sprite
          src={stack}
          click={() => {
            props.setOpenedSection("stack");
            props.scrollToElement();
          }}
          id="stack"
          width="2.5vmax"
          height="2.5vmax"
          title={translation.stack}
        />
      </div>
      <div className="Resume__button Resume__button_bottom Resume__button_bottom_third">
        <Sprite
          src={works}
          click={() => {
            props.setOpenedSection("works");
            props.scrollToElement();
          }}
          id="works"
          width="2.5vmax"
          height="2.5vmax"
          title={translation.works}
        />
      </div>
    </section>
  );
}

export default Resume;
