import { getFilter } from "./filter.js";

export const completeSliderArray = (arr, limit) => {
  let start = [];
  let finish = [];
  for (let i = 0; i < limit; i++) {
    start.push(arr[i]);
  }
  for (let i = arr.length - 1; i >= arr.length - limit; i--) {
    finish.push(arr[i]);
  }
  finish.reverse();
  const total = [...finish, ...arr, ...start];

  return total;
};

function componentToHex(c) {
  var hex = c.toString(16);

  return hex.length === 1 ? "0" + hex : hex;
}

export function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function updateColors(rgb) {
  const html = document.querySelector("html");
  let stringReverse = `rgb(${255 - rgb.r}, ${255 - rgb.b}, ${255 - rgb.b})`;
  const unreadable =
    rgb.r >= 115 &&
    rgb.r <= 140 &&
    rgb.b >= 115 &&
    rgb.b <= 140 &&
    rgb.g >= 115 &&
    rgb.g <= 140;

  if (unreadable) {
    stringReverse = `rgb(255, 255, 255)`;
  }
  let r = rgb.r + 128;
  let g = rgb.g + 128;
  let b = rgb.b + 128;

  if (r > 255) {
    r -= 255;
  }

  if (g > 255) {
    g -= 255;
  }

  if (b > 255) {
    b -= 255;
  }
  const secondColor = `rgb(${r}, ${g}, ${b})`;
  const stringRgb = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hexReverse = rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b);
  const filter = getFilter(hexReverse);
  const oldStyles = html.style.cssText;
  html.style.cssText = `${oldStyles} --filter: ${filter}`;
  html.style.setProperty("--back-color", stringRgb);
  html.style.setProperty("--main-color", stringReverse);
  html.style.setProperty("--second-color", secondColor);
}
