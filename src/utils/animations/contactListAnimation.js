export default function contactListAnimation(array, element) {
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
  }, 5000);
  timersArray.push(timer3);
  const timer4 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[4]});`);
  }, 5300);
  timersArray.push(timer4);
  const timer5 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[5]});`);
  }, 5500);
  timersArray.push(timer5);
  const timer6 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[6]});`);
  }, 6000);
  timersArray.push(timer6);
  const timer7 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[7]});`);
  }, 7000);
  timersArray.push(timer7);
  const timer8 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[8]});`);
  }, 7500);
  timersArray.push(timer8);
  const timer9 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[9]});`);
  }, 8500);
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
  }, 10500);
  timersArray.push(timer12);
  const timer13 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[13]});`);
  }, 11500);
  timersArray.push(timer13);
  const timer14 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[14]});`);
  }, 12000);
  timersArray.push(timer14);
  const timer15 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[15]});`);
  }, 12500);
  timersArray.push(timer15);
  const timer16 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[16]});`);
  }, 12750);
  timersArray.push(timer16);
  const timer17 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[17]});`);
  }, 13000);
  timersArray.push(timer17);
  const timer18 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[18]});`);
  }, 13500);
  timersArray.push(timer18);
  const timer19 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[19]});`);
  }, 14000);
  timersArray.push(timer19);
  const timer20 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[20]});`);
  }, 14500);
  timersArray.push(timer20);
  const timer21 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[21]});`);
  }, 15000);
  timersArray.push(timer21);
  const timer22 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[22]});`);
  }, 15750);
  timersArray.push(timer22);
  const timer23 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute("style", `background-image: url(${array[23]});`);
  }, 16500);
  timersArray.push(timer23);
  return timersArray;
}
