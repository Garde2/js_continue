const btnEl = document.querySelector(".btn");
const modalEl = document.querySelector(".modal");

btnEl.addEventListener("click", () => {
  modalEl.classList.add("active");
});

const closeEl = document.querySelector(".close");
closeEl.addEventListener("click", () => {
  modalEl.classList.remove("active");
});

//под модалкой лежит слой, закрывающий всё пространство. и если на слой кликают, то модалка закрывается
// в аддэвент лисенер не надо юзать this, хочешь получить btnEl сделай event.currentTarget если просто target то event.target
//в стрелочных this запоминается в момент создания, а не в момент выполнения 44:50
//поэтому в них не будет лежать btnEl. вот если function то будет
//если стрелочная то будет то, что было в this ДО eventlistener, то что было в this в тот момент, когда создавалась функция тут - виндов
