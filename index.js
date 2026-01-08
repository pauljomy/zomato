import { menuArray } from "./data.js";

const itemContainer = document.getElementById("item-container");

const addItem = document.getElementById("add-item");

// addItem.addEventListener("click", () => {});

function render(items) {
  let feedHTML = "";
  menuArray.forEach((item) => {
    feedHTML += ` <div class="item">
        <div class="item-img">
            ${item.emoji}
        </div>
        <div class="item-detail">
            <div class="item-title">
                <h2>${item.name}</h2>
            </div>
            <div class="item-ingredients">
                <p>${item.ingredients.join(", ")}</p>
            </div>
            <div class="item-price">
                <p>$${item.price}</p>
            </div>
        </div>
        <div class="add-item-btn">
            <button><img src="img/plus.svg" alt="plus-icon" /></button>
        </div>
    </div>`;
  });
  itemContainer.innerHTML = feedHTML;
}

render(menuArray);
