//LocalStorage и SessionStorage
//посетитель и счетчики, может, лайков

localStorage.setItem("username", "John");

let storedUsername = localStorage.getItem("username");
console.log("Значение из LocalStorage:", storedUsername);

localStorage.removeItem("username");

//проверим что удалили

let storedUsername2 = localStorage.getItem("username");
console.log("Значение из LocalStorage:", storedUsername2);

//очистка

localStorage.setItem("username", "John");
localStorage.setItem("isLoggedIn", "true");

//чистим локал
localStorage.clear();

//проверяем что счетчик пустой
console.log("LocalStorage", localStorage);

//счетчики!

// есть ли счетчик в локале
if (localStorage.getItem("counter")) {
  //если есть, то увеличиваем на 1
  let counter = parseInt(localStorage.getItem("counter")) + 1;
  localStorage.setItem("counter", counter.toString());
} else {
  //если нет значения счетчика - ставим 1
  localStorage.setItem("counter", "1");
}

console.log("Счетчик посещений:", localStorage.getItem("counter"));

//проверка, есть ли счетчик в локал сторейдж
let counter = localStorage.getItem("counter")
  ? parseInt(localStorage.getItem("counter"))
  : 0;

//обновиляем знач счетчика и сохраняем в локале
const updateCounter = () => {
  counter++;
  localStorage.setItem("counter", counter.toString());
};

//выводим текущее значение на страницу
//конечно хорошо бы сделать перемнную, куэрри и в нее добавлять текст контент, но тут точечное действие
document.querySelector("counter").textContent = counter;

//обработчик для кнопки увеличить счетчик
document.querySelector(".increment").addEventListener("click", () => {
  updateCounter();
  document.querySelector("counter").textContent = counter;
});
