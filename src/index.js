import './index.css';

import { fetchRecipes, fetchIngredients } from './api';
import { AddRecipeModal, Sidebar, Recipes, addCardEventListeners, addNewIngredientEventListener } from './components';
import { addCloseModalEventListener, handleRecipeFormSubmission } from './utils';

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#root');
  const mainContentContainer = document.querySelector('.main-content');
  const addRecipeButton = document.querySelector('.button-add-recipe');

  const isPopular = true;
  const popularRecipes = await fetchRecipes(isPopular);
  const exploreRecipes = await fetchRecipes(!isPopular);
  const ingredients = await fetchIngredients();
  const units = ['cup', 'piece', 'ounces', 'pound', 'tablespoon', 'cloves'];

  root.insertAdjacentHTML('afterbegin', Sidebar());

  addRecipeButton.addEventListener('click', () => {
    mainContentContainer.insertAdjacentHTML('beforeend', AddRecipeModal(ingredients, units));
    addCloseModalEventListener();
    addNewIngredientEventListener(ingredients, units);
    handleRecipeFormSubmission();
  });

  mainContentContainer.insertAdjacentHTML('beforeend', Recipes(popularRecipes, 'RECIPE OF THE DAY'));
  mainContentContainer.insertAdjacentHTML('beforeend', Recipes(exploreRecipes, 'EXPLORE RECIPES'));
  addCardEventListeners();
});
