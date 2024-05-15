////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
//BMI = mass / height ** 2
let marksMass = 78;
let johnMass = 95;

let marksHeight = 1.69;
let johnHeight = 1.88;

const markBMI = marksMass / marksHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log("markHigher BMI : ", markHigherBMI);

// let strExample = "world";

if (!markHigherBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
//   strExample = "guys";
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}

// const strHello = "world";
// const strTemplateLiteral = `hello ${strExample}`;
// console.log(strTemplateLiteral);
