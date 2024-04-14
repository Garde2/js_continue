const title = document.querySelector(".product-name");
const description = document.querySelector(".review-text");
const comment = document.querySelector(".comment");
const buttonElement = document.querySelector(".add-review-btn");
const buttonCheck = document.querySelector(".check-btn");

// function uid() {
//   return Math.random().toString(36).slice(2);
// }

buttonElement.addEventListener("click", () => {
  // preventDefault();
  const titleEl = title.value;
  const descriptionEl = description.value;

  if (titleEl !== "" && descriptionEl !== "") {
    if (localStorage.getItem(titleEl === null)) {
      const prodList = [];
      prodList.push(descriptionEl);
      localStorage.setItem(titleEl, JSON.stringify(prodList));
    } else {
      const prodList = [];
      JSON.parse(localStorage.getItem(titleEl)).forEach((elem) => {
        prodList.push(elem);
      });
      prodList.push(descriptionEl);
      localStorage.setItem(titleEl, JSON.stringify(prodList));
    }

    comment.textContent = "Записано!";
  } else {
    comment.textContent = "Оба поля должны быть заполнены!";
  }
});

buttonCheck.addEventListener("click", () => {
  location.href = "checkReview.html";
});
