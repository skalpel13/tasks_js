"use strict";

let text = document.querySelector("#text");
let keyboard = document.querySelector("#keyboard");
let buttons = document.querySelectorAll("#key");
let space = document.querySelector("#space");
let ctrKey = document.querySelector("#ctr");
let switcher = document.querySelector("#switch");

let isUppercase = false;

switcher.addEventListener("click", function () {
  keyboard.classList.toggle("active");
});

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let letter = button.textContent;
    if (isUppercase) {
      letter = letter.toUpperCase();
    }
    text.value += letter;
  });
});

space.addEventListener("click", function () {
  text.value += " ";
});

ctrKey.addEventListener("click", function () {
  isUppercase = !isUppercase;
  buttons.forEach(function (button) {
    button.classList.toggle("big");
  });
});
