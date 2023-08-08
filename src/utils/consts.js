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

export const SOFT = [
  "Adobe After Effects",
  "Adobe Audition",
  "Charles",
  "CorelDRAW",
  "Figma",
  "Adobe Photoshop",
  "Postman",
  "Visual Studio Code",
  "Git",
];

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
  "redux",
  "sql",
  "svg",
  "typescript",
  "vue",
  "webpack",
];

export const GALLERY = [
  "Не остаюсь в должниках (даже перед Родиной)",
  "Открыт к взаимодействию",
  "Готов к командной работе",
  "Приемлю творческий подход",
  "Без мота сяду на велик, без IDE напишу код в блокноте",
  "Уважаю чужие достижения",
  "Имею амбициозные цели...",
  "...Довольствуясь тем, что есть.",
  "Готов к командировкам",
  "Не пасую перед сложностями...",
  "...А рад справляться с ними",
  "Готов обучать молодежь азам...",
  "...И всему, что знаю и умею",
  "...И оказывать поддержку в дальнейшем",
  "Не боюсь соревноваться с сильнейшими",
  "Стремлюсь достигать новые вершины...",
  "...Не забывая /*приземляться*/",
  "Не отступаюсь от намеченного пути",
];
