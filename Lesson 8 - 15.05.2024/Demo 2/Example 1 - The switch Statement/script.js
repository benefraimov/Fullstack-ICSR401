// The switch statement

const num1 = 15;

// if else if statement
if (num1 == 1) {
  console.log(num1);
} else if (num1 == 2) {
  console.log(num1);
} else if (num1 == 3) {
  console.log(num1);
} else if (num1 == 15) {
  console.log(num1);
} else {
  console.log("not here");
}

// switch statement
switch (num1) {
  case 1: {
    console.log(num1);
    break;
  }
  case 2: {
    console.log(num1);
    break;
  }
  case 14: {
    console.log("score", num1);
    break;
  }
  default: {
    console.log("default");
  }
}
