import './index.css';

import { fetchRecipes } from './api';
import { AddRecipeModal, Sidebar, Recipes, addCardEventListeners } from './components';
import { addCloseModalEventListener } from './utils';

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#root');
  const mainContentContainer = document.querySelector('.main-content');
  const addRecipeButton = document.querySelector('.button-add-recipe');

  const isPopular = true;
  const popularRecipes = await fetchRecipes(isPopular);
  const exploreRecipes = await fetchRecipes(!isPopular);

  root.insertAdjacentHTML('afterbegin', Sidebar());

  addRecipeButton.addEventListener('click', () => {
    mainContentContainer.insertAdjacentHTML('beforeend', AddRecipeModal());
    addCloseModalEventListener();
  });

  mainContentContainer.insertAdjacentHTML('beforeend', Recipes(popularRecipes, 'RECIPE OF THE DAY'));
  mainContentContainer.insertAdjacentHTML('beforeend', Recipes(exploreRecipes, 'EXPLORE RECIPES'));
  addCardEventListeners();
});
