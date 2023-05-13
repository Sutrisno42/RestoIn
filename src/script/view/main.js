import "../component/meal-menu.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealListElement = document.querySelector("meal-menu");

  const getMeal = () => {
    DataSource.Meal().then(renderResult).catch(fallbackResult);
  };

  const onButtonSearchClicked = () => {
    DataSource.searchMeal(searchBox.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (result) => {
    mealListElement.meals = result;
  };

  const fallbackResult = (message) => {
    mealListElement.renderError(message);
  };
  searchElement.clickEvent = onButtonSearchClicked;
  getMeal();
};

export default main;
