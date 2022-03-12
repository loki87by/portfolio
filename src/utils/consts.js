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

let Me = new CurrentHuman(myFather, myMother);
const agu = BasicHomoSapiens.translateToBabyLanguage('Hello, World');
Me.say(agu);

function evolution(state) {
Me.updateEvolution(state);
}

const everyday = 24 * 60 * 60 * 1000;

const interval = setInterval(() => {
if (Me.age === 28) {
const today = new Date();
if (today.getMonth() === 6) {
if (today.getDay() === 12) {
evolution(married(Me.getEvolution(), myWafe));
}
}
if (today.getMonth() === 11) {
if (today.getDay() === 14) {
evolution(birthChild(Me.getEvolution(), myWafe));
const mySon = new CurrentHuman(Me, myWafe);
mySon.name = "Igor";
}
interval.clearInterval();
}
}
}, everyday);

const baby = this._mother.breastFeeding(Me);
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
Me = evolution(youth);
export default Me`;

export const STACK = [
  "angular",
  "bem",
  "css",
  "django",
  "html",
  "js",
  "markdown",
  "mongo",
  "node",
  "python",
  "react",
  "sql",
  "svg",
  "typescript",
  "vue",
  "webpack",
];

export const STACK_STYLES = {
  angular: {
    top: "9.5vw",
    left: "36%",
  },
  js: {
    top: "5vw",
    left: "86%",
  },
  html: {
    top: "0.5vw",
    left: "96%",
  },
  django: {
    top: "5vw",
    left: "10%",
  },
  svg: {
    top: "5vw",
    left: "48%",
  },
  css: {
    top: "9.5vw",
    left: "93%",
  },
  mongo: {
    top: "0.5vw",
    left: "60%",
  },
  node: {
    top: "5vw",
    left: "67%",
  },
  react: {
    top: "9.5vw",
    left: "74%",
  },
  python: {
    top: "9.5vw",
    left: "17%",
  },
  bem: {
    top: "0.5vw",
    left: "79%",
  },
  sql: {
    top: "0.5vw",
    left: "3%",
  },
  markdown: {
    top: "9.5vw",
    left: "55%",
  },
  typescript: {
    top: "0.5vw",
    left: "41%",
  },
  vue: {
    top: "0.5vw",
    left: "22%",
  },
  webpack: {
    top: "5vw",
    left: "29%",
  },
};
