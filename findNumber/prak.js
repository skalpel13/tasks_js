"use strict";
// let elem = document.querySelector("#elem");
//let text = document.querySelectorAll("#input");
// let button = document.querySelector("#button");
// let elem2 = document.querySelector("#elem2");
// let img = document.querySelector("#img"

let text = document.querySelector("#p");
let item = document.querySelector("input");
let tryq = document.querySelector("span");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

item.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    tryq.textContent = +tryq.textContent + 1;

    if (Number(item.value == randomNumber)) {
      text.textContent = "You are winner!!!";
    } else if (Number(item.value > randomNumber)) {
      text.textContent = "введите число поменьше";
    } else if (Number(item.value < randomNumber)) {
      text.textContent = "введите число побольше";
    } else {
      text.textContent = "Please, write a number";
    }
  }
});
