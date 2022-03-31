export default function mrsAnimation(array, element) {
  let timersArray = [];
  const style = element.style.cssText;
  element.setAttribute("style", `${style}`);
  const timer1 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[1]});`);
  }, 2500);
  timersArray.push(timer1);
  const timer2 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[2]});`);
  }, 3500);
  timersArray.push(timer2);
  const timer3 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[3]});`);
  }, 5000);
  timersArray.push(timer3);
  const timer4 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[4]});`);
  }, 6500);
  timersArray.push(timer4);
  const timer5 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[5]});`);
  }, 7500);
  timersArray.push(timer5);
  const timer6 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[6]});`);
  }, 9000);
  timersArray.push(timer6);
  const timer7 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[7]});`);
  }, 10000);
  timersArray.push(timer7);
  const timer8 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[8]});`);
  }, 11000);
  timersArray.push(timer8);
  const timer9 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[9]});`);
  }, 12500);
  timersArray.push(timer9);
  const timer10 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[10]});`);
  }, 14000);
  timersArray.push(timer10);
  return timersArray;
}
