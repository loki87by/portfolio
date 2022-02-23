import { getFilter } from "./filter.js";

export const completeSliderArray = (arr, limit) => {
  let start = []
  let finish = []
  for (let i=0; i<limit; i++) {
    start.push(arr[i])
  }
  for (let i=arr.length - 1; i >= arr.length - limit; i--) {
    finish.push(arr[i])
  }
  finish.reverse()
  const total = [...finish, ...arr, ...start]
  return total
}

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

export function colorizeCode(code) {
  const arr = code.split(" ");
  console.log(arr);
}

export const newgame = (arr) => {
  let random = Math.random();
  let rand = Math.floor(random * 16);
  for (let i = 0; i < arr.length; i++) {
    arr[i].number = "";
    arr[i].back = "white";
    arr[i].size = "4.5vw";
    arr[i].color = "black";
  }
  arr[rand].number = 2;
};

export const getNewNumber = () => {
  let random = Math.random();
  if (random > 0.85) {
    return 4;
  } else {
    return 2;
  }
};

export function styler(array) {
  array.forEach((item) => {
    if (item.number < 65) {
      item.back = `rgb(${255 - item.number * 4}, 255, 255)`;
    } else if (item.number > 65 && item.number < 1024) {
      item.back = `rgb(0, ${255 - item.number / 4}, 255)`;
    } else if (item.number > 1023) {
      item.back = `rgb(0, 0, ${255 - item.number / 64})`;
    } else {
      item.back = "white";
    }
    if (item.number > 9999) {
      item.size = "3vw";
    } else if (item.number > 999) {
      item.size = "3.5vw";
    } else {
      item.size = "4.5vw";
    }
    if (item.number > 2000) {
      item.color = "white";
    } else {
      item.color = "black";
    }
  });
}

export function allNumbers(array) {
  let allCells = array.map((item) => {
    return item.number;
  });
  let allNumbs = allCells.filter((item) => {
    return typeof item === "number";
  });
  return allNumbs;
}

export function toVertical(
  array,
  firstLine,
  secondLine,
  thirdLine,
  fourthLine
) {
  firstLine[0] = array[0].number;
  firstLine[1] = array[4].number;
  firstLine[2] = array[8].number;
  firstLine[3] = array[12].number;
  secondLine[0] = array[1].number;
  secondLine[1] = array[5].number;
  secondLine[2] = array[9].number;
  secondLine[3] = array[13].number;
  thirdLine[0] = array[2].number;
  thirdLine[1] = array[6].number;
  thirdLine[2] = array[10].number;
  thirdLine[3] = array[14].number;
  fourthLine[0] = array[3].number;
  fourthLine[1] = array[7].number;
  fourthLine[2] = array[11].number;
  fourthLine[3] = array[15].number;
}

export function toHorizontal(
  array,
  firstLine,
  secondLine,
  thirdLine,
  fourthLine
) {
  firstLine[0] = array[0].number;
  firstLine[1] = array[1].number;
  firstLine[2] = array[2].number;
  firstLine[3] = array[3].number;
  secondLine[0] = array[4].number;
  secondLine[1] = array[5].number;
  secondLine[2] = array[6].number;
  secondLine[3] = array[7].number;
  thirdLine[0] = array[8].number;
  thirdLine[1] = array[9].number;
  thirdLine[2] = array[10].number;
  thirdLine[3] = array[11].number;
  fourthLine[0] = array[12].number;
  fourthLine[1] = array[13].number;
  fourthLine[2] = array[14].number;
  fourthLine[3] = array[15].number;
}

export function fromVertical(
  array,
  firstLine,
  secondLine,
  thirdLine,
  fourthLine
) {
  array[0].number = firstLine[0];
  array[4].number = firstLine[1];
  array[8].number = firstLine[2];
  array[12].number = firstLine[3];
  array[1].number = secondLine[0];
  array[5].number = secondLine[1];
  array[9].number = secondLine[2];
  array[13].number = secondLine[3];
  array[2].number = thirdLine[0];
  array[6].number = thirdLine[1];
  array[10].number = thirdLine[2];
  array[14].number = thirdLine[3];
  array[3].number = fourthLine[0];
  array[7].number = fourthLine[1];
  array[11].number = fourthLine[2];
  array[15].number = fourthLine[3];
}
export function fromHorizontal(
  array,
  firstLine,
  secondLine,
  thirdLine,
  fourthLine
) {
  array[0].number = firstLine[0];
  array[1].number = firstLine[1];
  array[2].number = firstLine[2];
  array[3].number = firstLine[3];
  array[4].number = secondLine[0];
  array[5].number = secondLine[1];
  array[6].number = secondLine[2];
  array[7].number = secondLine[3];
  array[8].number = thirdLine[0];
  array[9].number = thirdLine[1];
  array[10].number = thirdLine[2];
  array[11].number = thirdLine[3];
  array[12].number = fourthLine[0];
  array[13].number = fourthLine[1];
  array[14].number = fourthLine[2];
  array[15].number = fourthLine[3];
}

export function oldArrayString(array) {
  let startNumbers = array.slice().map((i) => {
    return i.number;
  });
  return startNumbers.join();
}
