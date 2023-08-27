import React, { useContext, ReactElement } from "react";
import { TranslationContext } from "../../contexts/translationContext";
import { ContactsProps } from "../../utils/types";
import Sprite from "../Sprite/Sprite";
import map from "../../images/icons/map.svg";
import call from "../../images/icons/phone.svg";
import telega from "../../images/icons/telegram.svg";
import email from "../../images/icons/email.svg";
import github from "../../images/icons/github.svg";
import "./Contacts.css";

function Contacts(props: ContactsProps): ReactElement {
  const translation = useContext(TranslationContext);

  return (
    <section className="Contacts" ref={props.scrollRef}>
      <h1 className="Contacts__title">
        {translation?.specify}
        <br />
        {translation?.author}
      </h1>
      <h2 className="Contacts__subtitle">{translation?.contacts}:</h2>
      <h3 className="Contacts__subsubtitle">
        {translation?.location}:&nbsp;
        <a
          href="https://www.google.by/maps/place/%D0%9A%D1%83%D0%B4%D1%80%D0%BE%D0%B2%D0%BE,+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@59.9128557,30.5064604,3a,75y,166.69h,90t/data=!3m8!1e2!3m6!1sAF1QipNfVLEQZxc7OuaJLGUb4iG0LuLpbUswNv7qia3U!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNfVLEQZxc7OuaJLGUb4iG0LuLpbUswNv7qia3U%3Dw203-h152-k-no!7i1920!8i1440!4m16!1m8!3m7!1s0x46962e8b123b731f:0x2483258cd0c89f16!2z0JrRg9C00YDQvtCy0L4sINCb0LXQvdC40L3Qs9GA0LDQtNGB0LrQsNGPINC-0LHQuy4!3b1!8m2!3d59.9027356!4d30.5125235!16s%2Fg%2F1216lqk0!3m6!1s0x46962e8b123b731f:0x2483258cd0c89f16!8m2!3d59.9027356!4d30.5125235!10e5!16s%2Fg%2F1216lqk0!5m1!1e1?entry=ttu"
          className="Contacts__text"
          target="_blank"
          rel="noreferrer"
        >
          {translation?.city}&nbsp;&nbsp;
          <Sprite
            src={map}
            id={"map"}
            width="2vmax"
            height="2vmax"
            title={translation?.map}
          />
        </a>
      </h3>
      <h3 className="Contacts__subsubtitle">
        {translation?.phone}:&nbsp;
        <a href="tel:+79955935759" className="Contacts__text">
          +7(995)593-57-56&nbsp;&nbsp;
          <Sprite
            src={call}
            id={"call"}
            width="2vmax"
            height="2vmax"
            title={translation?.call}
          />
        </a>
      </h3>
      <h3 className="Contacts__subsubtitle">
        Telegram:&nbsp;
        <a
          href="https://telegram.me/loki87by"
          target="_blank"
          className="Contacts__text"
          rel="noreferrer"
        >
          @loki87by&nbsp;&nbsp;
          <Sprite
            src={telega}
            id={"telega"}
            width="2vmax"
            height="2vmax"
            title={translation?.telegram}
          />
        </a>
      </h3>
      <h3 className="Contacts__subsubtitle">
        {`e-mail: `}
        <a href="mailto:loki87.666@gmail.com" className="Contacts__text">
          loki87.666@gmail.com&nbsp;&nbsp;
          <Sprite
            src={email}
            id={"email"}
            width="2vmax"
            height="2vmax"
            title={translation?.email}
          />
        </a>
      </h3>
      <h3 className="Contacts__subsubtitle">
        Github:&nbsp;
        <a
          className="Contacts__text Contacts__link"
          target="_blank"
          href="https://github.com/loki87by"
          rel="noreferrer"
        >
          https://github.com/loki87by&nbsp;&nbsp;
          <Sprite
            src={github}
            id={"github"}
            width="2vmax"
            height="2vmax"
            title={translation?.github}
          />
        </a>
      </h3>
    </section>
  );
}

export default Contacts;
