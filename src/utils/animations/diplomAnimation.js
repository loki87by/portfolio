export default function diplomAnimation(array, element) {
  let timersArray = [];
  const style = element.style.cssText;
  element.setAttribute(
    "style",
    `${style} background-position-y: bottom; transition: background-position-y 1s`
  );
  const timer1 = setTimeout(() => {
    element.setAttribute(
      "style",
      `${style} background-position-y: top; transition: background-position-y 1s`
    );
  }, 1000);
  timersArray.push(timer1);
  const timer2 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[1]}); background-position-y: top;`
    );
  }, 1300);
  timersArray.push(timer2);
  const timer3 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[2]}); background-position-y: top;`
    );
  }, 1600);
  timersArray.push(timer3);
  const timer4 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[3]}); background-position-y: top;`
    );
  }, 1900);
  timersArray.push(timer4);
  const timer5 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[4]}); background-position-y: top;`
    );
  }, 2200);
  timersArray.push(timer5);
  const timer6 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[5]}); background-position-y: top;`
    );
  }, 2500);
  timersArray.push(timer6);
  const timer7 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[6]}); background-position-y: top;`
    );
  }, 2800);
  timersArray.push(timer7);
  const timer8 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[7]}); background-position-y: top;`
    );
  }, 3100);
  timersArray.push(timer8);
  const timer9 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[8]}); background-position-y: top;`
    );
  }, 3400);
  timersArray.push(timer9);
  const timer10 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[9]}); background-position-y: top;`
    );
  }, 3700);
  timersArray.push(timer10);
  const timer11 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[9]}); background-position-y: bottom; transition: background-position-y 1.3s`
    );
  }, 4000);
  timersArray.push(timer11);
  const timer12 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[9]}); background-position-y: top; transition: background-position-y 1.3s`
    );
  }, 5300);
  timersArray.push(timer12);
  const timer13 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[10]}); background-position-y: top;`
    );
  }, 6600);
  timersArray.push(timer13);
  const timer14 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[11]}); background-position-y: top;`
    );
  }, 6900);
  timersArray.push(timer14);
  const timer15 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[12]}); background-position-y: top;`
    );
  }, 7200);
  timersArray.push(timer15);
  const timer16 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[13]}); background-position-y: top;`
    );
  }, 7500);
  timersArray.push(timer16);
  const timer17 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[14]}); background-position-y: top;`
    );
  }, 7800);
  timersArray.push(timer17);
  const timer18 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[15]}); background-position-y: top;`
    );
  }, 8100);
  timersArray.push(timer18);
  const timer19 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[16]}); background-position-y: top;`
    );
  }, 8400);
  timersArray.push(timer19);
  const timer20 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[17]}); background-position-y: top;`
    );
  }, 8700);
  timersArray.push(timer20);
  const timer21 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[17]}); background-position-y: bottom; transition: background-position-y 3.5s`
    );
  }, 9200);
  timersArray.push(timer21);
  const timer22 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[17]}); background-position-y: top; transition: background-position-y 3.5s`
    );
  }, 12700);
  timersArray.push(timer22);
  return timersArray
}
