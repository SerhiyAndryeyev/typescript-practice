"use strict";
// 2_Intro
const a = 3;
const b = 5;
const sum = a + b;
let c = 'str';
let d = true;
console.log(sum);
function getFulName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFulNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
const skills = ['DevOps', 'Dev', 'Testing'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const resSkills = skills
    .filter((s) => s !== 'Dev')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(resSkills);
// Tuples
const skills2 = [1, 'Dev'];
const [id, skillName] = skills2;
console.log(id, skillName);
const someArr = [1, 'sdf1', true, true, false];
// readonly
const skillsReadonly = [1, 'Dev'];
const skillsReadonly2 = ['DevOps', 'Dev', 'Testing'];
// generics
const skills3 = ['DevOps', 'Dev', 'Testing'];
const skills4 = ['DevOps', 'Dev', 'Testing'];
