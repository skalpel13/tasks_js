"use strict";
let name1 = document.querySelector("#name");
let price = document.querySelector("#price");
let amount = document.querySelector("#amount");
let add = document.querySelector("#add");
let table = document.querySelector("#table");
let total = document.querySelector("#total");

function createCell(tr, value, name) {
  let td = document.createElement("td");
  td.textContent = value;
  td.classList.add(name);
  tr.appendChild(td);
}

function recountTotal() {
  let costs = table.querySelectorAll(".cost");
  let sum = 0;

  for (let cost of costs) {
    sum += +cost.textContent;
  }
  total.textContent = sum;
}
function allowEdit(td) {
  td.addEventListener("dblclick", function () {
    let text = td.textContent;
    td.textContent = "";

    let input = document.createElement("input");
    input.value = text;
    input.focus();
    td.appendChild(input);

    input.addEventListener("keydown", function (event) {
      if (event.key == "Enter") {
        td.textContent = this.value;

        if (td.classList.contains("price") || td.classList.contains("amount")) {
          let costItem = td.parentNode.querySelector(".cost");
          let priceItem = td.parentNode.querySelector(".price");
          let amountItem = td.parentNode.querySelector(".amount");
          costItem.textContent =
            Number(priceItem.textContent) * Number(amountItem.textContent);
          recountTotal();
        }
      }
    });
  });
}

add.addEventListener("click", function () {
  let tr = document.createElement("tr");

  createCell(tr, name1.value, "name");

  createCell(tr, price.value, "price");

  createCell(tr, amount.value, "amount");
  createCell(tr, price.value * amount.value, "cost");
  createCell(tr, "удалить", "remove");
  name1.value = "";
  price.value = "";
  amount.value = "";

  table.appendChild(tr);
  recountTotal(); // пересчитаем общую сумму

  let del = document.querySelectorAll(".remove");

  for (let item of del) {
    item.addEventListener("click", function () {
      table.removeChild(this.parentNode); // Удаляем элемент из списка
      recountTotal(); // пересчитаем общую сумму
    });
  }

  let changes = document.querySelectorAll(".name, .price, .amount");
  for (let change of changes) {
    allowEdit(change);
    allowEdit(change);
    allowEdit(change);
  }
});
