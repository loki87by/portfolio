export const CODE = `import { BasicHomoSapiens } from "./Universe.js";
import { myFather, myMother, myWafe } from "./Family.js";
import { kindergarten, school, colledge, institute, refresherCourses, jobs, married, birthChild } from "./lifeCycle.js";

class CurrentHuman extends BasicHomoSapiens {
constructor(properties, father, mother) {
super(properties);
this._father = father;
this._mother = mother;
this._evolution = undefined;
}

getPrivateProperties() {
return this.properties.map((property) => {
const fatherPropertyValue = this._father[property.name].value;
const motherPropertyValue = this._mother[property.name].value;
const dominantGene = Math.max(fatherPropertyValue, motherPropertyValue);
property.value = dominantGene;
return property;
});
}

getEvolution() {
return this._evolution;
}

updateEvolution(state) {
this._evolution = state;
}
}

let me = new CurrentHuman(myFather, myMother);
const agu = BasicHomoSapiens.translateToBabyLanguage('Hello, World');
me.say(agu);

function evolution(state) {
me.updateEvolution(state);
}

const everyday = 24 * 60 * 60 * 1000;

const interval = setInterval(() => {
if (me.age === 28) {
const today = new Date();
if (today.getMonth() === 6) {
if (today.getDay() === 12) {
evolution(married(me.getEvolution(), myWafe));
}
}
if (today.getMonth() === 11) {
if (today.getDay() === 14) {
evolution(birthChild(me.getEvolution(), myWafe));
const mySon = new CurrentHuman(me, myWafe);
mySon.name = "Igor";
}
interval.clearInterval();
}
}
}, everyday);

const baby = this._mother.breastFeeding(me);
evolution(baby);
const infancy = kindergarten(baby);
evolution(infancy);
const childhood = school(infancy);
evolution(childhood);
const adolescence = colledge(childhood);
evolution(adolescence);
const juvenility = institute(adolescence);
evolution(juvenility);
const teenage = refresherCourses.reduce((state, course) => {
return course(state);
}, juvenility);
evolution(teenage);
const youth = jobs.reduce((state, job) => {
return job(state);
}, teenage);
me = evolution(youth);
return me.now();`

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
