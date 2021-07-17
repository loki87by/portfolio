export default function galleryAnimation(array, element) {
  let timersArray = [];
  const style = element.style.cssText;
  element.setAttribute("style", `${style}`);
  const timer1 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[1]});`);
  }, 1500);
  timersArray.push(timer1);
  const timer2 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[2]});`);
  }, 2500);
  timersArray.push(timer2);
  const timer3 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[3]});`);
  }, 3500);
  timersArray.push(timer3);
  const timer4 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[4]});`);
  }, 4000);
  timersArray.push(timer4);
  const timer5 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[5]});`);
  }, 4500);
  timersArray.push(timer5);
  const timer6 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[6]});`);
  }, 5000);
  timersArray.push(timer6);
  const timer7 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[7]});`);
  }, 5500);
  timersArray.push(timer7);
  const timer8 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[8]});`);
  }, 6500);
  timersArray.push(timer8);
  const timer9 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[9]});`);
  }, 7500);
  timersArray.push(timer9);
  const timer10 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[10]});`);
  }, 9000);
  timersArray.push(timer10);
  const timer11 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[11]});`);
  }, 10000);
  timersArray.push(timer11);
  const timer12 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[12]});`);
  }, 11000);
  timersArray.push(timer12);
  const timer13 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[13]});`);
  }, 12000);
  timersArray.push(timer13);
  const timer14 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[14]});`);
  }, 13000);
  timersArray.push(timer14);
  const timer15 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[15]});`);
  }, 14000);
  timersArray.push(timer15);
  const timer16 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[16]});`);
  }, 15000);
  timersArray.push(timer16);
  const timer17 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[17]});`);
  }, 16000);
  timersArray.push(timer17);
  return timersArray;
}