// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

function calcTip(value) {
  if (value >= 50 && value <= 300) {
    return (15 / 100) * value;
  } else if (value < 50) {
    return (20 / 100) * value;
  } else {
    return (5 / 100) * value;
  }
}

const calculatedTip = calcTip(100);
console.log("Calculated Tip: ", calculatedTip);

// And now let's use arrays! So, create an array called bills containing the test data below.
const bills = [125, 555, 44];

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.
const tips = [calcTip(125), calcTip(555), calcTip(44)];
console.log(tips);

// BONUS: Create an array totals containing the total values, so the bill + tip.
function calcTipPlusValue(value) {
  if (value >= 50 && value <= 300) {
    return ((15 / 100) * value) + value;
  } else if (value < 50) {
    return ((20 / 100) * value) + value;
  } else {
    return ((5 / 100) * value) + value;
  }
}

const tipsPlusValue = [
  calcTipPlusValue(125),
  calcTipPlusValue(555),
  calcTipPlusValue(44),
];
console.log(tipsPlusValue);

// TEST DATA: 125, 555, and 44.
