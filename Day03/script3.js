//Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=
let a = 5;
let b = '10';
document.getElementById('container').innerHTML = a == b; //false
document.getElementById('container').innerHTML = 0 == false; //true
document.getElementById('container').innerHTML = 3 == "3"; //true

//Strict Equality
document.getElementById('container').innerHTML = 0 === false; //false
document.getElementById('container').innerHTML = 3 === "3"; //false

// Rules for == operator
// 1. If the types are the same, compare the values
// 2. If one of the values is null and the other is undefined, return true  

// Rules for === operator
// 1. If the types are different, return false
// 2. If the types are the same, compare the values

// Logical Operators
// &&, ||, !, ?? (nullish coalescing operator)
let x = 5;
let y = 10;
document.getElementById('container').innerHTML = (x > 0 && y > 10);
document.getElementById('container').innerHTML = (x > 0 || y > 10);
document.getElementById('container').innerHTML = !(x < 0);
// let z = null;
// document.getElementById('container').innerHTML = (z ?? 'default value');
// 

// Conditional (Ternary) Operator
let age = 12;
let canVote = (age >=18)? 'Yes':'No';
document.getElementById('container').innerHTML = 1111 & 1001;

let size = [5,2];
typeof size;
document.getElementById('container').innerHTML = typeof size;