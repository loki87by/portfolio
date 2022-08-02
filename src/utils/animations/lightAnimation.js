export default function lightAnimation(array, element, timeoutsArray) {
  let timersArray = [];
  const style = element.style.cssText;
  element.setAttribute("style", `${style}`);

  for (let i = 0; i < timeoutsArray.length; i++) {
    const timer = setTimeout(() => {
      element.removeAttribute("style");
      element.setAttribute("style", `background-image: url(${array[i + 1]});`);
    }, timeoutsArray[i]);
    timersArray.push(timer);
  }
  return timersArray;
}
