import avatar from '../images/avatar.jpg';
import diplom1 from '../images/diplom-1.jpg';
import diplom1a from '../images/d1/diplom-1a.jpg';
import diplom1b from '../images/d1/diplom-1b.jpg';
import diplom1c from '../images/d1/diplom-1c.jpg';
import diplom1d from '../images/d1/diplom-1d.jpg';
import diplom1e from '../images/d1/diplom-1e.jpg';
import diplom1f from '../images/d1/diplom-1f.jpg';
import diplom1g from '../images/d1/diplom-1g.jpg';
import diplom1h from '../images/d1/diplom-1h.jpg';
import diplom2e from '../images/d2/diplom-2e.jpg';
import diplom2f from '../images/d2/diplom-2f.jpg';
import diplom2g from '../images/d2/diplom-2g.jpg';
import diplom2c from '../images/d2/diplom-2c.jpg';
import diplom2d from '../images/d2/diplom-2d.jpg';
import diplom2b from '../images/d2/diplom-2b.jpg';
import diplom2a from '../images/d2/diplom-2a.jpg';
import diplom2 from '../images/diplom-2.jpg';
import diplom3 from '../images/diplom-3.jpg';
import project1 from '../images/project-1.jpg';
import project2 from '../images/project-2.jpg';
import project3 from '../images/project-3.jpg';
import project4 from '../images/project-4.jpg';
export const picArray = [avatar, diplom1, diplom1a, diplom1b, diplom1c, diplom1d, diplom1e, diplom1f, diplom1g, diplom1h, diplom2a, diplom2b, diplom2c, diplom2d, diplom2e, diplom2f, diplom2g, diplom2, diplom3, project1, project2, project3, project4];

export const GAME = [
  {number: '', area: 'top1', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'top2', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'top3', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'top4', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'second1', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'second2', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'second3', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'second4', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'third1', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'third2', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'third3', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'third4', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'bottom1', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'bottom2', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'bottom3', back: 'white', size: '4.5vw', color: 'black'},
  {number: '', area: 'bottom4', back: 'white', size: '4.5vw', color: 'black'},
];

const date = new Date();
const time = date.toTimeString();
const hours = +time.slice(0, 2);
const minutes = +time.slice(3, 5);
export let afterMidnight = hours * 60 + minutes;

export const getNewNumber = () => {
  let random = Math.random();
  if (random > 0.85) {
  return 4;
  } else {
    return 2;
  };
}

export function styler(array) {
  array.forEach((item) => {
    if (item.number < 65) {
      item.back = `rgb(${255 - item.number * 4}, 255, 255)`;
    } else if((item.number > 65) && (item.number < 1024)) {
      item.back = `rgb(0, ${255 - item.number / 4}, 255)`;
    } else if(item.number > 1023) {
      item.back = `rgb(0, 0, ${255 - item.number / 64})`;
    } else {
      item.back = 'white';
    }
    if (item.number > 9999) {
      item.size = '3vw';
    } else if (item.number > 999) {
      item.size = '3.5vw';
    } else {
      item.size = '4.5vw';
    }
    if (item.number > 2000) {
      item.color = 'white';
    } else {
      item.color = 'black';
    }
})
}

export function allNumbers(array) {
  let allCells = array.map((item) => {
    return item.number;
  })
  let allNumbs = allCells.filter((item) => {
    return typeof item === 'number';
  })
  return allNumbs;
}

export function toVertical(array, firstLine, secondLine, thirdLine, fourthLine) {
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

export function toHorizontal(array, firstLine, secondLine, thirdLine, fourthLine) {
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

export function fromVertical(array, firstLine, secondLine, thirdLine, fourthLine) {
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
export function fromHorizontal(array, firstLine, secondLine, thirdLine, fourthLine) {
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
  })
  return startNumbers.join();
}
