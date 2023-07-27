"use strict";
let input = document.querySelector("#input");
let list = document.querySelector("#list");

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    let li = document.createElement("li");

    let task = document.createElement("span");
    task.classList.add("task");
    task.textContent = this.value;
    task.addEventListener("dblclick", function () {
      let text = task.textContent;
      task.textContent = "";
      let redakt = document.createElement("input");
      redakt.value = text;
      redakt.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
          task.textContent = redakt.value;
          li.removeChild(li.firstChild);
        }
      });
      li.insertBefore(redakt, li.firstChild);
    });
    li.appendChild(task);

    let remove = document.createElement("span");
    remove.classList.add("remove");
    remove.textContent = "удалить";
    remove.addEventListener("click", function () {
      list.removeChild(this.parentNode); // Удаляем элемент из списка
    });
    li.appendChild(remove);

    let mark = document.createElement("span");
    mark.classList.add("mark");
    mark.textContent = "сделано";
    mark.addEventListener("click", function () {
      let listFirstItem = this.parentNode.firstElementChild;
      listFirstItem.classList.add("line");
    });
    li.appendChild(mark);

    list.appendChild(li);

    this.value = "";
  }
});
