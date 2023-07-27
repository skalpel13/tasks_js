"use strict";
let rows = 3;
let cols = 3;
let colors = ["red", "green", "blue"];

let table = document.querySelector("#field");
let text = document.querySelector("span");
let countTries = 0;
text.textContent = countTries;

function nextColor(array, color) {
  let index = array.indexOf(color);
  index = (index + 1) % array.length;
  return array[index];
}

function colorCell(array) {
  let randomIndex = Math.floor(Math.random() * 3);
  return array[randomIndex];
}

for (let i = 0; i < rows; i++) {
  let row = document.createElement("tr");
  for (let k = 0; k < cols; k++) {
    let cell = document.createElement("td");
    cell.classList.add(colorCell(colors));
    cell.addEventListener("click", function () {
      countTries++;
      text.textContent = countTries;
      let nowColor = this.className;
      this.classList.remove(nowColor);
      this.classList.add(nextColor(colors, nowColor));
      let newColor = nextColor(colors, nowColor);

      let cells = document.querySelectorAll("td");
      console.log(cells);
      let g = 0;
      for (let item of cells) {
        if (item.className === newColor) {
          g++;
        }
      }
      if (g == rows * cols) {
        alert("you win");
      }
    });
    row.appendChild(cell);
  }
  table.appendChild(row);
}
