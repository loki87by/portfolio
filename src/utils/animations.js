import diplomAnimation from './animations/diplomAnimation';
import zooAnimation from './animations/zooAnimation';
import galleryAnimation from './animations/galleryAnimation';
import mmgAnimation from './animations/mmgAnimation';
import galleryNgAnimation from './animations/galleryNgAnimation';
let timersArray = [];

export function animationCreator(name, array, element) {
  if (name === "diplom") {
    timersArray = diplomAnimation(array, element);
  }
  if (name === "zoo") {
    return zooAnimation(array, element);
  }
  if (name === "mmg") {
    return mmgAnimation(array, element);
  }
  if (name === "gallery") {
    return galleryAnimation(array, element);
  }
  if (name === "galleryNg") {
    return galleryNgAnimation(array, element);
  }
}

export function animationCancel(image, element) {
  timersArray.forEach((timer) => {
    clearTimeout(timer);
  });
  element.setAttribute("style", `background-image: url(${image}`);
  timersArray = [];
}
