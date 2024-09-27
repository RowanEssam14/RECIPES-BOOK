import './index.css';

import { fetchPopularRecipes, fetchExploreRecipes, addCardEventListeners } from './api';
import { Sidebar, PopularRecipes, ExploreRecipes } from './components';

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#root');
  const mainContentContainer = document.querySelector('.main-content');

  const popularRecipes = await fetchPopularRecipes();
  const exploreRecipes = await fetchExploreRecipes();
  root.insertAdjacentHTML('afterbegin', Sidebar());
  mainContentContainer.insertAdjacentHTML('beforeend', PopularRecipes(popularRecipes));
  mainContentContainer.insertAdjacentHTML('beforeend', ExploreRecipes(exploreRecipes));

  addCardEventListeners();
});
