import { getFilter } from "./filter";
import { HSL } from "./types";

export const completeSliderArray = (
  arr: (HTMLImageElement | string)[],
  limit: number
): (HTMLImageElement | string)[] => {
  const start = [];
  const finish = [];

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

function componentToHex(c: number): string {
  const hex = c.toString(16);

  return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function updateColors(rgb: HSL): void {
  const html = document.querySelector("html");
  let stringReverse = `rgb(${255 - rgb.r}, ${255 - rgb.g}, ${255 - rgb.b})`;
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
  const oldStyles = html?.style.cssText;

  if (html) {
    html.style.cssText = `${oldStyles} --filter: ${filter}`;
    html.style.setProperty("--back-color", stringRgb);
    html.style.setProperty("--main-color", stringReverse);
    html.style.setProperty("--second-color", secondColor);
  }
}
