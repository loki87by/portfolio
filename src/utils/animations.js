import pseudoSocialNetworkAnimation from "./animations/pseudoSocialNetwork";
import disneyAnimation from "./animations/disney";
import { lightAnimation, mediumAnimation } from "./helpers";
import lightAnimations from "./animations/lightAnimations";
import mediumAnimations from "./animations/mediumAnimations";

let timersArray = [];

export function animationCreator(name, array, element) {
  if (Object.keys(lightAnimations).includes(name)) {
    timersArray = lightAnimation(array, element, lightAnimations[name]);
  }

  if (Object.keys(mediumAnimations).includes(name)) {
    timersArray = mediumAnimation(array, element, mediumAnimations[name]);
  }

  if (name === "pseudoSocialNetwork") {
    timersArray = pseudoSocialNetworkAnimation(array, element);
  }

  if (name === "disney") {
    timersArray = disneyAnimation(array, element);
  }
}

export function animationCancel(image, element) {
  timersArray.forEach((timer) => {
    clearTimeout(timer);
  });
  element.setAttribute("style", `background-image: url(${image}`);
  timersArray = [];
}
