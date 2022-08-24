export default function disneyAnimation(array, element) {
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
      )}px;  margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[1]});`
    );
  }, 1500);
  timersArray.push(timer1);
  const timer2 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
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
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; background-image: url(${array[3]});`
    );
  }, 3500);
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
  }, 4200);
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
  }, 5200);
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
  }, 5900);
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
  }, 6900);
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
  }, 7600);
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
  }, 8600);
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
  }, 9300);
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
      )}px; background-image: url(${array[11]})`
    );
  }, 10300);
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
      )}px; background-image: url(${array[12]});`
    );
  }, 11000);
  timersArray.push(timer12);
  const timer13 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[13]}); height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px;`
    );
  }, 12000);
  timersArray.push(timer13);
  const timer14 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[14]}); height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px;`
    );
  }, 12700);
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
      )}px;`
    );
  }, 13700);
  timersArray.push(timer15);
  const timer16 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[16]}); height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px;`
    );
  }, 14400);
  timersArray.push(timer16);
  const timer17 = setTimeout(() => {
    element.removeAttribute("style");
    element.setAttribute(
      "style",
      `background-image: url(${array[17]}); height: ${Math.floor(
        element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px; margin-bottom: ${Math.ceil(
        originalHeight -
          element.clientWidth / (img.naturalWidth / img.naturalHeight)
      )}px;`
    );
  }, 15400);
  timersArray.push(timer17);
  return timersArray;
}
