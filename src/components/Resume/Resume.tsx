import React, { useState, useEffect, useContext, ReactElement } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import {
  ResumeProps,
  FakeImageObject,
  TranslationItem,
} from "../../utils/types";
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
import RunnerText from "../RunnerText/RunnerText";

function Resume(props: ResumeProps): ReactElement {
  const [avatar, setAvatar] = useState<HTMLImageElement | FakeImageObject>({
    src: undefined,
  });
  const [animations, setAnimations] = useState<
    HTMLImageElement[] | FakeImageObject[]
  >([
    { src: undefined },
    { src: undefined },
    { src: undefined },
    { src: undefined },
  ]);
  const [mouseOver, setMouseOver] = useState(false);
  const [runnerTextreseted, setRunnerTextreseted] = useState(false);
  const [effectAva, setEffectAva] = useState<string | undefined>(undefined);

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
    const ava = document.querySelector(".Resume__photo");

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
    ava?.addEventListener("mouseover", hoverOn);
    ava?.addEventListener("mouseout", hoverOff);

    return () => {
      ava?.removeEventListener("mouseover", hoverOn);
      ava?.removeEventListener("mouseout", hoverOff);
    };
  });

  function openSection(arg: string) {
    props.setOpenedSection(arg);

    if (arg !== "") {
      props.scrollToElement();
    }
  }

  return (
    <section className="Resume">
      <div
        className={`Resume__button Resume__button_top_first
      ${props.openedWorks && "Resume__button_top_first_work"}`}
      >
        <RunnerText
          isSlider={false}
          left={true}
          data={
            !props.openedWorks
              ? (translation as unknown as TranslationItem).bio
              : (translation as unknown as TranslationItem).games
          }
          isMobile={props.isMobile}
          delay={3600}
          reversedFull={!props.isMobile && props.openedWorks}
          reverse={props.isMobile}
          reversedWorks={props.isMobile && props.openedWorks}
          reseted={runnerTextreseted}
          reset={setRunnerTextreseted}
          index={!props.openedWorks ? 0 : 5}
        />
        <Sprite
          src={!props.openedWorks ? bio : games}
          click={() => {
            !props.openedWorks ? openSection("bio") : openSection("games");
            setRunnerTextreseted(true);
          }}
          id={!props.openedWorks ? "bio" : "games"}
          width="5vmin"
          height="5vmin"
          title={!props.openedWorks ? translation?.bio : translation?.games}
        />
      </div>
      <div
        className={`Resume__button Resume__button_top_second ${
          props.openedWorks && "Resume__button_top_second_work"
        }`}
      >
        <RunnerText
          isSlider={false}
          left={true}
          data={
            !props.openedWorks
              ? (translation as unknown as TranslationItem).contacts
              : (translation as unknown as TranslationItem).server
          }
          isMobile={props.isMobile}
          delay={3600}
          reversedFull={!props.isMobile && props.openedWorks}
          reverse={props.isMobile}
          reversedWorks={props.isMobile && props.openedWorks}
          reseted={runnerTextreseted}
          reset={setRunnerTextreseted}
          index={!props.openedWorks ? 0 : 5}
        />
        <Sprite
          src={!props.openedWorks ? contacts : servers}
          click={() => {
            !props.openedWorks
              ? openSection("contacts")
              : openSection("servers");
            setRunnerTextreseted(true);
          }}
          id={!props.openedWorks ? "contacts" : "servers"}
          width="5vmin"
          height="5vmin"
          title={
            !props.openedWorks ? translation?.contacts : translation?.server
          }
        />
      </div>
      <div
        className={`Resume__button Resume__button_top_third ${
          props.openedWorks && "Resume__button_top_third_work"
        }`}
      >
        <RunnerText
          isSlider={false}
          right={true}
          data={
            !props.openedWorks
              ? (translation as unknown as TranslationItem).docs
              : (translation as unknown as TranslationItem).landing
          }
          isMobile={props.isMobile}
          delay={3600}
          reversedFull={!props.isMobile && props.openedWorks}
          reverse={props.isMobile}
          reversedWorks={props.isMobile && props.openedWorks}
          reseted={runnerTextreseted}
          reset={setRunnerTextreseted}
          index={!props.openedWorks ? 1 : props.lang === "ru" ? 6 : 10}
        />
        <Sprite
          src={!props.openedWorks ? docs : sites}
          click={() => {
            !props.openedWorks ? openSection("docs") : openSection("sites");
            setRunnerTextreseted(true);
          }}
          id={!props.openedWorks ? "docs" : "sites"}
          width="5vmin"
          height="5vmin"
          title={!props.openedWorks ? translation?.docs : translation?.landing}
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
        <RunnerText
          isSlider={false}
          right={true}
          data={
            !props.openedWorks
              ? (translation as unknown as TranslationItem).gallery
              : (translation as unknown as TranslationItem).webService
          }
          isMobile={props.isMobile}
          delay={3600}
          reversedFull={!props.isMobile && props.openedWorks}
          reverse={props.isMobile}
          reversedWorks={props.isMobile && props.openedWorks}
          reseted={runnerTextreseted}
          reset={setRunnerTextreseted}
          index={!props.openedWorks ? 2 : 7}
        />
        <Sprite
          src={!props.openedWorks ? gallery : servises}
          click={() => {
            !props.openedWorks
              ? openSection("gallery")
              : openSection("servises");
            setRunnerTextreseted(true);
          }}
          id={!props.openedWorks ? "gallery" : "servises"}
          width="5vmin"
          height="5vmin"
          title={
            !props.openedWorks ? translation?.gallery : translation?.webService
          }
        />
      </div>
      <div
        className={`Resume__button Resume__button_bottom_second
      ${props.openedWorks && "Resume__button_bottom_second_work"}`}
      >
        <RunnerText
          isSlider={false}
          right={true}
          data={
            !props.openedWorks
              ? (translation as unknown as TranslationItem).stack
              : (translation as unknown as TranslationItem).social
          }
          isMobile={props.isMobile}
          delay={3600}
          reversedFull={!props.isMobile && props.openedWorks}
          reverse={props.isMobile}
          reversedWorks={props.isMobile && props.openedWorks}
          reseted={runnerTextreseted}
          reset={setRunnerTextreseted}
          index={!props.openedWorks ? 3 : 8}
        />
        <Sprite
          src={!props.openedWorks ? stack : social}
          click={() => {
            !props.openedWorks ? openSection("stack") : openSection("social");
            setRunnerTextreseted(true);
          }}
          id={!props.openedWorks ? "stack" : "social"}
          width="5vmin"
          height="5vmin"
          title={!props.openedWorks ? translation?.stack : translation?.social}
        />
      </div>
      <div
        className={`Resume__button Resume__button_bottom_third
      ${props.openedWorks && "Resume__button_bottom_third_work"}`}
      >
        <RunnerText
          isSlider={false}
          left={true}
          data={
            !props.openedWorks
              ? (translation as unknown as TranslationItem).works
              : (translation as unknown as TranslationItem).undo
          }
          isMobile={props.isMobile}
          delay={3600}
          reversedFull={!props.isMobile && props.openedWorks}
          reverse={props.isMobile}
          reversedWorks={props.isMobile && props.openedWorks}
          reseted={runnerTextreseted}
          reset={setRunnerTextreseted}
          index={!props.openedWorks ? 4 : 9}
        />
        <Sprite
          src={!props.openedWorks ? works : undo}
          click={
            !props.openedWorks
              ? () => {
                  openSection("works");
                  props.setOpenedWorks(true);
                  setRunnerTextreseted(true);
                }
              : () => {
                  openSection("");
                  props.setOpenedWorks(false);
                  setRunnerTextreseted(true);
                }
          }
          id={!props.openedWorks ? "works" : "undo"}
          width="5vmin"
          height="5vmin"
          title={!props.openedWorks ? translation?.works : translation?.undo}
        />
      </div>
    </section>
  );
}

export default Resume;
