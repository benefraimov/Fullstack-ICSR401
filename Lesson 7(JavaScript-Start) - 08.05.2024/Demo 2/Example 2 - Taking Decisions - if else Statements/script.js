// If/Else Statement

let x = 5;
let y = 5;

// let z = x > y;
// example 1
// if (x > y) {
//   console.log("it's true");
// } else {
//   console.log("it's false");
// }

// example 2
// if (x >= y) {
//   console.log("it's true");
// } else {
//   console.log("it's false");
// }

// example 3
// if (x >= y) {
//   console.log("it's true");
//   console.log("it's true");
// } else console.log("it's false");

// example 3
if (x >= y) {
  console.log("it's true");
  x = 4;
  if (x >= y) {
    console.log("it's true");
  } else {
    console.log("it's false");
  }
} else console.log("it's false");
