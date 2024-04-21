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

  const userLikesElement = document.querySelector("#userLikes-title");
  infoContainer.appendChild(userLikesElement);

  const dislikeButtonElement = document.querySelector("#dislike-button");

  dislikeButtonElement.textContent = "Dislike!";
  infoContainer.appendChild(dislikeButtonElement);

  const dislikeCountElement = document.querySelector("#dislikes-count");
  infoContainer.appendChild(dislikeCountElement);

  history.push(imageData.id);
  localStorage.setItem("history", JSON.stringify(history));
  localStorage.setItem("dislikesCount", dislikeCountElement.textContent);
  localStorage.setItem("likesCount", likesCountElement.textContent);
}

async function handleLikeButtonClick() {
  let likedImageId;
  const likesCountElement = document.getElementById("likes-count");
  const likesCount = parseInt(likesCountElement.textContent);
  const dislikeCountElement = document.getElementById("dislikes-count");
  const dislikeCount = parseInt(dislikeCountElement.textContent);

  if (likesCount > 0) {
    likesCountElement.textContent = ++likesCount;
  } else {
    likesCountElement.textContent = 1;
  }

  if (dislikeCount > 0) {
    dislikeCountElement.textContent = --dislikeCount;
  } else {
    dislikeCountElement.textContent = 0;
  }

  const imageData = await getRandomImage();
  updateImageAndInfo(imageData);

  likedImageId = imageData.id;
  localStorage.setItem("likedImageId", likedImageId);
}

// async function handleLikeButtonClick() {
//     let likedImageId;
//     const likesCountElement = document.getElementById("likes-count");
//     let likesCount = parseInt(likesCountElement.textContent);
//     const dislikeCountElement = document.getElementById("dislikes-count");
//     const dislikeCount = parseInt(dislikeCountElement.textContent);

//     if (likesCount > 0) {
//       likesCountElement.textContent = ++likesCount;
//     } else {
//       likesCountElement.textContent = 1;
//     }

//     if (dislikeCount > 0) {
//       dislikeCountElement.textContent = --dislikeCount;
//     } else {
//       dislikeCountElement.textContent = 0;
//     }

//     const imageData = await getRandomImage();
//     updateImageAndInfo(imageData);

//     likedImageId = imageData.id;
//     localStorage.setItem("likedImageId", likedImageId);
//   }

window.addEventListener("load", async () => {
  const imageData = await getRandomImage();
  updateImageAndInfo(imageData);
});

document
  .getElementById("like-button")
  .addEventListener("click", handleLikeButtonClick);
