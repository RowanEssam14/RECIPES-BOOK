import './index.css';

import { fetchRecipes } from './api';
import { Sidebar, Recipes, RecipeDetails, addCloseButtonEventListener, addCardEventListeners } from './components';

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#root');
  const mainContentContainer = document.querySelector('.main-content');

  const isPopular = true;
  const popularRecipes = await fetchRecipes(isPopular);
  const exploreRecipes = await fetchRecipes(!isPopular);

  root.insertAdjacentHTML('afterbegin', Sidebar());
  mainContentContainer.insertAdjacentHTML('beforeend', Recipes(popularRecipes, 'RECIPE OF THE DAY'));
  mainContentContainer.insertAdjacentHTML('beforeend', Recipes(exploreRecipes, 'EXPLORE RECIPES'));

  mainContentContainer.insertAdjacentHTML('beforeend', RecipeDetails());

  addCloseButtonEventListener();
  addCardEventListeners();
});
