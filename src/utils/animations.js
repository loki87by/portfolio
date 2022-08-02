import diplomAnimation from "./animations/diplomAnimation";
import zooAnimation from "./animations/zooAnimation";
import shpargalikiAnimation from "./animations/shpargalikiAnimation";
import pseudoSocialNetworkAnimation from "./animations/pseudoSocialNetwork";
import { lightAnimation } from "./helpers";
import lightAnimations from "./animations/lightAnimations";

let timersArray = [];

export function animationCreator(name, array, element) {
  if (Object.keys(lightAnimations).includes(name)) {
    timersArray = lightAnimation(array, element, lightAnimations[name]);
  }

  if (name === "diplom") {
    timersArray = diplomAnimation(array, element);
  }

  if (name === "zoo") {
    return zooAnimation(array, element);
  }

  if (name === "shpargaliki") {
    timersArray = shpargalikiAnimation(array, element);
  }

  if (name === "pseudoSocialNetwork") {
    timersArray = pseudoSocialNetworkAnimation(array, element);
  }
}

export function animationCancel(image, element) {
  timersArray.forEach((timer) => {
    clearTimeout(timer);
  });
  element.setAttribute("style", `background-image: url(${image}`);
  timersArray = [];
}
