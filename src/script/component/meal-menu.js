import "./meal-item.js";

class MealMenu extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }
  render() {
    this.innerHTML = "";
    this.className = "row pt-5 row-cols-1 row-cols-sm-2 row-cols-md-4 ";
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
    });
  }
  renderError(message) {
    this.innerHTML = `
    <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            text-align: center;
            margin: 0 auto;
        }
    </style>`;
    this.innerHTML += `<h2 class='placeholder'>${message}</h2>`;
  }
}

customElements.define("meal-menu", MealMenu);
