"use strict";

const itemContainerElement = document.querySelector(".cart-items");

const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

const cartSection = document.querySelector(".cart-bag");
cartSection.style.display = "none";

const addToCartButton = document.querySelector(".add-to-cart-button");
addToCartButton.addEventListener("click", () => {
  cartSection.style.display = "block";
});

function addToCart(event) {
  event.preventDefault();

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  const buttonElem = document.createElement("button");
  buttonElem.classList.add("item-btn");
  buttonElem.type = "button";
  buttonElem.title = "Delete";

  const btnIEl = document.createElement("i");
  btnIEl.classList.add("fa", "fa-close");

  const cardTitle = document.createElement("p");
  cardTitle.textContent = event.target.dataset.productTitle;

  const cardDesc = document.createElement("p");
  cardDesc.textContent = event.target.dataset.productDesc;

  const cardPrice = document.createElement("p");
  cardPrice.textContent = parseFloat(event.target.dataset.productPrice);

  itemContainerElement.appendChild(cartItem);
  cartItem.appendChild(buttonElem);
  buttonElem.appendChild(btnIEl);
  buttonElem.appendChild(btnIEl);
  cartItem.appendChild(cardTitle);
  cartItem.appendChild(cardDesc);
  cartItem.appendChild(cardPrice);

  const removeFromCartButtons = document.querySelectorAll(
    ".remove-from-cart-btn"
  );
  removeFromCartButtons.forEach((button) => {
    button.addEventListener("click", removeFromCart);
  });

  const cartSection = document.querySelector(".cart-bag");
  cartSection.style.display = "block";
}

function removeFromCart(event) {
  event.preventDefault();
  const cartItem = event.target.parentElement;
  cartItem.remove();

  const cartItemsContainer = document.querySelector(".cart-items");
  if (cartItemsContainer.children.length === 0) {
    const cartSection = document.querySelector(".cart-bag");
    cartSection.style.display = "none";
  }
}
