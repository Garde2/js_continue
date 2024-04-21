const apiKey = "D8qFMNk_449W0IT3Q0U2Vm9Fm5aXcwUrOwN6tDjrEvc";
const history = JSON.parse(localStorage.getItem("history")) || [];

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
  const imageElement = document.getElementById("unsplash-image");
  const photographerNameElement = document.getElementById("photographer-name");
  const likesCountElement = document.getElementById("likes-count");

  imageElement.src = imageData.urls.regular;
  photographerNameElement.textContent = imageData.user.name;
  likesCountElement.textContent = imageData.likes; //вооот тут нам надо наш лайкатель записать

  history.push(imageData.id);
  localStorage.setItem("history", JSON.stringify(history));
}

async function handleLikeButtonClick() {
  const likesCountElement = document.getElementById("likes-count");
  const likesCount = parseInt(likesCountElement.textContent);

  if (likesCount > 0) {
    likesCountElement.textContent = --likesCount;
  } else {
    likesCountElement.textContent = ++likesCount;
  }

  const imageData = await getRandomImage();
  updateImageAndInfo(imageData);
}

window.addEventListener("load", async () => {
  const imageData = await getRandomImage();
  updateImageAndInfo(imageData);
});

document
  .getElementById("like-button")
  .addEventListener("click", handleLikeButtonClick);
