import './index.css';

import { fetchRecipes, addCardEventListeners } from './api';
import { Sidebar, PopularRecipes, ExploreRecipes } from './components';

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#root');
  const mainContentContainer = document.querySelector('.main-content');

  const isPopular = true;
  const popularRecipes = await fetchRecipes(isPopular);
  const exploreRecipes = await fetchRecipes(!isPopular);

  root.insertAdjacentHTML('afterbegin', Sidebar());
  mainContentContainer.insertAdjacentHTML('beforeend', PopularRecipes(popularRecipes));
  mainContentContainer.insertAdjacentHTML('beforeend', ExploreRecipes(exploreRecipes));

  addCardEventListeners();
});
