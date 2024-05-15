////////////////////////////////////
// Equality Operators: == vs. ===
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

const num1 = "15";
const num2 = 15;

console.log(typeof num1)
console.log(typeof num2)

// The value and also The data type is equal
if (num1 === num2) console.log(`${num1} === ${num2}`, num1 === num2);
else console.log(`${num1} === ${num2}`, num1 === num2);

// The value and is equal
if (num1 == num2) console.log(`true ${num1} == ${num2}`, num1 == num2);
else console.log(`false ${num1} == ${num2}`, num1 == num2);

let id = "1";
let idCheck = 1;

if (id === idCheck) {
  console.log(true);
}else{
    console.log(false)
}
