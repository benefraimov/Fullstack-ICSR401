"use strict";
// Modal Concept - Show/Hide
// Selection for Open
// Selection for Close
// Storing results
// holding an array of elements by qeurySelectorAll

let modalArr = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

for (let i = 0; i < modalArr.length; i++) {
  modalArr[i].addEventListener("click", function () {
    // alert(modalArr[i].textContent)
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// Show for loop to log the text
// Add event listener on each of the element

// modal, overlay
// use classList with methods:
// * writing class without .
// remove
// add
// contains

// Refactoring code - using DRY

// Handling keyboard events
// * keydown
// * keyup
// * keypress

// For ESC keyboard:
// document.addEventListener('keydown', Callback Function (e) {
// log the e - event
// })
// e.key === 'Escape' ? classList hidden exists ?

const str1 = "abcde";

console.log(str1.length);

let x = 7;

for (let i = 0; i < x; i++) {
  console.log(x);
}
