import React, { ReactElement } from "react";
import { SpriteProps } from "../../utils/types";
import "./Sprite.css";

function Sprite(props: SpriteProps): ReactElement {
  return (
    <svg
      onClick={props.click}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props.width}
      height={props.height}
      style={props.style}
      className={`${props.class} Sprite`}
    >
      <title>{props.title}</title>
      <use
        className={`${props.class}`}
        style={{ width: `${props.width}`, height: `${props.height}` }}
        href={`${props.src}#${props.id}`}
      />
    </svg>
  );
}

export default Sprite;
