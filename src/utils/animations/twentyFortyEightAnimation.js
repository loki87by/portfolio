export default function twentyFortyEightAnimation(array, element) {
  let timersArray = [];
  const style = element.style.cssText;
  element.setAttribute("style", `${style}`);
  const timer1 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[1]});`);
  }, 3000);
  timersArray.push(timer1);
  const timer2 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[2]});`);
  }, 4500);
  timersArray.push(timer2);
  const timer3 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[3]});`);
  }, 6000);
  timersArray.push(timer3);
  const timer4 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[4]});`);
  }, 7500);
  timersArray.push(timer4);
  const timer5 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[5]});`);
  }, 9000);
  timersArray.push(timer5);
  const timer6 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[6]});`);
  }, 10500);
  timersArray.push(timer6);
  return timersArray;
}
