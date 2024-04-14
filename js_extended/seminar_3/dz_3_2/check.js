const buttonAdd = document.querySelector(".add-btn");
const checkProducts = document.querySelector(".check-products");
checkProducts.style.listStyle = "none";

if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const reviews = [];
    JSON.parse(localStorage.getItem(key)).forEach((elem) => {
      reviews.push(elem);
    });
    const liEl = document.createElement("li");
    liEl.id = key;
    checkProducts.appendChild(liEl);
    liEl.textContent = key;

    const showHideButton = document.createElement("button");
    showHideButton.textContent = "Показать отзывы";
    showHideButton.classList.add("show");
    liEl.appendChild(showHideButton);

    reviews.forEach((elem) => {
      const reviewEl = document.createElement("p");
      reviewEl.textContent = elem;
      reviewEl.classList.add("elem");
      reviewEl.style.display = "none";
      liEl.appendChild(reviewEl);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Удалить отзыв";
      deleteButton.classList.add("remove");
      liEl.appendChild(deleteButton);
    });
  }
} else {
  checkProducts.textContent = "Нет отзывов";
}

let count = 0;

checkProducts.addEventListener("click", (e) => {
  if (e.target.classList.contains("show")) {
    count++;
    if (count % 2 !== 0) {
      e.target.textContent = "Скрыть отзывы";
      let temp = e.target.parentElement.getElementsByTagName("p");
      for (let i = 0; i < temp.length; i++) {
        const element = temp[i];
        element.style.display = "block";
      }
    } else {
      e.target.textContent = "Показать отзывы";
      let temp = e.target.parentElement.getElementsByTagName("p");
      for (let i = 0; i < temp.length; i++) {
        const element = temp[i];
        element.style.display = "none";
      }
    }
  }
  if (e.target.classList.contains("remove")) {
    const elId = e.target.parentElement.parentElement.id; // id продукта - совпадает с ключом в localStorage
    const product = e.target.parentElement.parentElement; // родительский элемент отзыва (продукт)

    product.removeChild(e.target.parentElement); // удаление отзыва со страницы

    if (product.getElementsByTagName("p").length === 0) {
      product.style.display = "none";
      localStorage.removeItem(elId);
    }
  }
});

buttonAdd.addEventListener("click", () => {
  location.href = "addReview.html";
});
