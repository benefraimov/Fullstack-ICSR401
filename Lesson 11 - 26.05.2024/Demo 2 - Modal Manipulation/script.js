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

let closeButton = document.querySelector(".close-modal");

closeButton.addEventListener("click", function () {
  // console.log("works")
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

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
document.addEventListener("keydown", function (event) {
  // log the e - event
  // console.log(event);
  if (event.key === "Escape") {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  }
});
// e.key === 'Escape' ? classList hidden exists ?
