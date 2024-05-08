/*
////////////////////////////////////
// Linking a JavaScript File - Demo 1
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables - Demo 1
console.log("Ben");
console.log(23);

let firstName = "Efraimov";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let Ben_Efraimov = "BE";
let $function = 27;

let person = "Ben";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types - Demo 1
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Ben');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var - Demo 1
let age = 30;
age = 31;

const birthYear = 1994;
// birthYear = 1993;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Efraimov';
console.log(lastName);

////////////////////////////////////
// Basic Operators - Demo 1
// Math operators
const now = 2037;
const ageBen = now - 1994;
const ageAvital = now - 2024;
console.log(ageBen, ageAvital);

console.log(ageBen * 2, ageBen / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Ben';
const lastName = 'Efraimov';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageBen > ageAvital); // >, <, >=, <=
console.log(ageAvital >= 18);

const isFullAge = ageAvital >= 18;

console.log(now - 1994 > now - 2024);

////////////////////////////////////
// Operator Precedence - Demo 1
const now = 2037;
const ageBen = now - 1994;
const ageAvital = now - 2024;

console.log(now - 1994 > now - 2024);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageBen + ageAvital) / 2;
console.log(ageBen, ageAvital, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/