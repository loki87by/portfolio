export default function pseudoSocialNetworkAnimation(array, element) {
  let timersArray = [];
  const img = new Image();
  img.src = array[0];
  const originalHeight = element.clientHeight;
  const timer1 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px;
      background-image: url(${array[1]});`
    );
  }, 1500);
  timersArray.push(timer1);
  const timer2 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px;  margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[2]});`
    );
  }, 2500);
  timersArray.push(timer2);
  const timer3 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px;  margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[3]});`
    );
  }, 3250);
  timersArray.push(timer3);
  const timer4 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[4]});`
    );
  }, 4250);
  timersArray.push(timer4);
  const timer5 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[5]});`
    );
  }, 5000);
  timersArray.push(timer5);
  const timer6 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[6]});`
    );
  }, 5750);
  timersArray.push(timer6);
  const timer7 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[7]});`
    );
  }, 6750);
  timersArray.push(timer7);
  const timer8 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[8]});`
    );
  }, 7400);
  timersArray.push(timer8);
  const timer9 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[9]});`
    );
  }, 8050);
  timersArray.push(timer9);
  const timer10 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[10]});`
    );
  }, 8700);
  timersArray.push(timer10);
  const timer11 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[11]});`
    );
  }, 9350);
  timersArray.push(timer11);
  const timer12 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${
        array[12]
      }); background-size: cover; background-position-y: bottom; transition: background-position-y 1s linear`
    );
  }, 10350);
  timersArray.push(timer12);
  const timer13 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[13]})`
    );
  }, 12350);
  timersArray.push(timer13);
  const timer14 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[14]});`
    );
  }, 13000);
  timersArray.push(timer14);
  const timer15 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[15]}); height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-size: cover; background-position-y: bottom; transition: background-position-y .1s linear`
    );
  }, 14100);
  timersArray.push(timer15);
  const timer16 = setTimeout(() => {
    const style = element.style.cssText;
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `${style} transition: background-position-y 1s linear;`
    );
  }, 14400);
  timersArray.push(timer16);
  const timer17 = setTimeout(() => {
    const style = element.style.cssText;
    element.removeAttribute("style");
    element.setAttribute("style", `${style} background-position-y: top;`);
  }, 15400);
  timersArray.push(timer17);
  return timersArray;
}
