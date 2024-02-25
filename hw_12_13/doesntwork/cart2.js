"use strict";

const itemContainerElement = document.querySelector(".item-container");

function addAndRemoveItems() {
  document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
      const addToCartButton = event.target;

      if (addToCartButton && addToCartButton.closest(".add-to-card-button")) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("item-box");

        // const buttonElem = document.createElement("button");
        // buttonElem.classList.add("item-btn");
        // buttonElem.type = "button";
        // buttonElem.title = "Delete";

        // const btnIEl = document.createElement("i");
        // btnIEl.classList.add("fa", "fa-close");
        // <button class="item-btn" type="button" title="Delete">
        //   <i class="fa fa-close"></i>
        // </button>;

        const cardTitle = document.createElement("p");
        cardTitle.textContent = event.target.dataset.productTitle;

        const cardDesc = document.createElement("p");
        cardDesc.textContent = event.target.dataset.productDesc;

        const cardPrice = document.createElement("p");
        cardPrice.textContent = event.target.dataset.productPrice;

        itemContainerElement.appendChild(cartItem);
        // cartItem.appendChild(buttonElem);
        // buttonElem.appendChild(btnIEl);
        cartItem.appendChild(cardTitle);
        cartItem.appendChild(cardDesc);
        cartItem.appendChild(cardPrice);

        cartItem.innerHTML = `<button class="item-btn" type="button" title="Delete"><i class="fa fa-close"></i></button>`;
        // <div class="item-descr">
        //   <p class="item-title">
        //     <span>ELLERY X M'O CAPSULE1</span>
        //   </p>
        //   <div class="item-descr-parametrs">
        //     <p class="item-price">
        //       <span class="item-price-text">Price: <span class="item-price-value">$52.00</span></span>
        //     </p>
        //     <p class="item-quantity">
        //       <span class="item-quantity-text">Quantity:</span><input
        //         type="number" class="item-input" name="Quantity" value="1"
        //         min="1" max="10">
        //     </p>
        //   </div>
        // </div>

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
