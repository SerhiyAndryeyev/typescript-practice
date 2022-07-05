"use strict";
// Union types
const arr4 = ['sdf', 1];
function logId(id) {
    if (typeof id === 'string') { // narrowing
        console.log(id); // string
    }
    else if (typeof id === 'number') {
        console.log(id); // number
    }
    else {
        console.log(id); // boolean
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleId(a, b) {
    if (a === b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
// literal types
const a4 = 1;
let b4 = 1;
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth('s', 'get');
let method = 'post';
fetchWithAuth('s', method); // cast to type;
