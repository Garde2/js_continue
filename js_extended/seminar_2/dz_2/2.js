"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

let idProducts = uid();
const products = document.querySelector(".products");

initialData.forEach((elem) => {
  const productEl = document.createElement("div");
  productEl.textContent += elem.product;
  products.appendChild(productEl);

  const reviews = document.createElement("ol");
  elem.reviews.forEach((elem) => {
    idProducts = elem.id;
    reviews.innerHTML += `<li>${elem.text} (ID ${idProducts})</li>`;
  });

  products.appendChild(reviews);
  const inputUserEl = document.createElement("input");

  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Отправить";
  buttonEl.addEventListener("click", () => {
    const userInput = inputUserEl.value;
    if (userInput.length < 50 || userInput.length > 500) {
      messageEl.textContent =
        "Ошибка! Длина комментария должна быть от 50 до 500 символов!";
    } else {
      const liEl = document.createElement("li");
      liEl.textContent = userInput;
      liEl.id = uid();
      reviews.innerHTML += `<li>${liEl.textContent} (ID ${liEl.id})</li>`;
      initialData.push(reviews.lastChild);
      reviews.appendChild(reviews.lastChild);
      inputUserEl.value = "";
    }
  });
  products.appendChild(inputUserEl);
  products.appendChild(buttonEl);
});

const messageEl = document.createElement("div");
//errorMessage.textContent = "Ошибка!";
messageEl.style.color = "red";
products.appendChild(messageEl);
