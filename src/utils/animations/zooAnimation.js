export default function zooAnimation(array, element) {
  let timersArray = [];
  const style = element.style.cssText;
  element.setAttribute(
    "style",
    `${style} background-position-y: bottom; transition: background-position-y 18s linear;`
  );
  const timer1 = setTimeout(() => {
    element.setAttribute(
      "style",
      `${style} background-position-y: top; transition: background-position-y 6s`
    );
  }, 18000);
  timersArray.push(timer1);
  const timer2 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[1]}); background-position-y: top;`
    );
  }, 24000);
  timersArray.push(timer2);
  const timer3 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[1]}); background-position-y: bottom; transition: background-position-y 2s`
    );
  }, 24500);
  timersArray.push(timer3);
  const timer4 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[1]}); background-position-y: top; transition: background-position-y 2s`
    );
  }, 26500);
  timersArray.push(timer4);
  const timer5 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[2]}); background-position-y: top;`
    );
  }, 28500);
  timersArray.push(timer5);
  const timer6 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[2]}); background-position-y: bottom; transition: background-position-y 9s linear`
    );
  }, 29000);
  timersArray.push(timer6);
  const timer7 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[2]}); background-position-y: top; transition: background-position-y 3s`
    );
  }, 38000);
  timersArray.push(timer7);
  const timer8 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[3]}); background-position-y: top;`
    );
  }, 41000);
  timersArray.push(timer8);
  const timer9 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[3]}); background-position-y: bottom; transition: background-position-y 3s`
    );
  }, 41500);
  timersArray.push(timer9);
  const timer10 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[3]}); background-position-y: top; transition: background-position-y 3s`
    );
  }, 43500);
  timersArray.push(timer10);
  return timersArray;
}