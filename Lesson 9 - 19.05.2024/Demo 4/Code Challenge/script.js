// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
bills[0]; //22
bills[9]; //52
// Create empty arrays for the tips and the totals (tips and totals)
const tips = [];
const totals = [];

// Use the calcTip function we wrote before to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

function calcTipPlusValue(value) {
  if (value >= 50 && value <= 300) {
    totals.push((15 / 100) * value + value);
  } else if (value < 50) {
    totals.push((20 / 100) * value + value);
  } else {
    totals.push((5 / 100) * value + value);
  }
}

// function calcTipPlusValue(value) {
//   if (value >= 50 && value <= 300) {
//     return (15 / 100) * value + value;
//   } else if (value < 50) {
//     return (20 / 100) * value + value;
//   } else {
//     return (5 / 100) * value + value;
//   }
// }

for (let i = 0; i < bills.length; i++) {
  console.log("index: ", i);
  calcTipPlusValue(bills[i]);
}

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:
function calcAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  calculateAvgOfBills = sum / arr.length;
  return calculateAvgOfBills;
}

console.log(calcAverage(totals));
// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

////////indexes:  0  , 1,  2,   3,   4,  5,   6,   7,   8,  9
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.
