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

// The Game Solution

// The Start with Check Button
let numberToGuess = document.querySelector(".number");
let numRandom = Math.trunc(Math.random() * 20) + 1;
let guessedNumber = document.querySelector(".guess");
let guessingMessage = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let body = document.querySelector("body");

document.querySelector(".check").addEventListener("click", () => {
  if (guessedNumber.value == numRandom) {
    guessingMessage.textContent = "🎉 Correct Number!";
    body.style.backgroundColor = "#60b347";
    numberToGuess.textContent = numRandom;
    if (highScore.textContent == 0 || score.textContent > highScore.textContent)
      highScore.textContent = score.textContent;
  } else {
    guessedNumber > numRandom ? guessingMessage.textContent = "📉 Too High.." : guessingMessage.textContent = "📈 Too Low..";  
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
})

// implementing the reset functionality

// Cleanning the Code
// Refactoring Technique with:
// DRY - Don't Repeat Yourself
