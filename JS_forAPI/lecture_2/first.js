"use strict";

let table = document.getElementsByTagName("table")[0];
let sel;

table.onclick = (event) => {
  let target = event.target.closest("td");
  if (!target) return;
  selection(target);
};

const selection = (node) => {
  if (sel) sel.classList.remove("selection");
  sel = node;
  sel.classList.add("selection");
};
