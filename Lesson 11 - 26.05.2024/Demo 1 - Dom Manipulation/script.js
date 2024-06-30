"use strict";

// Dom Manipulate

// document.querySelector('.')
// document.querySelector('.').textContent

// Example 1
// When we want to get a specific element
// let gameRule = document.querySelector(".between");

// console.log(gameRule);

// gameRule.textContent = "between 1 to 30"

// console.log(gameRule)

// console.log(document.querySelector(".score").textContent);

// document.querySelector(".guess").value = 20;

// Dom - Document Object Model: Structed representation of html documents.
// The Dom allows javascript to access html elements and styles to manipulate them.

// See values or content, change content or value
// document.querySelector('.').textContent = "something"
// document.querySelector('.').value

// Handling Click Events
// document.querySelector('.').addEventListener('click', eventHandler)
// eventHandler is a function
// where to define
// random numbers: Math.random(), Math.trunc(reduse decimals)


// let document1 = {
//   h1: "this is header",
// }

// console.log(document1["h1"]);


// The Game Solution

// The Start with Check Button
let numberToGuess = document.querySelector(".number");
let numRandom = Math.trunc(Math.random() * 20) + 1;// the random number 
let guessedNumber = document.querySelector(".guess");// the guess input element
let guessingMessage = document.querySelector(".message");// the guessing message 
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let body = document.querySelector("body");

console.log(numRandom)

let checkButton = document.querySelector(".check");


checkButton.addEventListener("click", () => {
  if (guessedNumber.value == numRandom) {
    guessingMessage.textContent = "🎉 Correct Number!";// first manipulation
    body.style.backgroundColor = "#60b347";// second manipulation 
    numberToGuess.textContent = numRandom;// third manipulation 
    if (Number(highScore.textContent) == 0 || Number(score.textContent) > Number(highScore.textContent)) {
      console.log("highScore.textContent: ", highScore.textContent, "score.textContent", score.textContent)
      highScore.textContent = score.textContent;
    }
  } else {
    guessedNumber.value > numRandom ? guessingMessage.textContent = "📉 Too High.." : guessingMessage.textContent = "📈 Too Low..";
    score.textContent--;
  }
});

// Getting into duplicate code situation

// Manipulate CSS styling
// document.querySelector('body').style.styleProperty

///////////////////////////////////////////////////////
// Coding Challenge #1

/*
Implement a game reset functionality, so that the
player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler.
2. In the handler function, restore initial values of the 'score' and number variables
3. Restore the initial conditions of the message.
number, score and the guess input field
4. Also restore the original background color(#222)
and number width (15rem)

Good Luck Guys :-)
*/

// The Again Button - Evene Handler\Listener
document.querySelector('.again').addEventListener("click", () => {
  // Restore the body background color
  body.style.backgroundColor = "#222";
  // hide the random number
  numberToGuess.textContent = "?";
  // restore the input value
  guessedNumber.value = "";
  // restore the score text
  score.textContent = "20";
  // restore the guessing message
  guessingMessage.textContent = "Start Guessing...";
  // recreate the random number
  numRandom = Math.trunc(Math.random() * 20) + 1;
  console.log(numRandom)
})

// implementing the reset functionality

// Cleanning the Code
// Refactoring Technique with:
// DRY - Don't Repeat Yourself