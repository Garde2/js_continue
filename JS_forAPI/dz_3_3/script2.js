//Доразобраться
//зарегились под именем по форме
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
  const imageContainer = document.querySelector(".image-container"); //часть где только фота
  const infoContainer = document.querySelector(".info-container"); //часть где только инфо

  const imageElement = document.createElement("img"); //сделали элемент картинка
  imageElement.id = "unsplash-image"; // сказали, что его id это вот то, в html
  imageElement.src = imageData.urls.regular; //и вставили то, что получили от фотки(с сервера)
  imageContainer.appendChild(imageElement); //прикрепили результат в раздел картинки

  //нашли место для имени фотографа, вставили имя взятое из той фотки в нужное место и прикрепилик  инфо-контейнеру -
  const photographerNameElement = document.querySelector("#photographer-name");
  photographerNameElement.textContent = imageData.user.name;
  infoContainer.appendChild(photographerNameElement);

  //считали из инфофото сколько раз его лайкнули, вывели в html, прикрепив к инфо контейнеру
  const likesCountElement = document.querySelector("#likes-count");
  likesCountElement.textContent = imageData.likes;
  infoContainer.appendChild(likesCountElement);

  //нашли место для кнопки, указали, что на ней написано и прицепили к инфоконтейнеру -- !! кнопица не работает
  const likeButtonElement = document.querySelector("#like-button");
  likeButtonElement.textContent = "Like me!";
  infoContainer.appendChild(likeButtonElement);

  //а тут про дизлайки кнопица -- !не работает
  const dislikeButtonElement = document.querySelector("#dislike-button");
  dislikeButtonElement.textContent = "Dislike!";
  infoContainer.appendChild(dislikeButtonElement);
}

async function handleLikeButtonClick() {
  let likedImageId;
  const likesCountElement = document.getElementById("likes-count");
  const likesCount = parseInt(likesCountElement.textContent);

  const imageData = await getRandomImage();
  updateImageAndInfo(imageData);

  likedImageId = imageData.id;
  localStorage.setItem("likedImageId", likedImageId);
}

window.addEventListener("load", async () => {
  const imageData = await getRandomImage();
  updateImageAndInfo(imageData);

  document
    .getElementById("like-button")
    .addEventListener("click", handleLikeButtonClick);

  document
    .getElementById("dislike-button")
    .addEventListener("click", handleLikeButtonClick);
});

// Add registration form for user by name and save in local storage
function registerUser(name) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(name);
  localStorage.setItem("users", JSON.stringify(users));
}

// Check if user is already registered
function isUserRegistered(name) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.includes(name);
}

// Add event listener for registration form submission
document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    if (!isUserRegistered(name)) {
      registerUser(name);
      alert("User registered successfully!");
    } else {
      alert("User already registered!");
    }
  });
