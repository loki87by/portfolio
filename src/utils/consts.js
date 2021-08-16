
export const GAME = [
  { number: "", area: "top1", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "top2", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "top3", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "top4", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "second1", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "second2", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "second3", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "second4", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "third1", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "third2", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "third3", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "third4", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "bottom1", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "bottom2", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "bottom3", back: "white", size: "4.5vw", color: "black" },
  { number: "", area: "bottom4", back: "white", size: "4.5vw", color: "black" },
];

const date = new Date();
const time = date.toTimeString();
const hours = +time.slice(0, 2);
const minutes = +time.slice(3, 5);
export const AFTER_MIDNIGHT = hours * 60 + minutes;

export const HEIGHT_KOEFFICIENT = 0.75;

export const LUFT_KOEFFICIENT = 0.2;

export const MAX_NUMBER = 2048;

export const HALF_NUMBER = 1024;

export const FIRST_COLOR_LEVEL = 16;

export const SECOND_COLOR_LEVEL = 64;

export const THIRD_COLOR_LEVEL = 128;

export const MINUTES_PER_DAY = 1440;

export const MINUTE_PER_MS = 60000;
