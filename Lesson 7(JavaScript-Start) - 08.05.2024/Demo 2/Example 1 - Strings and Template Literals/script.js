// string and template literals

let firstname = "Nikita";
let age = 34;
// " " and ' ' give the same result
// to use template literals we write ``
let longString1 =
  "My name is " + firstname + " and i am " + age + " years old.";
let longString2 = `My name is ${firstname} and i am ${age} years old.`;
longString2 += 12;

console.log(longString1);
console.log(longString2);


