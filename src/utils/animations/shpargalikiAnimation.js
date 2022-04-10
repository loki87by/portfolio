export default function shpargalikiAnimation(array, element) {
  let timersArray = [];
  const style = element.style.cssText;
  element.setAttribute(
    "style",
    `${style} background-position-y: bottom; transition: background-position-y 2s`
  );
  const timer1 = setTimeout(() => {
    element.setAttribute(
      "style",
      `${style} background-position-y: 25%; transition: background-position-y 1.7s`
    );
  }, 2000);
  timersArray.push(timer1);
  const timer2 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[1]}); background-position-y: 25%; transition: background-position-y 1.7s`
    );
  }, 3700);
  timersArray.push(timer2);
  const timer3 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[2]}); background-position-y: 25%; transition: background-position-y 1.7s`
    );
  }, 4200);
  timersArray.push(timer3);
  const timer4 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[2]}); background-position-y: top; transition: background-position-y .3s`
    );
  }, 4800);
  timersArray.push(timer4);
  const timer5 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[3]}); background-position-y: top; background-size: contain;`
    );
  }, 5800);
  timersArray.push(timer5);
  const timer6 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[4]}); background-position-y: top; background-size: contain;`
    );
  }, 6800);
  timersArray.push(timer6);
  const timer7 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[5]}); background-position-y: top; background-size: contain;`
    );
  }, 7800);
  timersArray.push(timer7);
  const timer8 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[6]}); background-position-y: top; background-size: contain;`
    );
  }, 8800);
  timersArray.push(timer8);
  const timer9 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[7]}); background-position-y: top; background-size: contain;`
    );
  }, 9800);
  timersArray.push(timer9);
  const timer10 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[8]}); background-position-y: top; background-size: contain;`
    );
  }, 10800);
  timersArray.push(timer10);
  const timer11 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[9]}); background-position-y: top; background-size: contain;`
    );
  }, 11800);
  timersArray.push(timer11);
  const timer12 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[10]}); background-position-y: top; background-size: contain;`
    );
  }, 12800);
  timersArray.push(timer12);
  const timer13 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[11]}); background-position-y: top; background-size: contain;`
    );
  }, 13200);
  timersArray.push(timer13);
  const timer14 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[12]}); background-position-y: top; background-size: contain;`
    );
  }, 14200);
  timersArray.push(timer14);
  const timer15 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[13]}); background-position-y: top; background-size: contain;`
    );
  }, 14600);
  timersArray.push(timer15);
  const timer16 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[14]}); background-position-y: top; background-size: contain;`
    );
  }, 15600);
  timersArray.push(timer16);
  return timersArray;
}
