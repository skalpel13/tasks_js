"use strict";
// let elem = document.querySelector("#elem");
//let text = document.querySelectorAll("#input");
// let button = document.querySelector("#button");
// let elem2 = document.querySelector("#elem2");
// let img = document.querySelector("#img"
function generateTable(numRows, numCols) {
  let parentElement = document.getElementById("tableContainer");
  let table = document.createElement("table");
  parentElement.appendChild(table);

  for (let i = 0; i < numRows; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < numCols; j++) {
      let cell = document.createElement("td");
      let cellId = "cell_" + i + "_" + j;

      // Присваиваем идентификатор ячейке
      cell.id = cellId;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  // Получаем ссылки на ячейки после генерации таблицы
  items = document.querySelectorAll("td");
}

let input1 = document.querySelector("#row");
let input2 = document.querySelector("#column");
let button = document.querySelector("#button");
let tryCount = document.querySelector("span");

let find;
let arrayFind = [];
let numRow;
let numCol;
let items;
let countTry = 0;
let countWin = 0;

input1.addEventListener("blur", function () {
  numRow = Number(input1.value);
});
input2.addEventListener("blur", function () {
  numCol = Number(input2.value);
});

button.addEventListener("click", function () {
  generateTable(numRow, numCol);
  find = Math.ceil((numRow * numCol) / 10);
  console.log(find);

  for (let k = 0; arrayFind.length < find; k++) {
    let x = Math.floor(Math.random() * find);
    let y = Math.floor(Math.random() * find);
    let znan = "cell_" + x + "_" + y;
    if (!arrayFind.includes(znan)) {
      arrayFind[k] = "cell_" + x + "_" + y;
    } else {
      k--;
    }
  }
  console.log(arrayFind);
  console.log(items);

  for (let item of items) {
    item.addEventListener("click", function fun() {
      countTry++;
      tryCount.textContent = countTry;

      for (let i = 0; i < arrayFind.length; i++) {
        if (arrayFind[i] === item.id) {
          countWin++;
          item.classList.add("great");
          console.log(item.classList.value);
        }
        if (!item.getAttribute("style")) {
          item.classList.add("bad");
          console.log(item.id);
        }
        if (countWin === find) {
          let parentElement = document.getElementById("tableContainer");
          let textWin = document.createElement("p");
          textWin.textContent = "YOU FIND ALL CELLS";
          parentElement.appendChild(textWin);
          brake;
        }
      }
    });
  }
});
