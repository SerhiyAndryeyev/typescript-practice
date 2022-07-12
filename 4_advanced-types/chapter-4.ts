// Union types
const arr4 = ['sdf', 1];

function logId(id: string | number | boolean) {
    if (typeof id === 'string') { // narrowing
        console.log(id); // string
    } else if (typeof id === 'number') {
        console.log(id); // number
    } else {
        console.log(id); // boolean
    }
}

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}

function logObject(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

function logMultipleId(a: string | number, b: string | boolean) {
    if (a === b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

// literal types
const a4 = 1;
let b4: 1 = 1;

function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1;
}
fetchWithAuth('s', 'get');

let method = 'post';

fetchWithAuth('s', method as 'post'); // cast to type, pay attention to use cast type;

// Type alias
type httpMethod = 'post' | 'get';

function fetchWithAuth2(url: string, method: httpMethod): 1 | -1 {
    return 1;
}

type User = {
    name: string,
    age: number,
    skills: string[]
}
let user: User = {
    name: 'sett',
    age: 46,
    skills: ['1', '2']
}
type Role = {
    id: number
}
// intersection
type UserWithRole = User & Role;

let userWithRole: UserWithRole = {
    name: 'sett',
    age: 46,
    skills: ['1', '2'],
    id: 1
}

type UserWithRole2 = {
    user: User,
    role: Role
}

// interfaces
interface UserInterface {
    name: string,
    age: number,
    skills: string[]
}
let user2: UserInterface = {
    name: 'sett',
    age: 46,
    skills: ['1', '2']
}
// extends
interface UserInterface2 {
    name: string,
    age: number,
    skills: string[]
    log: (id: number) => string
}
interface Role2 {
    roleId: number
}
interface UserInterface2WithRole extends UserInterface2, Role2 {
    createdAt: Date
}
let user3: UserInterface2WithRole = {
    name: 'sett',
    age: 46,
    skills: ['1', '2'],
    roleId: 3,
    createdAt: new Date(),
    log(id) {
        return 'id'
    }
}
// index properties
interface UserDictionary {
    [index: number]: User
}
type UserDictionary2 = {
    [index: string]: User
}
// Record
type ud = Record<number, User>

// optional
interface User2 {
    login: string,
    password?: string //optional property
}
let user5: User2 = {
    login: "a@a.ua",
    password: '123'
}

function multiply(first: number, second?: number): number { //optional argument
    if (!second) {
        return first * first;
    }
    return first * second;
}
function multiply2(first: number, second: number = 5): number { //default value for argument
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(5);
multiply2(3);

interface UserPro {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
}
function testPass(user: UserPro) {
    const test = user.password?.type; //auto-check for undefined
}

function test(param?: string) {
    const t = param ?? multiply(5); // if param null or undefined then run function multiply()
}

// void
type voidFunc = () => void;
const f1: voidFunc = () => {
    return true;
}
const someFunc = f1(); //void(don't return anything)

const skills6 = ['Dev', 'DevOps'];
const user6 = {
    s: ['s']
}

skills6.forEach((skill) => user6.s.push(skill)); // ignore what push return

// unknown
let input: unknown;

input = 3;
input = ['df', 'sdfd'];

function run(i: unknown) {
    if (typeof i === 'number') {
        i++;
    } else {
        i;
    }
}

run(input);

async function getData() {
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function getDataForce() {
    try {
        await fetch('');
    } catch (error) {
        const e = error as Error; // not recommended way
        console.log(e.message);
    }
}

type U1 = unknown | number;  // type alias with unknown=unknown

type I1 = unknown & string; // type intersection with unknown=some type(string)

// Never
function genereateError(message: string): never {
    throw new Error(message);
}

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            // ...
            break;
        case 'checkout':
            // ...
            break;
        default:
            const _: never = action;
            throw new Error("There isn't the action");
    }
}

function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    genereateError('sdfsadf');
}

// Null
const n: null = null;
const n2: any = null;

interface UserNew {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: 'someName'
        } as User
    }
}

const userNew = getUser();
if (userNew) {
    const n55 = userNew.name;
}

// Type assertion (Приведение типов)

