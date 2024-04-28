//Доразобраться
//зарегистрироваться под именем формы
//Переделать
//записываем в отдельный массив просмотренные фото для кнопок - вперед назад (previous-button and next-button)
//в другой массив мы записываем, если лайкнули, id фото и имя пользователя, как ключ - значение
//при подгрузке картинки, мы ищем, содержится ли в массиве юзеров текущий юзер с айди текущей картинки?  и если находим - отображаем кол-во лайков +1, кнопка дизлайк активна, кнопка лайк неактивна. Если жмем дизайк - запись "пользователь-id" удаляется, кнопка дизлайк - неактивна, кнопка лайк активно.

const apiKey = "D8qFMNk_449W0IT3Q0U2Vm9Fm5aXcwUrOwN6tDjrEvc"; //наш ключик
const history = JSON.parse(localStorage.getItem("history")) || []; //берем то, что сохранено в локале или создаем новый массив

//чтоб взять рандомфото топай по этому урлу, подставляй ки, сохраняй в константу дата в формате json и оказывай чё сохранил
async function getRandomImage() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

async function updateImageAndInfo(imageData) {
  const imageContainer = document.querySelector(".image-container");
  const infoContainer = document.querySelector(".info-container");

  const imageElement = document.createElement("img");
  imageElement.id = "unsplash-image";
  imageElement.src = imageData.urls.regular;
  imageContainer.appendChild(imageElement);

  const photographerNameElement = document.querySelector("#photographer-name");
  photographerNameElement.textContent = imageData.user.name;
  infoContainer.appendChild(photographerNameElement);

  const likesCountElement = document.querySelector("#likes-count");
  likesCountElement.textContent = imageData.likes;
  infoContainer.appendChild(likesCountElement);

  const likeButtonElement = document.querySelector("#like-button");
  likeButtonElement.textContent = "Like me!";
  infoContainer.appendChild(likeButtonElement);

  const dislikeButtonElement = document.querySelector("#dislike-button");
  dislikeButtonElement.textContent = "Dislike!";
  infoContainer.appendChild(dislikeButtonElement);

  const nextButtonElement = document.querySelector("#next-button");
  nextButtonElement.textContent = "Next";
  infoContainer.appendChild(nextButtonElement);

  const previousButtonElement = document.querySelector("#previous-button");
  previousButtonElement.textContent = "Previous";
  infoContainer.appendChild(previousButtonElement);
}

async function handleLikeButtonClick(imageData) {
  let likedImageId = imageData.id;
  const likesCountElement = document.querySelector("#likes-count");
  const likesCount = parseInt(likesCountElement.textContent);
  const likeButtonElement = document.querySelector("#like-button");

  likeButtonElement.addEventListener("click", () => {
    likesCountElement.innerHTML = likesCount + 1;
    localStorage.setItem("likedImageId", likedImageId);
    updateImageAndInfo(imageData);
    history.push(imageData.id);
    localStorage.setItem("history", JSON.stringify(history));
  });
}

async function handleDislikeButtonClick(imageData) {
  let likedImageId = imageData.id;
  const likesCountElement = document.querySelector("#likes-count");
  const likesCount = parseInt(likesCountElement.textContent);
  const dislikeButtonElement = document.querySelector("#dislike-button");

  dislikeButtonElement.addEventListener("click", () => {
    likesCountElement.innerHTML = likesCount - 1;
    localStorage.setItem("likedImageId", likedImageId);
    history.push(imageData.id);
    localStorage.setItem("history", JSON.stringify(history));
  });
}

async function handleNextButtonClick() {
  const likedImageId = localStorage.getItem("likedImageId");
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const index = history.indexOf(likedImageId);
}

async function handlePreviousButtonClick() {
  const likedImageId = localStorage.getItem("likedImageId");
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const index = history.indexOf(likedImageId);
}

window.addEventListener("load", async () => {
  const imageData = await getRandomImage();
  updateImageAndInfo(imageData);

  document
    .getElementById("like-button")
    .addEventListener("click", handleLikeButtonClick);

  document
    .getElementById("dislike-button")
    .addEventListener("click", handleDislikeButtonClick);
});

//Доразобраться
// function registerUser(name) {
//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   users.push(name);
//   localStorage.setItem("users", JSON.stringify(users));
// }

// function isUserRegistered(name) {
//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   return users.includes(name);
// }

// document
//   .getElementById("register-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const name = document.getElementById("name").value;
//     if (!isUserRegistered(name)) {
//       registerUser(name);
//       alert("User registered successfully!");
//     } else {
//       alert("User already registered!");
//     }
//   });
