// 2_Intro

const a: number = 3;
const b: number = 5;
const sum: number = a + b;
let c: string = 'str';
let d: boolean = true;

console.log(sum);

function getFulName(firstname: string, surname: string): string {
    return `${firstname} ${surname}`;
}

const getFulNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`;
}

const skills: string[] = ['DevOps', 'Dev', 'Testing'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}

const resSkills = skills
    .filter((s: string) => s !== 'Dev')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);

console.log(resSkills);

// Tuples
const skills2: [number, string] = [1, 'Dev'];
const [id, skillName] = skills2;
console.log(id, skillName);

const someArr: [number, string, ...boolean[]] = [1, 'sdf1', true, true, false];

// readonly
const skillsReadonly: readonly [number, string] = [1, 'Dev'];
const skillsReadonly2: readonly string[] = ['DevOps', 'Dev', 'Testing'];

// generics
const skills3: Array<string> = ['DevOps', 'Dev', 'Testing'];
const skills4: ReadonlyArray<string> = ['DevOps', 'Dev', 'Testing'];

