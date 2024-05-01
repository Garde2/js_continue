//Доразобраться
//зарегистрироваться под именем формы
//Переделать
//записываем в отдельный массив просмотренные фото для кнопок - вперед назад (previous-button and next-button)
//в другой массив мы записываем, если лайкнули, id фото и имя пользователя, как ключ - значение
//при подгрузке картинки, мы ищем, содержится ли в массиве юзеров текущий юзер с айди текущей картинки?  и если находим - отображаем кол-во лайков +1, кнопка дизлайк активна, кнопка лайк неактивна. Если жмем дизайк - запись "пользователь-id" удаляется, кнопка дизлайк - неактивна, кнопка лайк активно.

const apiKey = "D8qFMNk_449W0IT3Q0U2Vm9Fm5aXcwUrOwN6tDjrEvc"; //наш ключик
const history = JSON.parse(localStorage.getItem("history")) || []; //берем то, что сохранено в локале или создаем новый массив
const userKey = JSON.parse(localStorage.getItem("userKey")) || [];

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
  saveImageAndInfo(imageData);
}

//сохраним полученную картинку и инфо о ней в local storage

async function saveImageAndInfo(imageData) {
  const iEId = imageData.id;
  const iEUrls = imageData.urls.regular;
  const iEUser = imageData.user.name;
  const iELikes = imageData.likes;

  localStorage.setItem("history", iEId, iEUrls, iEUser, iELikes);
}

//нужно доставать из истории

async function getImageFromHistory() {
  return JSON.parse(localStorage.getItem("history")) || [];
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
    localStorage.setItem("history", likedImageId);
    localStorage.setItem("userKey", likedImageId);
    updateImageAndInfo(imageData);
    history.push(imageData.id);
    userKey.push(imageData.id);
    localStorage.setItem("history", JSON.stringify(history));
    localStorage.setItem("userKey", JSON.stringify(userKey));
  });
}

async function handleDislikeButtonClick(imageData) {
  let likedImageId = imageData.id;
  const likesCountElement = document.querySelector("#likes-count");
  const likesCount = parseInt(likesCountElement.textContent);
  const dislikeButtonElement = document.querySelector("#dislike-button");

  dislikeButtonElement.addEventListener("click", () => {
    likesCountElement.innerHTML = likesCount - 1;

    // если imgid существует и в юзерки и в img - удаляем запись из юзерки и прибавляем один лайк в отображение инфы о лайках в историю в локале

    if (userKey.includes(likedImageId) === imgFull.includes(likedImageId)) {
      const index = userKey.indexOf(likedImageId);
      userKey.splice(index, 1);
      localStorage.setItem("userKey", JSON.stringify(userKey));
      updateImageAndInfo(imageData);
      history.splice(index, 1);
      localStorage.setItem("history", JSON.stringify(history));
      localStorage.setItem("userKey", JSON.stringify(userKey));
    }

    // else  не существует - записываем в юзерки айди картинки и айди юзера
  });
}

async function handleNextButtonClick() {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  const nextButton = JSON.parse(localStorage.getItem("next-button"));
  nextButton.addEventListener("click", () => {
    // покажем следующую просмотренную картинкукоторую сохранили в локал сторейдж
    //иначе - получим новую getRandomImage
    getRandomImage();
  });
}

async function handlePreviousButtonClick() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const previousButton = JSON.parse(localStorage.getItem("previous-button"));

  previousButton.addEventListener("click", () => {
    // покажем предыдущую просмотренную картинкукоторую сохранили в локал сторейдж
    const previousImageId = history[history.length - 2];
    const previousImage = JSON.parse(localStorage.getItem(previousImageId));
    updateImageAndInfo(previousImage);
    history.pop();
    localStorage.setItem("history", JSON.stringify(history));
    // localStorage.setItem("previous-button", JSON.stringify(previousButton));
  });
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

// Доразобраться
// По идее сюда с конкретного юзреа должен записывать ID картинки, если дизлайкнул и, может, еще одн массив, если лайкнул
// тогда при отображении проверять, был лайк или излайк и выводить кол-во записанных лайков исходя из этого

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
