"use strict";

const itemContainerElement = document.querySelector(".item-container");

function addAndRemoveItems() {
  document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
      const addToCartButton = event.target;

      if (addToCartButton(".add-to-cart-button")) {
        const cartItem = document.createElement("div");
        cartItem.className = "item-box";

        cartItem.innerHTML = `<button class="item-btn" type="button" title="Delete"><i class="fa fa-close"></i></button><div class="item-description"><p class="item-title">
              <span>${title}</span></p><div class="item-description-parametrs">
              <p class="item-price"><span class="item-price-text">Price: <span class="item-price-value">${price}</span></span></p></div></div>`;

        if (itemContainerElement) {
          itemContainerElement.appendChild(cartItem);
          const cartItemsContainer =
            itemContainerElement.closest(".cart-items");
          if (cartItemsContainer) {
            cartItemsContainer.style.display = "flex";
          } else {
            throw new Error(`Элемент .cart-items не найден!`);
          }
        } else {
          throw new Error(`Элемент .item-container не найден!`);
        }

        const btnClose = cartItem.querySelector(".item-btn");

        if (btnClose) {
          btnClose.addEventListener("click", function () {
            if (cartItem) {
              cartItem.remove();
            }

            if (!document.querySelector(".item-box")) {
              if (itemContainerElement) {
                const cartItems = itemContainerElement.closest(".cart-items");
                if (cartItems) {
                  cartItems.style.display = "none";
                } else {
                  throw new Error(`Элемент .cart-items не найден!`);
                }
              } else {
                throw new Error(`Элемент .item-container не найден!`);
              }
            }
          });
        }
      }
    });
  });
}
