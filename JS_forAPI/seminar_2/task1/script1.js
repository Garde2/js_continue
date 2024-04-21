const menuEl = document.querySelector(".menu");

//делегирование. плюс - один обработчик, а минус - ищем каждый раз таргет, а если ты повесил на очень большой элемент - любой клик в любом месте - отрабатывает событие, js тратит время, а если обработчиков несколько - то плохо
//лучше вещать на ближайшего родителя
menuEl.addEventListener("click", ({ target }) => {
  if (target.closest(".menu__link")) {
    // const menuEls = document.querySelectorAll('.menu__link');
    //Array.from(menuEls).forEach((element) => {element.classList.remove("active");
    //лучше всегда проверять при делегировании, поэтому:
    document.querySelectorAll(".menu__link").forEach((element) => {
      element.classList.remove("active");
    });

    target.classList.add("active");
  }
});
