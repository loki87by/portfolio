import React, { useState, useEffect, useContext } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import Sprite from "../Sprite/Sprite";
import bio from "../../images/icons/bio.svg";
import games from "../../images/icons/games.svg";
import contacts from "../../images/icons/contacts.svg";
import servers from "../../images/icons/servers.svg";
import docs from "../../images/icons/docs.svg";
import sites from "../../images/icons/sites.svg";
import gallery from "../../images/icons/gallery.svg";
import servises from "../../images/icons/servises.svg";
import stack from "../../images/icons/stack.svg";
import social from "../../images/icons/social.svg";
import works from "../../images/icons/works.svg";
import undo from "../../images/icons/undo.svg";
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

  function openSection(arg) {
    props.setOpenedSection(arg);

    if (arg !== "" && arg !== "works") {
      props.scrollToElement();
    }
  }

  return (
    <section className="Resume">
      <div
        className={`Resume__button Resume__button_top_first
      ${props.openedWorks && "Resume__button_top_first_work"}`}
      >
        <Sprite
          src={!props.openedWorks ? bio : games}
          click={() => {
            !props.openedWorks ? openSection("bio") : openSection("games");
          }}
          id={!props.openedWorks ? "bio" : "games"}
          width="5vmin"
          height="5vmin"
          title={!props.openedWorks ? translation.bio : translation.games}
        />
      </div>
      <div
        className={`Resume__button Resume__button_top_second ${
          props.openedWorks && "Resume__button_top_second_work"
        }`}
      >
        <Sprite
          src={!props.openedWorks ? contacts : servers}
          click={() => {
            !props.openedWorks
              ? openSection("contacts")
              : openSection("servers");
          }}
          id={!props.openedWorks ? "contacts" : "servers"}
          width="5vmin"
          height="5vmin"
          title={!props.openedWorks ? translation.contacts : translation.server}
        />
      </div>
      <div
        className={`Resume__button Resume__button_top_third ${
          props.openedWorks && "Resume__button_top_third_work"
        }`}
      >
        <Sprite
          src={!props.openedWorks ? docs : sites}
          click={() => {
            !props.openedWorks ? openSection("docs") : openSection("sites");
          }}
          id={!props.openedWorks ? "docs" : "sites"}
          width="5vmin"
          height="5vmin"
          title={!props.openedWorks ? translation.docs : translation.landing}
        />
      </div>
      <img
        alt="фото"
        src={mouseOver ? effectAva : avatar.src}
        className="Resume__photo"
      />
      <div
        className={`Resume__button Resume__button_bottom_first
      ${props.openedWorks && "Resume__button_bottom_first_work"}`}
      >
        <Sprite
          src={!props.openedWorks ? gallery : servises}
          click={() => {
            !props.openedWorks
              ? openSection("gallery")
              : openSection("servises");
          }}
          id={!props.openedWorks ? "gallery" : "servises"}
          width="5vmin"
          height="5vmin"
          title={
            !props.openedWorks ? translation.gallery : translation.webService
          }
        />
      </div>
      <div
        className={`Resume__button Resume__button_bottom_second
      ${props.openedWorks && "Resume__button_bottom_second_work"}`}
      >
        <Sprite
          src={!props.openedWorks ? stack : social}
          click={() => {
            !props.openedWorks ? openSection("stack") : openSection("social");
          }}
          id={!props.openedWorks ? "stack" : "social"}
          width="5vmin"
          height="5vmin"
          title={!props.openedWorks ? translation.stack : translation.social}
        />
      </div>
      <div
        className={`Resume__button Resume__button_bottom_third
      ${props.openedWorks && "Resume__button_bottom_third_work"}`}
      >
        <Sprite
          src={!props.openedWorks ? works : undo}
          click={
            !props.openedWorks
              ? () => {
                  openSection("works");
                  props.setOpenedWorks(true);
                }
              : () => {
                  openSection("");
                  props.setOpenedWorks(false);
                }
          }
          id={!props.openedWorks ? "works" : "undo"}
          width="5vmin"
          height="5vmin"
          title={!props.openedWorks ? translation.works : translation.undo}
        />
      </div>
    </section>
  );
}

export default Resume;
